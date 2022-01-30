import React from 'react';
import '../assets/styles/components/NavBar.css';

const NavBar = ({ closeNavBar }) => {
  return (
    <nav className="b-navbar--container">
      <a href="#" onClick={closeNavBar} className="b-navbar--item">
        Inicio
      </a>
      <a href="#about-me" onClick={closeNavBar} className="b-navbar--item">
        Sobre mí
      </a>
      <a href="#skills" onClick={closeNavBar} className="b-navbar--item">
        Skills
      </a>
      <a href="#portfolio" onClick={closeNavBar} className="b-navbar--item">
        Portfolio
      </a>
    </nav>
  );
};

export default NavBar;
