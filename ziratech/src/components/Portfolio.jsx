
import React, { useState } from 'react';
import  {projects, categories} from '../utils/PortfolioData.js'
import './Portfolio.css';

const Portfolio = () => {
  // --- Estados de filtrado y paginación ---
  const [activeCategory, setActiveCategory] = useState('Branding');
  const [paginaActual, setPaginaActual] = useState(1); // 👈 Nuevo estado: página actual
  const elementosPorPagina = 4; // 👈 Constante para el número de elementos

  // --- Paso 1: Filtrar proyectos según la categoría activa ---
  const filteredProjects = activeCategory === 'TODOS'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  // --- Paso 2: Calcular los datos necesarios para la paginación ---
  const totalPaginas = Math.ceil(filteredProjects.length / elementosPorPagina);
  const indiceFinal = paginaActual * elementosPorPagina;
  const indiceInicial = indiceFinal - elementosPorPagina;

  // --- Paso 3: Obtener los proyectos que se van a renderizar en la página actual ---
  const proyectosDePagina = filteredProjects.slice(indiceInicial, indiceFinal);

  // --- Función para cambiar de página ---
  const cambiarPagina = (numeroDePagina) => {
    setPaginaActual(numeroDePagina);
  };
  
  // --- Función para manejar el cambio de categoría ---
  // Cuando la categoría cambie, siempre volvemos a la página 1.
  const handleCategoryChange = (category) => {
      setActiveCategory(category);
      setPaginaActual(1); // Restablecer a la página 1 al cambiar de filtro
  };

  // --- Generar los números de página ---
  const numerosDePagina = Array.from({ length: totalPaginas }, (_, i) => i + 1);

  return (
    <div id="portfolio" className="portfolio">
      <h2>+ PORTFOLIO</h2>
      <div className="portfolio-container">
        {/* --- Columna 1: Submenú de categorías --- */}
        <div className="portfolio-submenu">
          {categories.map(category => (
            <button
              key={category}
              className={activeCategory === category ? 'active' : ''}
              onClick={() => handleCategoryChange(category)} // Usamos la nueva función
            >
              {category.toUpperCase()}
            </button>
          ))}
        </div>

        {/* --- Columna 2: Galería de proyectos --- */}
        <div className="portfolio-grid">
          {/* Usamos 'proyectosDePagina' en lugar de 'filteredProjects' */}
          {proyectosDePagina.map(project => (
            <div className="portfolio-item" key={project.id}>
              <img src={project.image} alt={project.title} />
              <div className="portfolio-item-overlay">
                <h3>{project.title}</h3>
                <span>{project.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* ----------------------------------------------------- */}
      {/* --- Componente de Paginación (debajo del grid) --- */}
      {/* ----------------------------------------------------- */}
      {totalPaginas > 1 && (
        <div className="paginacion-container">
            {/* Botón Anterior */}
            <button 
                onClick={() => cambiarPagina(paginaActual - 1)}
                disabled={paginaActual === 1}
            >
                &larr; <span  className='indicadores-paginacion' >Anterior</span>
            </button>

            {/* Números de página */}
            {numerosDePagina.map(numero => (
                <button
                    key={numero}
                    onClick={() => cambiarPagina(numero)}
                    className={paginaActual === numero ? 'active' : ''}
                >
                    {numero}
                </button>
            ))}

            {/* Botón Siguiente */}
            <button 
                onClick={() => cambiarPagina(paginaActual + 1)}
                disabled={paginaActual === totalPaginas}
            >
                <span className='indicadores-paginacion'>Siguiente</span> &rarr;
            </button>
        </div>
      )}
    </div>
  );
};

export default Portfolio;