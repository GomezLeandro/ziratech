import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '/src/components/Carrousel.css'
import '/src/components/QuienesSomos.css'
import '/src/components/Servicios.css'
import '/src/components/Portfolio.css'
import '/src/components/Contacto.css'
import '/src/components/Navbar.css'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
