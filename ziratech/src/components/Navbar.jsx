import React from 'react';
import './Navbar.css';
import isologo from '/Isologo-ZT.ico'
import { FaLinkedin, FaInstagram } from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img className='logo' src={isologo} alt='Logo Ziratech'/>
      </div>
      <nav className="navbar-menu">
        <ul>
          <li><a href="#inicio">INICIO</a></li>
          <li><a href="#quienes-somos">QUIÉNES SOMOS</a></li>
          <li><a href="#servicios">SERVICIOS</a></li>
          <li><a href="#portfolio">PORTFOLIO</a></li>
          <li><a href="#contacto">CONTACTO</a></li>
        </ul>
      </nav>
      <div className="navbar-social">
        <span> 
          <a 
            href="https://www.instagram.com/ziratechok?igsh=MTdnNTlhdnN5YXRqZw==" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-danger mx-2" // Puedes usar otro color de Bootstrap
            style={{ fontSize: '2rem' }}
          >
            <FaInstagram />
          </a>
        </span> 
        <span> 
          <a 
            href="[TU_ENLACE_A_LINKEDIN]" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary mx-2" // Clases de Bootstrap para color y margen
            style={{ fontSize: '2rem' }} // Estilo para hacer el icono más grande
          >
            {/* Usar el icono como un componente */}
            <FaLinkedin />
          </a>
          </span>
      </div>
    </div>
  );
};

export default Navbar;
