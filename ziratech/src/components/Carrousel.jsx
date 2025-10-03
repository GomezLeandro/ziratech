import React from 'react';

export const Carrousel = () => {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://tse2.mm.bing.net/th/id/OIP.mlYOLgAj1t5YMqXYrmehBwHaEK?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3" className="d-block w-100" alt="First slide" />
          <div className="carousel-caption d-none d-md-block">
            <h1>BRANDING</h1>
            <p>Diseñamos marcas que conectan</p>
            <button className="btn btn-primary">CONTACTANOS</button>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://cdn.pixabay.com/photo/2022/02/11/06/07/animals-7006600_1280.jpg" className="d-block w-100" alt="Second slide" />
           <div className="carousel-caption d-none d-md-block">
            <h1>BRANDING</h1>
            <p>Diseñamos marcas que conectan</p>
            <button className="btn btn-primary">CONTACTANOS</button>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://4.bp.blogspot.com/-Ke_9CRrmvP0/UyMhr3d1jeI/AAAAAAAACgk/7TiS6bjw7hE/s1600/Cachorros.jpg" className="d-block w-100" alt="Third slide" />
           <div className="carousel-caption d-none d-md-block">
            <h1>BRANDING</h1>
            <p>Diseñamos marcas que conectan</p>
            <button className="btn btn-primary">CONTACTANOS</button>
          </div>
        </div>
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
  );
};
