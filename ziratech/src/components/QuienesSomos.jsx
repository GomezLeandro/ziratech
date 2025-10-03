import React from 'react';
import './QuienesSomos.css';

const QuienesSomos = () => {
  return (
    <div className="quienes-somos">
      <div className="quienes-somos-content">
        <h2>+ QUIÉNES SOMOS</h2>
        <p>
          Somos ZIRA TECH, una Agencia de Marketing Digital compuesta por un equipo de profesionales apasio-
          nados, con una amplia experiencia en las áreas de diseño,
          marketing y tecnología.
        </p>
        <p>
          Nos dedicamos a crear estrategias digitales innova-
          doras para que nuestros clientes logren destacarse
          en un mundo cada vez más competitivo y en constan-
          te evolución.
        </p>
      </div>
      <div className="quienes-somos-image">
        <img src="https://i.imgur.com/8i2h4oV.png" alt="Marketing" />
      </div>
      <div className="quienes-somos-stats">
        <div>
          <h3>+20</h3>
          <p>AÑOS DE EXPERIENCIA</p>
        </div>
        <div>
          <h3>+100</h3>
          <p>CLIENTES SATISFECHOS</p>
        </div>
        <div>
          <h3>+50</h3>
          <p>CLIENTES SATISFECHOS</p>
        </div>
      </div>
    </div>
  );
};

export default QuienesSomos;
