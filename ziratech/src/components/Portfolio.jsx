import React, { useState } from "react";
import { projects, categories } from "../utils/PortfolioData.js";
import "./Portfolio.css";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("Branding");
  const [paginaActual, setPaginaActual] = useState(1);
  const elementosPorPagina = 4;

  const filteredProjects =
    activeCategory === "TODOS"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const totalPaginas = Math.ceil(filteredProjects.length / elementosPorPagina);

  const indiceFinal = paginaActual * elementosPorPagina;
  const indiceInicial = indiceFinal - elementosPorPagina;
  const proyectosDePagina = filteredProjects.slice(indiceInicial, indiceFinal);

  const cambiarPagina = (numeroDePagina) => {
    if (numeroDePagina >= 1 && numeroDePagina <= totalPaginas) {
      setPaginaActual(numeroDePagina);

      document
        .getElementById("portfolio")
        .scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setPaginaActual(1);
  };

  const PAGINAS_MAXIMAS_CENTRALES = 3;
  const paginasARenderizar = [];

  if (totalPaginas > PAGINAS_MAXIMAS_CENTRALES + 2) {
    const lado = Math.floor(PAGINAS_MAXIMAS_CENTRALES / 2);
    let inicio = paginaActual - lado;
    let fin = paginaActual + lado;

    if (inicio < 2) {
      inicio = 2;
      fin = PAGINAS_MAXIMAS_CENTRALES + 1;
    }
    if (fin > totalPaginas - 1) {
      fin = totalPaginas - 1;
      inicio = totalPaginas - PAGINAS_MAXIMAS_CENTRALES;
    }
    inicio = Math.max(2, inicio);

    paginasARenderizar.push(1);

    if (inicio > 2) {
      paginasARenderizar.push("...");
    }

    for (let i = inicio; i <= fin; i++) {
      if (i !== 1 && i !== totalPaginas) {
        paginasARenderizar.push(i);
      }
    }

    if (fin < totalPaginas - 1) {
      paginasARenderizar.push("...");
    }

    paginasARenderizar.push(totalPaginas);
  } else {
    for (let i = 1; i <= totalPaginas; i++) {
      paginasARenderizar.push(i);
    }
  }

  const paginasUnicas = paginasARenderizar.filter(
    (val, index, self) => self.indexOf(val) === index,
  );

  return (
    <div id="portfolio" className="portfolio">
      <h2>+ PORTFOLIO</h2>
      <div className="portfolio-container">
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

      {totalPaginas > 1 && (
        <div className="paginacion-container">
          <button
            onClick={() => cambiarPagina(paginaActual - 1)}
            disabled={paginaActual === 1}
          >
            &larr; <span className="indicadores-paginacion">Anterior</span>
          </button>

          {paginasUnicas.map((item, index) =>
            item === "..." ? (
              <span key={`dots-${index}`} className="paginacion-dots">
                ...
              </span>
            ) : (
              <button
                key={item}
                onClick={() => cambiarPagina(item)}
                className={paginaActual === item ? "active" : ""}
              >
                {item}
              </button>
            ),
          )}

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
