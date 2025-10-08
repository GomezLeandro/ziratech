import React from 'react';
import './Servicios.css';

const services = [
  {
    icon: '💡',
    title: 'BRANDING',
    description: 'Creamos tu identidad corporativa para que logres distinguirte de los demás de manera exitosa.'
  },
  {
    icon: '📖',
    title: 'DISEÑO GRÁFICO',
    description: 'Diseñamos la papelería, folletería y presentaciones de tu empresa para dar a conocer tus productos y servicios.'
  },
  {
    icon: '💻',
    title: 'DISEÑO WEB',
    description: 'Desarrollamos proyectos a medida y te brindamos soporte técnico.'
  },
  {
    icon: '📢',
    title: 'MARKETING DIGITAL',
    description: 'Planificamos un plan a tu medida para que impulses tus proyectos de manera exitosa.'
  },
  {
    icon: '🛒',
    title: 'E-COMMERCE',
    description: 'Llevamos adelante todas las acciones necesarias para optimizar tu imagen y aumentar tus ventas.'
  },
  {
    icon: '👍',
    title: 'COMMUNITY MANAGER',
    description: 'Posicionamos tu marca planificando contenido de valor para que se destaque en tus Redes Sociales.'
  }
];

const Servicios = () => {
  return (
    <div id="servicios" className="servicios">
      <h2>+ NUESTROS SERVICIOS</h2>
      <div className="servicios-grid">
        {services.map((service, index) => (
          <div className="servicio-item" key={index}>
            <div className="servicio-icon">{service.icon}</div>
            <div className="servicio-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Servicios;
