import React from 'react';
import './Contacto.css';

const Contacto = () => {
  return (
    <section id="contacto" className="contacto-section">
      <div className="contacto-header">
        <span className="contacto-icon">+</span>
        <h2>CONTACTO</h2>
      </div>
      <div className="contacto-info">
        <p><i className="fas fa-map-marker-alt"></i> Buenos Aires, Argentina</p>
        <p><i className="fas fa-envelope"></i> contacto@ziratec.com.ar</p>
        <div className="contacto-social">
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
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
