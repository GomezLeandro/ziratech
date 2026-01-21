import Navbar from "./components/Navbar";
import BackToTop from "./components/BackToTopButton";
import { Carrousel } from "./components/Carrousel";
import QuienesSomos from "./components/QuienesSomos";
import Servicios from "./components/Servicios";
import Portfolio from "./components/Portfolio";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <Carrousel />
      <QuienesSomos />
      <Servicios />
      <Portfolio />
      <Contacto />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default App;
