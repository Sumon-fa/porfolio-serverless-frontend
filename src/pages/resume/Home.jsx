import React, { Fragment } from 'react';
import Header from '../../components/layout/Header';

import About from '../../components/layout/About';
import Resume from '../../components/layout/Resume';
import Portfolio from '../../components/layout/Portfolio';
import Contact from '../../components/layout/Contact';
const Home = () => {
  return (
    <div style={{ backgroundColor: '#f5f5f5' }}>
      <Header />
      <About />
      <Resume />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default Home;
