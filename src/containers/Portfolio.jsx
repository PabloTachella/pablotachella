import React from 'react';
import Project from '../components/Project';

import initialState from '../initialState';
import '../assets/styles/components/Portfolio.css';

const { projects } = { ...initialState };

const Portfolio = () => {
  return (
    <section id="portfolio" className="b-portfolio g-center">
      <h2 className="b-portfolio--title g-section--title__size">PORTFOLIO</h2>
      <div className="b-projects">
        {projects.map((el) => (
          <Project key={projects.indexOf(el)} {...el} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
