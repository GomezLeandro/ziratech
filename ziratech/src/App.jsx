import React from 'react';
import Navbar from './components/Navbar';
import { Carrousel } from './components/Carrousel';
import QuienesSomos from './components/QuienesSomos';
import Servicios from './components/Servicios';
import Portfolio from './components/Portfolio';
import Contacto from './components/Contacto'; // Importa el nuevo componente
import Footer from './components/Footer';   // Importa el nuevo componente
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <div className="sidebar">
        <Navbar />
      </div>
      <div className="main-content">
        <Carrousel />
        <QuienesSomos />
        <Servicios />
        <Portfolio />
        <Contacto /> {/* Añade el componente de Contacto */}
        <Footer />   {/* Añade el componente de Footer */}
      </div>
    </div>
  );
};

export default App;
