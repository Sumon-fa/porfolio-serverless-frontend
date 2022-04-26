import React from 'react';
import Header from '../../components/layout/Header';

import About from '../../components/layout/About';
import Resume from '../../components/layout/Resume';
import Portfolio from '../../components/layout/Portfolio';
import Contact from '../../components/layout/Contact';
import walpaper from '../../assets/walpaper.jpg';
import Skills from '../../components/layout/Skills';
const Home = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${walpaper})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <Header />
      <About />
      <Skills />
      <Resume />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default Home;
