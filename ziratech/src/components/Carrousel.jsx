
import './Carrousel.css';
export const Carrousel = () => {
  return (
    <div id="inicio" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#inicio" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#inicio" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#inicio" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>

      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src='https://res.cloudinary.com/dosdl7yqj/image/upload/w_800/q_auto/f_auto/v1761499472/42950_rnbpgp.webp' className="d-block w-100" alt="First slide" />
          <div className="carousel-caption ">
            <h1 translate='no'>BRANDING</h1>
            <p>Diseñamos marcas que conectan.</p>
            <button onClick={() => window.location.href = "#contacto"}>CONTACTANOS</button>
          </div>
        </div>

        <div className="carousel-item">
          <img src='https://res.cloudinary.com/dosdl7yqj/image/upload/w_800/q_auto/f_auto/v1761499485/marketing_nfzqc3_nhiu8v.webp' className="d-block w-100" alt="Second slide" />
          <div className="carousel-caption">
            <h1>MARKETING DIGITAL</h1>
            <p>Potenciamos tu marca con estrategias personalizadas.</p>
            <button onClick={() => window.location.href = "#contacto"}>CONTACTANOS</button>
          </div>
        </div>

        <div className="carousel-item">
          <img src='https://res.cloudinary.com/dosdl7yqj/image/upload/w_800/q_auto/f_auto/v1761499792/website-development-2025-02-10-07-46-32-utc_pyxffq.webp' className="d-block w-100" alt="Third slide" />
          <div className="carousel-caption ">
            <h1>DISEÑO WEB</h1>
            <p>Transformamos ideas en plataformas digitales.</p>
            <button onClick={() => window.location.href = "#contacto"}>CONTACTANOS</button>
          </div>
        </div>
      </div>

    
      <button className="carousel-control-prev" type="button" data-bs-target="#inicio" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Anterior</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#inicio" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Siguiente</span>
      </button>
    </div>
  );
};
