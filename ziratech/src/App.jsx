import React from 'react';
import Navbar from './components/Navbar';
import { Carrousel } from './components/carrousel';
import QuienesSomos from './components/QuienesSomos';
import Servicios from './components/Servicios';
import Portfolio from './components/Portfolio';
import Contacto from './components/Contacto'; 
import Footer from './components/Footer'; 
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
        <Contacto /> 
        <Footer />  
      </div>
    </div>
  );
};

export default App;
