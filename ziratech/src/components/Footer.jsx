import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <img src="/path-to-your-logo/zt-logo.png" alt="Zira Tech Logo" className="footer-logo" />
        <p>© ZIRA TECH 2025 Todos los derechos reservados.</p>
      </div>
      <a href="#inicio" className="footer-scroll-top">
        <i className="fas fa-chevron-up"></i>
      </a>
    </footer>
  );
};

export default Footer;
