import React from 'react';


export const Carrousel = () => {
  return (
    <div id="inicio" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src='/branding.jpg' className="d-block w-100" alt="First slide" />
          <div className="carousel-caption d-none d-md-block" >
            <h1>BRANDING</h1>
            <p>Diseñamos marcas que conectan</p>
          </div>
            <button className="btn btn-primary cta-boton"  onClick={()=>href=window.location.href = "#contacto"} >CONTACTANOS</button>
        </div>
        <div className="carousel-item">
          <img src='/marketing2.jpg' className="d-block w-100" alt="Second slide" />
           <div className="carousel-caption d-none d-md-block ">
            <h1>MARKETING DIGITAL</h1>
            <p>Potenciamos tu marca con estrategias personalizadas</p>
          </div>
            <button className="btn btn-primary cta-boton"  onClick={()=>href=window.location.href = "#contacto"}>CONTACTANOS</button>
        </div>
        <div className="carousel-item">
          <img src='/desarrollo-web1.jpg' className="d-block w-100" alt="Third slide" />
           <div className="carousel-caption d-none d-md-block">
            <h1>DISEÑO WEB</h1>
            <p>Transformamos ideas en plataformas digitales</p>
            </div>
            <button className="btn btn-primary cta-boton" onClick={()=>href=window.location.href = "#contacto"}>CONTACTANOS </button>   
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    </div>
  );
};
