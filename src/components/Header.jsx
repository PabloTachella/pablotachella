import React from 'react';
import '../assets/styles/components/Header.css';

const Header = () => {
  return (
    <section className="b-header">
      <div className="b-header__color">
        <a href="#" className="b-navbar--item">
          PABLO TACHELLA
        </a>
        <div className="b-navbar">
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
        </div>
      </div>
    </section>
  );
};

export default Header;
