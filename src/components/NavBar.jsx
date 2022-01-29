import React from 'react';
import '../assets/styles/components/NavBar.css';

const NavBar = () => {
  return (
    <nav className="b-navbar--container">
      <a href="#" className="b-navbar--item">
        Inicio
      </a>
      <a href="#about-me" className="b-navbar--item">
        Sobre mí
      </a>
      <a href="#skills" className="b-navbar--item">
        Skills
      </a>
      <a href="#portfolio" className="b-navbar--item">
        Portfolio
      </a>
    </nav>
  );
};

export default NavBar;
