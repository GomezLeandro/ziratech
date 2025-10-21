import React, { useState } from "react";
import { projects, categories } from "../utils/PortfolioData.js";
import "./Portfolio.css";

const Portfolio = () => {
  // -----------------------------------------------------
  // 1. ESTADOS
  // -----------------------------------------------------
  const [activeCategory, setActiveCategory] = useState("Branding");
  const [paginaActual, setPaginaActual] = useState(1);
  const elementosPorPagina = 4; // Define cuántos proyectos se muestran por página
  // -----------------------------------------------------
  // 2. CÁLCULOS DE FILTRADO Y PAGINACIÓN
  // -----------------------------------------------------

  // Filtra los proyectos según la categoría activa. Si es 'TODOS', muestra todos.
  const filteredProjects =
    activeCategory === "TODOS"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  // Calcula el número total de páginas necesarias
  const totalPaginas = Math.ceil(filteredProjects.length / elementosPorPagina);

  // Calcula los índices para el método slice()
  const indiceFinal = paginaActual * elementosPorPagina;
  const indiceInicial = indiceFinal - elementosPorPagina;
  // Obtiene solo los proyectos que deben mostrarse en la página actual
  const proyectosDePagina = filteredProjects.slice(indiceInicial, indiceFinal);
  // -----------------------------------------------------
  // 3. MANEJADORES DE ESTADO
  // -----------------------------------------------------
  // Función principal para cambiar la página activa
  const cambiarPagina = (numeroDePagina) => {
    // Asegura que solo cambia la página si el número es válido
    if (numeroDePagina >= 1 && numeroDePagina <= totalPaginas) {
      setPaginaActual(numeroDePagina);
      // Opcional: Desplaza la vista al inicio del portafolio al cambiar de página
      document
        .getElementById("portfolio")
        .scrollIntoView({ behavior: "smooth" });
    }
  };

  // Función para manejar el cambio de categoría
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setPaginaActual(1); // ESENCIAL: Restablecer a la página 1 al cambiar de filtro
  };
  // -----------------------------------------------------
  // 4. LÓGICA DE PAGINACIÓN CON ELIPSIS (NUEVO CÓDIGO)
  // -----------------------------------------------------
  // Máximo de números de página centrales a mostrar (ej: 3 para mostrar ... 4 5 6 ...)
  const PAGINAS_MAXIMAS_CENTRALES = 3;
  const paginasARenderizar = [];
  // Condición para aplicar la lógica de elipsis (solo si hay muchas páginas)
  if (totalPaginas > PAGINAS_MAXIMAS_CENTRALES + 2) {
    const lado = Math.floor(PAGINAS_MAXIMAS_CENTRALES / 2); // Cuántos números a cada lado del actual
    let inicio = paginaActual - lado;
    let fin = paginaActual + lado;

    // Aseguramos que el rango central no se salga de los límites
    if (inicio < 2) {
      inicio = 2;
      fin = PAGINAS_MAXIMAS_CENTRALES + 1;
    }
    if (fin > totalPaginas - 1) {
      fin = totalPaginas - 1;
      inicio = totalPaginas - PAGINAS_MAXIMAS_CENTRALES;
    }
    inicio = Math.max(2, inicio); // Evita que inicio sea 1 o menos

    // 1. Siempre mostramos la página 1
    paginasARenderizar.push(1);

    // 2. Elipsis al inicio: Si el rango central inicia después de la página 2
    if (inicio > 2) {
      paginasARenderizar.push("...");
    }

    // 3. Números Centrales: Agrega el rango de páginas visibles
    for (let i = inicio; i <= fin; i++) {
      // Evita duplicar 1 o la última página si el rango se solapa
      if (i !== 1 && i !== totalPaginas) {
        paginasARenderizar.push(i);
      }
    }

    // 4. Elipsis al final: Si el rango central termina antes de la penúltima página
    if (fin < totalPaginas - 1) {
      paginasARenderizar.push("...");
    }

    // 5. Siempre mostramos la última página
    paginasARenderizar.push(totalPaginas);
  } else {
    // Caso sencillo: Si hay pocas páginas, mostramos todas (1, 2, 3, 4, 5)
    for (let i = 1; i <= totalPaginas; i++) {
      paginasARenderizar.push(i);
    }
  }

  // Limpia posibles duplicados resultantes de los ajustes de límites
  const paginasUnicas = paginasARenderizar.filter(
    (val, index, self) => self.indexOf(val) === index
  );

  return (
    <div id="portfolio" className="portfolio">
      <h2>+ PORTFOLIO</h2>
      <div className="portfolio-container">
        {/* --- Columna 1: Submenú de categorías --- */}
        <div className="portfolio-submenu">
          {categories.map((category) => (
            <button
              key={category}
              className={activeCategory === category ? "active" : ""}
              onClick={() => handleCategoryChange(category)}
            >
              {category.toUpperCase()}
            </button>
          ))}
        </div>

        {/* --- Columna 2: Galería de proyectos --- */}
        <div className="portfolio-grid">
          {proyectosDePagina.map((project) => (
            <div className="portfolio-item" key={project.id}>
              <img src={project.image} alt={project.title} loading="lazy" />
              <div className="portfolio-item-overlay">
                <h3>{project.title}</h3>
                <span>{project.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ----------------------------------------------------- */}
      {/* --- RENDERIZADO DEL COMPONENTE DE PAGINACIÓN --- */}
      {/* ----------------------------------------------------- */}
      {totalPaginas > 1 && (
        <div className="paginacion-container">
          {/* Botón Anterior */}
          <button
            onClick={() => cambiarPagina(paginaActual - 1)}
            disabled={paginaActual === 1}
          >
            &larr; <span className="indicadores-paginacion">Anterior</span>
          </button>
          {/* Renderiza los números o elipses del array calculado */}
          {paginasUnicas.map((item, index) =>
            item === "..." ? (
              // Si es '...', renderiza un separador no interactivo
              <span key={`dots-${index}`} className="paginacion-dots">
                ...
              </span>
            ) : (
              // Si es un número, renderiza un botón
              <button
                key={item}
                onClick={() => cambiarPagina(item)}
                className={paginaActual === item ? "active" : ""}
              >
                {item}
              </button>
            )
          )}
          {/* Botón Siguiente */}
          <button
            onClick={() => cambiarPagina(paginaActual + 1)}
            disabled={paginaActual === totalPaginas}
          >
            <span className="indicadores-paginacion">Siguiente</span> &rarr;
          </button>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
