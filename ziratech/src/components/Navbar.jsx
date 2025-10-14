import React from 'react';
import { useState } from 'react';
import './Navbar.css';
import isologo from '/Isologo-ZT.ico'
import { FaLinkedin, FaInstagram,FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
   // 1. ESTADO: Controla si el menú está abierto (true) o cerrado (false).
  const [isOpen, setIsOpen] = useState(false);

  // 2. FUNCIÓN DE ALTERNANCIA: Cambia el estado al hacer clic.
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Cierra el menú móvil al hacer clic en un enlace.
  const handleLinkClick = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
   <div className={`navbar ${isOpen ? 'menu-open' : ''}`}>
    {/* 3. HEADER: Contiene el logo y el botón de hamburguesa */}
        
        <div className="navbar-logo">
          <img className='logo'  src={isologo}  alt='Logo Ziratech'/>
        </div>
      
  {/* 4. BOTÓN HAMBURGUESA: Muestra un icono u otro basado en el estado */}
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle navigation">
          {/* Usamos los iconos condicionalmente (FaTimes es la 'X', FaBars es la hamburguesa) */}
          {isOpen ?  <FaTimes />  : <FaBars />  }
        </button>
        {/* Overlay oscuro detrás del menú */}
        {isOpen && <div className="menu-overlay" onClick={toggleMenu}></div>}

      {/* 5. MENÚ DE NAVEGACIÓN: Se controla su visibilidad y estilo con CSS basado en .menu-open */}
      <div className={`navbar-menu`}>
        <div className="navbar-header">
        <div className="navbar-logo">
          <img className='logo logo-inside'  src={isologo}  alt='Logo Ziratech'/>
        </div>
      </div>
        <nav>
          <ul>
            <li><a href="#inicio" onClick={handleLinkClick}>INICIO</a></li>
            <li><a href="#quienes-somos" onClick={handleLinkClick}>QUIÉNES SOMOS</a></li>
            <li><a href="#servicios" onClick={handleLinkClick}>SERVICIOS</a></li>
            <li><a href="#portfolio" onClick={handleLinkClick}>PORTFOLIO</a></li>
            <li><a href="#contacto" onClick={handleLinkClick}>CONTACTO</a></li>
          </ul>
        </nav>
        {/* Íconos Sociales (Se moverán o esconderán con CSS) */}
      <div className="navbar-social">
        <span> 
          <a 
            href="https://www.instagram.com/ziratechok?igsh=MTdnNTlhdnN5YXRqZw==" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-danger mx-2"
            style={{ fontSize: '2rem' }}
          >
            { <FaInstagram /> } 
          </a>
        </span> 
        <span> 
          <a 
            href="https://www.linkedin.com/company/zira-tech-argentina/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary mx-2"
            style={{ fontSize: '2rem' }}
          >
            {<FaLinkedin /> } 
          </a>
        </span>
      </div>


      </div>

      
    </div>
  );
};

export default Navbar;



