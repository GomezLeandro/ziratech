import React from 'react';
import './QuienesSomos.css';
import {ContadorEstadistica} from './CountUp.jsx'

function SeccionContadores() {
  return (
    <div className="container">      
      <div className="row justify-content-center" > 
        <ContadorEstadistica endValue={20} label="AÑOS DE EXPERIENCIA" prefix='+'/>
        <ContadorEstadistica endValue={100} label="PROYECTOS ENTREGADOS GLOBALMENTE" prefix='+'/>
        <ContadorEstadistica endValue={80} label="TASA DE RETORNO DE CLIENTES" suffix='%' />  
      </div>
    </div>
  );
}

const QuienesSomos = () => {
  return (
    <div id="quienes-somos" className="quienes-somos">
      <div className="quienes-somos-content">
        <div className="quienes-somos-title">
        <span>+</span>
        <h2> QUIÉNES SOMOS</h2>
        </div>
        <div className='quienes-somos-parrafos'>

        <p>
          Somos ZIRA TECH, una Agencia de Marketing Digital compuesta por un equipo de profesionales apasionados, con una amplia experiencia en las áreas de diseño,
          marketing y tecnología.
        </p>
        <p>
          Nos dedicamos a crear estrategias digitales innova-
          doras para que nuestros clientes logren destacarse
          en un mundo cada vez más competitivo y en constan-
          te evolución.
        </p>
        </div>
      </div>
      <div className="quienes-somos-image">
        <img src="/aboutUs.png" alt="Marketing" />
      </div>
      <div className="quienes-somos-stats">
      <SeccionContadores/>
      </div>
    </div>
  );
};

export default QuienesSomos;
