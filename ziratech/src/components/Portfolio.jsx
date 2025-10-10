import React, { useState } from 'react';
import branding1 from '/portfolio/portfolio_branding1.jpg'
import branding2 from '/portfolio/portfolio_branding2.jpg'
import branding3 from '/portfolio/portfolio_branding3.jpg'
import branding4 from '/portfolio/portfolio_branding4.jpg'
import branding5 from '/portfolio/portfolio_branding5.jpg'
import branding6 from '/portfolio/portfolio_branding6.jpg'
import branding7 from '/portfolio/portfolio_branding7.jpg'
import branding8 from '/portfolio/portfolio_branding8.jpg'
import branding9 from '/portfolio/portfolio_branding9.jpg'
import branding10 from '/portfolio/portfolio_branding10.jpg'
import branding11 from '/portfolio/portfolio_branding11.jpg'
import branding12 from '/portfolio/portfolio_branding12.jpg'
import branding13 from '/portfolio/portfolio_branding13.jpg'
import diseno1 from '/portfolio/portfolio_folleteria1.jpg'
import diseno2 from '/portfolio/portfolio_folleteria2.jpg'
import diseno3 from '/portfolio/portfolio_folleteria3.jpg'
import diseno4 from '/portfolio/portfolio_folleteria4.jpg'
import diseno5 from '/portfolio/portfolio_folleteria5.jpg'
import diseno6 from '/portfolio/portfolio_folleteria6.jpg'
import diseno7 from '/portfolio/portfolio_folleteria7.jpg'
import diseno8 from '/portfolio/portfolio_folleteria8.jpg'
import diseno9 from '/portfolio/portfolio_folleteria9.jpg'
import diseno10 from '/portfolio/portfolio_folleteria10.jpg'
import diseno11 from '/portfolio/portfolio_folleteria11.jpg'
import diseno12 from '/portfolio/portfolio_folleteria12.jpg'
import diseno13 from '/portfolio/portfolio_folleteria13.jpg'
import diseno14 from '/portfolio/portfolio_folleteria14.jpg'
import diseno15 from '/portfolio/portfolio_folleteria15.jpg'
import diseno16 from '/portfolio/portfolio_folleteria16.jpg'
import diseno17 from '/portfolio/portfolio_folleteria17.jpg'
import diseno18 from '/portfolio/portfolio_folleteria18.jpg'
import diseno19 from '/portfolio/portfolio_folleteria19.jpg'
import diseno20 from '/portfolio/portfolio_folleteria20.jpg'
import diseno21 from '/portfolio/portfolio_folleteria21.jpg'
import diseno22 from '/portfolio/portfolio_folleteria22.jpg'
import diseno23 from '/portfolio/portfolio_folleteria23.jpg'
import web1 from '/portfolio/portfolio_web1.jpg'
import web2 from '/portfolio/portfolio_web2.jpg'
import web3 from '/portfolio/portfolio_web3.jpg'
import web4 from '/portfolio/portfolio_web4.jpg'
import web5 from '/portfolio/portfolio_web5.jpg'
import web6 from '/portfolio/portfolio_web6.jpg'
import web7 from '/portfolio/portfolio_web7.jpg'
import web8 from '/portfolio/portfolio_web8.jpg'
import web9 from '/portfolio/portfolio_web9.jpg'



// --- Datos de ejemplo para los proyectos ---
// He actualizado las imágenes para que se parezcan más al diseño que quieres.
const projects = [
    { id: 1, category: 'Branding', title: 'Aulas Digitales', image: branding1},
    { id: 2, category: 'Branding', title: 'Club 54', image: branding2 },
    { id: 3, category: 'Branding', title: 'GAV Dermoéstetica', image: branding3 },
    { id: 4, category: 'Branding', title: 'Laugh & Care', image: branding4 },
    { id: 5, category: 'Branding', title: 'Laugh & Care', image: branding5 },
    { id: 6, category: 'Branding', title: 'Marcelo Marino Arquitectura', image:branding6 },
    { id: 7, category: 'Branding', title: 'Nomadland ', image: branding7 },
    { id: 8, category: 'Branding', title: 'Picadas del Pilar', image: branding8 },
    { id: 9, category: 'Branding', title: 'Paw Print', image: branding9 },
    { id: 10, category: 'Branding', title: 'RIX', image: branding10 },
    { id: 11, category: 'Branding', title: 'SMID Propiedades', image: branding11 },
    { id: 12, category: 'Branding', title: 'Wini ingredientes', image: branding12 },
    { id: 13, category: 'Branding', title: 'Ationet', image: branding13 },
    { id: 16, category: 'Diseño Grafico', title: 'Nomadland', image: diseno1 },
    { id: 17, category: 'Diseño Grafico', title: 'Clover', image: diseno2},
    { id: 18, category: 'Diseño Grafico', title: 'Peponas Cakes', image: diseno3},
    { id: 19, category: 'Diseño Grafico', title: 'Picadas del Pilar', image:diseno4 },
    { id: 20, category: 'Diseño Grafico', title: 'SMID Propiedades', image: diseno5},
    { id: 21, category: 'Diseño Grafico', title: 'SMID Propiedades', image: diseno6 },
    { id: 22, category: 'Diseño Grafico', title: 'Paw Print', image: diseno7 },
    { id: 23, category: 'Diseño Grafico', title: 'Paw Print', image: diseno8 },
    { id: 24, category: 'Diseño Grafico', title: 'Paw Print', image: diseno9 },
    { id: 25, category: 'Diseño Grafico', title: 'Paw Print', image: diseno10 },
    { id: 26, category: 'Diseño Grafico', title: 'Paw Print', image: diseno11 },
    { id: 27, category: 'Diseño Grafico', title: 'Paw Print', image:diseno12 },
    { id: 28, category: 'Diseño Grafico', title: 'Paw Print', image: diseno13 },
    { id: 29, category: 'Diseño Grafico', title: 'Paw Print', image: diseno14 },
    { id: 30, category: 'Diseño Grafico', title: 'Paw Print', image: diseno15},
    { id: 31, category: 'Diseño Grafico', title: 'AMET', image: diseno16},
    { id: 32, category: 'Diseño Grafico', title: 'RIX', image: diseno17 },
    { id: 33, category: 'Diseño Grafico', title: 'RIX', image: diseno18 },
    { id: 34, category: 'Diseño Grafico', title: 'RIX', image: diseno19 },
    { id: 35, category: 'Diseño Grafico', title: 'RIX', image: diseno20 },
    { id: 36, category: 'Diseño Grafico', title: 'RIX', image: diseno21 },
    { id: 37, category: 'Diseño Grafico', title: 'Nomadland', image: diseno22 },
    { id: 38, category: 'Diseño Grafico', title: 'Aulas Digitales', image: diseno23 },
    { id: 39, category: 'Diseño Web', title: 'Aulas Digitales', image: web1 },
    { id: 40, category: 'Diseño Web', title: 'SMID Propiedades', image: web2 },
    { id: 41, category: 'Diseño Web', title: 'Rix', image: web3 },
    { id: 42, category: 'Diseño Web', title: 'MM Ingenieria', image: web4 },
    { id: 43, category: 'Diseño Web', title: 'Astra', image: web5 },
    { id: 44, category: 'Diseño Web', title: 'Wini Ingredientes', image: web6 },
    { id: 45, category: 'Diseño Web', title: 'Artistique', image: web7 },
    { id: 46, category: 'Diseño Web', title: 'Peponas cakes', image: web8 },
    { id: 47, category: 'Diseño Web', title: 'Paw Print', image: web9 },
];

// --- Lista de categorías para el submenú ---
// Ahora usamos "ALL" y generamos el resto de categorías dinámicamente.
const categories = ['TODOS', ...new Set(projects.map(p => p.category))];

const Portfolio = () => {
  // --- Estado para la categoría seleccionada ---
  // Lo inicializamos en 'BRANDING' como se ve en la imagen de ejemplo.
  const [activeCategory, setActiveCategory] = useState('Branding');

  // --- Filtrar proyectos según la categoría activa ---
  const filteredProjects = activeCategory === 'TODOS'
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
