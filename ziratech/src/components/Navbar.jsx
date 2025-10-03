import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        ZT
      </div>
      <nav className="navbar-menu">
        <ul>
          <li><a href="#inicio">+ INICIO</a></li>
          <li><a href="#quienes-somos">- QUIÉNES SOMOS</a></li>
          <li><a href="#servicios">- SERVICIOS</a></li>
          <li><a href="#portfolio">- PORTFOLIO</a></li>
          <li><a href="#contacto">- CONTACTO</a></li>
        </ul>
      </nav>
      <div className="navbar-social">
        <span>(O)</span> <span>in</span>
      </div>
    </div>
  );
};

export default Navbar;
