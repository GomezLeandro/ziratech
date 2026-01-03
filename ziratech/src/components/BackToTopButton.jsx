import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Función para manejar el scroll
    const handleScroll = () => {
        // Muestra el botón si el usuario se ha desplazado más de 300px
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Función para hacer scroll al inicio de la página
    const scrollToTop = () => {
        // Esto hace el scroll de forma suave (smooth)
        window.scrollTo({
            top: 0,
            behavior: 'smooth' 
        });
    };

    //  Efecto para agregar y limpiar el listener del scroll
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // La función de limpieza se ejecuta al desmontar el componente
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // El array vacío asegura que el effect solo se ejecute al montar y desmontar

    return (
        <button
            className={`back-to-top ${isVisible ? 'visible' : ''}`}
            onClick={scrollToTop}
        >
            <FaArrowUp/>
        </button>
    );
};

export default BackToTopButton;