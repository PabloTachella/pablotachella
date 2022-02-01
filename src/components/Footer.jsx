import React from 'react';

import initialState from '../initialState';
import Logo from './Logo';
import '../assets/styles/components/Footer.css';

const Footer = () => {
  const { footerElements } = { ...initialState };

  return (
    <footer className="b-footer--container">
      <p className="b-footer--text">
        ¿Quieres comunicarte conmigo? <br />
        ¿Estás interesad@ en iniciar un proyecto juntos? <br />
        Ponte en contacto
      </p>
      <div className="b-footer--logos">
        {footerElements.map((el) => (
          <Logo key={el.alt} {...el} />
        ))}
      </div>
      <span className="b-footer--created-by">Creado por Pablo Tachella</span>
    </footer>
  );
};

export default Footer;
