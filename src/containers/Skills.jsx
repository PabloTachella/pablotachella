import React from 'react';
import Skill from '../components/Skill'

import initialState from '../initialState';
import '../assets/styles/components/Skills.css'

const { softwareDevelopmentElements, softwareToolsElements } = { ...initialState }
const Skills = () => {
  return (
    <section id='skills' className="b-skills g-center">
      <h2 className='g-section--title__size'>SKILLS</h2>
      <div className="b-skills--container">
        <h3 className="b-software-develoment--title">Desarrollo de Software</h3>
        <ul className="b-software-develoment--elements">
          {softwareDevelopmentElements.map(el =>
            <Skill key={el.alt} {...el} />
          )}
        </ul>
        <h3 className="b-software-tools--title">Herramientas</h3>
        <ul className="b-software-tools--elements">
          {softwareToolsElements.map(el =>
            <Skill key={el.alt} {...el} />
          )}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
