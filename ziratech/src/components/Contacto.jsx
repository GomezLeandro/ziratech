import React from 'react';
import isologo from '/Isologo-ZT.ico'
import { FaLinkedin, FaInstagram,FaEnvelope } from 'react-icons/fa'
import {FaLocationDot} from 'react-icons/fa6'
const Contacto = () => {
  return (
    <section id="contacto" className="contacto-section">
      <div className="contacto-header">
        <h2> + CONTACTO</h2>
      </div>
      <div className="contacto-info">
        <p> <FaLocationDot /> Buenos Aires, Argentina</p>
        <p> <FaEnvelope/> contacto@ziratech.com.ar</p>
        <div className="contacto-social">
          <span> 
          <a 
            href="https://www.instagram.com/ziratechok?igsh=MTdnNTlhdnN5YXRqZw==" 
            target="_blank" 
            rel="instagram"
            className="text-danger mx-2" // Puedes usar otro color de Bootstrap
            style={{ fontSize: '2rem' }}
          >
            <FaInstagram />
          </a>
        </span> 
        <span> 
          <a 
            href="https://www.linkedin.com/company/zira-tech-argentina/" 
            target="_blank" 
            rel="linkedin"
            className="text-primary mx-2" // Clases de Bootstrap para color y margen
            style={{ fontSize: '2rem' }} // Estilo para hacer el icono más grande
          >
            {/* Usar el icono como un componente */}
            <FaLinkedin />
          </a>
          </span>
        </div>
      </div>
      <form className="contacto-form">
        <input type="text" placeholder="NOMBRE*" required />
        <input type="email" placeholder="E-MAIL*" required />
        <textarea placeholder="MENSAJE*" required></textarea>
        <button type="submit" className="btn-contactanos">CONTACTANOS</button>
      </form>
    </section>
  );
};

export default Contacto;
