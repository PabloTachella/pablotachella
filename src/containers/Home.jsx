import React from 'react';
import Header from '../components/Header';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import Presentation from './Presentation';
import Skills from './Skills';
import '../assets/styles/Generics.css';
import '../assets/styles/components/Home.css';

const Home = () => {
  return (
    <>
      <Header />
      <Presentation />
      <AboutMe />
      <Skills />
      <Portfolio />
    </>
  );
};

export default Home;
