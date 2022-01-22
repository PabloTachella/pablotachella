import React from 'react';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import Presentation from './Presentation';
import Skills from './Skills';
import '../assets/styles/Generics.css';

const Home = () => {
  return (
    <>
      <Presentation />
      <AboutMe />
      <Skills />
      <Portfolio />
    </>
  );
};

export default Home;
