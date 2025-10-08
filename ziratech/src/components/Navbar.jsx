import React from 'react';
import './Navbar.css';
import isologo from '../../public/Isologo-ZT.ico'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img className='logo' src={isologo} alt='Logo Ziratech'/>
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
