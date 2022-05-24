import React from 'react';
import '../assets/styles/components/Presentation.css';

const Presentation = () => {
  return (
    <main className="b-presentation--container">
      <div className="b-presentation--profile-container">
        <div className="b-presentation--profile-img"></div>
        <h1 className="b-presentation--title">
          Soy Pablo Tachella <br /> Frontend Developer
        </h1>
      </div>
      <div className="b-presentation">
        <p className="b-presentation--text">
          Me especializo en la maquetación y estilización
          <br />
          de todo tipo de interfaz, componente o funcionalidad
        </p>
        <p className="b-presentation--text-secun">
          Cuento con una extensa formación en React Js y todo su ecosistema (redux, react-router, webpack,
          node, axios, JavaScript vanilla, etc.)
          Aspiro a convertirme en un experto en el desarrollo frontend.
        </p>
      </div>
    </main>
  );
};

export default Presentation;