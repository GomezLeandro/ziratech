import React, { useState, useEffect } from "react";
import "./Navbar.css";
import isologo from "/Isologo-ZT.ico";
import { FaLinkedin, FaInstagram, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
const [isOpen, setIsOpen] = useState(false);
const [activeSection, setActiveSection] = useState('inicio');

const sectionIds = ['inicio', 'quienes-somos', 'servicios', 'portfolio', 'contacto'];

useEffect(() => {
const observerOptions = {
root: null,
rootMargin: '0px',
threshold: 0.6,
};

const observer = new IntersectionObserver((entries) => {
const visibleSections = entries.filter(entry => entry.isIntersecting);

if (visibleSections.length > 0) {
// Ordenar por la posición más cercana al top 
visibleSections.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

const newActiveId = visibleSections[0].target.id;

if (newActiveId !== activeSection) {
setActiveSection(newActiveId);
}
}
}, observerOptions);

sectionIds.forEach(id => {
const section = document.getElementById(id);
if (section) {
observer.observe(section);
}
});

return () => {
observer.disconnect();
};
}, [sectionIds]);


const toggleMenu = () => {
setIsOpen(!isOpen);
};

const handleLinkClick = (e, targetId) => {

e.preventDefault();

setActiveSection(targetId);

// Scroll programático
const targetElement = document.getElementById(targetId);
if (targetElement) {
targetElement.scrollIntoView({ behavior: 'smooth' });
}

// Cierra menú móvil
if (isOpen) {
setIsOpen(false);
}

// Actualiza la URL sin recargar
window.history.pushState(null, '', `/${targetId}`);
};

return (
<div className={`navbar ${isOpen ? "menu-open" : ""}`}>
<div className="navbar-header ">
<div className="navbar-logo ">
<img className="logo " src={isologo} alt="Logo Ziratech" />
</div>

<button
className="menu-toggle"
onClick={toggleMenu}
aria-label="Toggle navigation"
>
{isOpen ? <FaTimes /> : <FaBars />}
</button>
</div>

{isOpen && <div className="menu-overlay" onClick={toggleMenu}></div>}

<div className={`navbar-menu`}>
<div className="navbar-header">
<div className="navbar-logo">
<img
className="logo logo-inside"
src={isologo}
alt="Logo Ziratech"
/>
</div>
</div>
<nav>
<ul>
<li>
<a
href="#inicio"
onClick={(e) => handleLinkClick(e, 'inicio')}
className={activeSection === 'inicio' ? 'active' : ''}
>
INICIO
</a>
</li>
<li>
<a
href="#quienes-somos"
onClick={(e) => handleLinkClick(e, 'quienes-somos')}
className={activeSection === 'quienes-somos' ? 'active' : ''}
>
QUIÉNES SOMOS
</a>
</li>
<li>
<a
href="#servicios"
onClick={(e) => handleLinkClick(e, 'servicios')}
className={activeSection === 'servicios' ? 'active' : ''}
>
SERVICIOS
</a>
</li>
<li>
<a
href="#portfolio"
onClick={(e) => handleLinkClick(e, 'portfolio')}
className={activeSection === 'portfolio' ? 'active' : ''}
>
PORTFOLIO
</a>
</li>
<li>
<a
href="#contacto"
onClick={(e) => handleLinkClick(e, 'contacto')}
className={activeSection === 'contacto' ? 'active' : ''}
>
CONTACTO
</a>
</li>
</ul>
</nav>
<div className="navbar-social">
<span>
<a
href="https://www.instagram.com/ziratechok?igsh=MTdnNTlhdnN5YXRqZw=="
target="_blank"
rel="noopener noreferrer"
className="text-danger mx-2"
style={{ fontSize: "2rem" }}
>
{<FaInstagram />}
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
{<FaLinkedin />}
</a>
</span>
</div>
</div>
</div>
);
};

export default Navbar;