import React from 'react';
import '../assets/styles/components/Project.css';

const Project = ({
  title,
  src,
  description,
  platform,
  category,
  developer,
  technologies,
  urlSite,
  urlCode,
}) => {
  return (
    <div className="b-project">
      <h3 className="b-project--title">{title}</h3>
      <div className="b-project--container-img">
        <img className="b-project--img" src={src} alt="screenshot" />
      </div>

      {/* <h4 className="b-project--sub-title">Descripción del proyecto</h4>
      <p className="b-project--description">{description}</p> */}
      
      {/* <h4 className="b-project--sub-title">Tecnologías utilizadas</h4> */}
      <p className='b-project--technologies'>{technologies.toString().replaceAll(',', ' / ')}</p>
      <div className="b-projects--buttons">
        <a
          className="b-projects--buttons__site b-projects--button"
          href={urlSite}
          target="_blank"
        >
          Ver sitio
        </a>
        <a
          className="b-projects--buttons__code b-projects--button"
          href={urlCode}
          target="_blank"
        >
          Ver código
        </a>
      </div>
    </div>
  );
};

export default Project;
