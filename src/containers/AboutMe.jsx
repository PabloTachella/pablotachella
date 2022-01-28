import React from 'react';
import '../assets/styles/components/AboutMe.css';

const AboutMe = () => {
  return (
    <section id='about-me' className="b-about-me g-center">
      <h2 className='g-section--title__size'>SOBRE MÍ</h2>
      <p className='b-about-me--text'>
        Llevo 3 años estudiando tecnologías web, principalmente orientadas al frontend.
        Autodidacta entusiasta, siempre abierto al trabajo en equipo. Encuentro satisfacción
        en poder incorporar nuevos conocimientos y en vivir
        experiencias que me signifiquen un desafío intelectual. En el desarrollo de cada proyecto
        busco implementar las mejores prácticas, teniendo como prioridad la eficiencia y escalabilidad.
        En mis tiempos de ocio disfruto jugar ajedrez y consumir contenido sobre física o tecnología.
      </p>
    </section>
  );
};

export default AboutMe;
