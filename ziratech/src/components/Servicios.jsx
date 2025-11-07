import React from 'react';
import './Servicios.css';


const services = [
  {
    icon: 'https://res.cloudinary.com/dosdl7yqj/image/upload/v1762457142/Branding_b2hrws.png',
    title: 'BRANDING',
    description: 'Creamos tu identidad corporativa para que logres distinguirte de los demás de manera exitosa.'
  },
  {
    icon: 'https://res.cloudinary.com/dosdl7yqj/image/upload/v1762457142/Marketing_srpbxs.png',
    title: 'MARKETING DIGITAL',
    description: 'Planificamos un plan a tu medida para que impulses tus proyectos de manera exitosa.'
  },
  {
    icon: 'https://res.cloudinary.com/dosdl7yqj/image/upload/v1762457142/Disen_%C3%A2o_Grafico_cxkht7.png',
    title: 'DISEÑO GRÁFICO',
    description: 'Diseñamos la papelería, folletería y presentaciones de tu empresa para dar a conocer tus productos y servicios.'
  },
  {
    icon: 'https://res.cloudinary.com/dosdl7yqj/image/upload/v1762457142/CM_mj5npw.png',
    title: 'COMMUNITY MANAGER',
    description: 'Posicionamos tu marca planificando contenido de valor para que se destaque en tus Redes Sociales.'
  },
  {
    icon: 'https://res.cloudinary.com/dosdl7yqj/image/upload/v1762457142/Disen_%C3%A2o_Web_vwepr8.png',
    title: 'DISEÑO WEB',
    description: 'Desarrollamos proyectos a medida y te brindamos soporte técnico.'
  },
  {
    icon: 'https://res.cloudinary.com/dosdl7yqj/image/upload/v1762457142/E-Commerce_sibnmk.png',
    title: 'E-COMMERCE',
    description: 'Llevamos adelante todas las acciones necesarias para optimizar tu imagen y aumentar tus ventas.'
  }
];

const Servicios = () => {
  return (
    <div id="servicios" className="servicios">
      <h2>+ NUESTROS SERVICIOS</h2>
      <div className="servicios-grid">
        {services.map((service, index) => (
          <div className="servicio-item" key={index}>
            <div className="servicio-icon"><img src={service.icon} alt={service.title} className="service-image" /></div>
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
