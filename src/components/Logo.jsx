import React from 'react';
import '../assets/styles/components/Logo.css';

const Logo = ({ src, alt, link }) => {
  return (
    <div className="b-logo--container">
      <a href={link} target="_blank">
        <img src={src} alt={alt} className="b-logo--img" />
      </a>
    </div>
  );
};

export default Logo;
