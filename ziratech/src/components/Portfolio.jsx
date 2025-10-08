import React, { useState } from 'react';
import './Portfolio.css';

// --- Datos de ejemplo para los proyectos ---
// He actualizado las imágenes para que se parezcan más al diseño que quieres.
const projects = [
    { id: 1, category: 'Branding', title: 'CALLEBAUT', image: 'https://i.imgur.com/y2Stb2g.jpeg' },
    { id: 2, category: 'Diseño Grafico', title: 'GAZE', image: 'https://i.imgur.com/9FBd1wL.jpeg' },
    { id: 3, category: 'Branding', title: 'TAILORING INTERIOR', image: 'https://i.imgur.com/g2a4O6Z.jpeg' },
    { id: 4, category: 'Diseño Web', title: 'PROYECTO WEB 1', image: 'https://i.imgur.com/u5v3jM2.jpeg' },
    { id: 5, category: 'E-Commerce', title: 'TIENDA ONLINE 1', image: 'https://i.imgur.com/z4bQzYF.jpeg' },
    { id: 6, category: 'Diseño Web', title: 'PROYECTO WEB 2', image: 'https://i.imgur.com/d9j8dDq.jpeg' },
];

// --- Lista de categorías para el submenú ---
// Ahora usamos "ALL" y generamos el resto de categorías dinámicamente.
const categories = ['ALL', ...new Set(projects.map(p => p.category))];

const Portfolio = () => {
  // --- Estado para la categoría seleccionada ---
  // Lo inicializamos en 'BRANDING' como se ve en la imagen de ejemplo.
  const [activeCategory, setActiveCategory] = useState('BRANDING');

  // --- Filtrar proyectos según la categoría activa ---
  const filteredProjects = activeCategory === 'ALL'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <div id="portfolio" className="portfolio">
      <h2>+ PORTFOLIO</h2>
      {/* --- Contenedor principal con layout de dos columnas --- */}
      <div className="portfolio-container">
        {/* --- Columna 1: Submenú de categorías --- */}
        <div className="portfolio-submenu">
          {categories.map(category => (
            <button
              key={category}
              className={activeCategory === category ? 'active' : ''}
              onClick={() => setActiveCategory(category)}
            >
              {/* Mostramos las categorías en mayúsculas */}
              {category.toUpperCase()}
            </button>
          ))}
        </div>

        {/* --- Columna 2: Galería de proyectos --- */}
        <div className="portfolio-grid">
          {filteredProjects.map(project => (
            <div className="portfolio-item" key={project.id}>
              <img src={project.image} alt={project.title} />
              {/* Overlay que se muestra al pasar el ratón */}
              <div className="portfolio-item-overlay">
                <h3>{project.title}</h3>
                <span>{project.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
