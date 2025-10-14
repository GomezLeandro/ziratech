import React from 'react';
import './Footer.css';
import logo from '/Isologo-ZT.ico'

const Footer = () => {
  return (
    <footer className="footer-section">
        <img src={logo} alt="Zira Tech Logo" className="footer-logo" />
      <div className="footer-content">
        <p>© ZIRA TECH 2025 Todos los derechos reservados.</p>
      </div>
      
    </footer>
  );
};

export default Footer;
