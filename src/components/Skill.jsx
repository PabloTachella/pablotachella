import React from 'react';

const Skill = ({ src, alt, text }) => {
  return (
    <li>
      <img src={src} alt={alt} />
      {text}
    </li>
  );
};

export default Skill;
