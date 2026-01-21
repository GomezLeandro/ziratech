import React, { useState, useEffect } from "react";
import { FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import "./Contacto.css";

const ToastFeedback = ({ message, type }) => {
  if (!message) return null;

  const toastClass = `toast-feedback ${type}`;

  return <div className={toastClass}>{message}</div>;
};

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });
  const [feedback, setFeedback] = useState({ message: "", type: "" });
  const [isLoading, setIsLoading] = useState(false);

  const clearFeedback = () => {
    setFeedback({ message: "", type: "" });
  };

  useEffect(() => {
    if (feedback.message) {
      const timer = setTimeout(() => {
        clearFeedback();
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [feedback]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setFeedback({ message: "", type: "" });

    const PHP_URL = "/send_email.php";

    const successMessage =
      "¡Mensaje enviado!, en breve alguien del equipo se pondrá en contacto. 📧";
    const errorMessage =
      "¡Ups! Algo salió mal... vuelva a intentarlo en unos minutos. 😕";

    try {
      const response = await fetch(PHP_URL, {
        method: "POST",
        body: new URLSearchParams(formData).toString(),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.success) {
        setFeedback({ message: successMessage, type: "success" });
        setFormData({ nombre: "", email: "", mensaje: "" });
      } else {
        setFeedback({ message: errorMessage, type: "error" });
      }
    } catch (error) {
      console.error("Fetch error:", error);

      setFeedback({ message: errorMessage, type: "error" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contacto" className="contacto-section">
      <div className="contacto-header">
        <h2> + CONTACTO</h2>
      </div>
      <div className="contacto-info">
        <p>
          {" "}
          <FaLocationDot /> Buenos Aires, Argentina
        </p>
        <p>
          {" "}
          <FaEnvelope /> contacto@ziratech.com.ar
        </p>
        <div className="contacto-social">
          <span>
            <a
              href="https://www.instagram.com/ziratechok?igsh=MTdnNTlhdnN5YXRqZw=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-danger mx-2"
              style={{ fontSize: "2rem" }}
            >
              <FaInstagram />
            </a>
          </span>
          <span>
            <a
              href="https://www.linkedin.com/company/zira-tech-argentina/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary mx-2"
              style={{ fontSize: "2rem" }}
            >
              <FaLinkedin />
            </a>
          </span>
        </div>
      </div>

      <form className="contacto-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          placeholder="NOMBRE*"
          value={formData.nombre}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="E-MAIL*"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="mensaje"
          placeholder="MENSAJE*"
          value={formData.mensaje}
          onChange={handleChange}
          required
        ></textarea>

        <ToastFeedback message={feedback.message} type={feedback.type} />

        <button type="submit" className="btn-contactanos" disabled={isLoading}>
          {isLoading ? "ENVIANDO..." : "CONTACTANOS"}
        </button>
      </form>
    </section>
  );
};

export default Contacto;
