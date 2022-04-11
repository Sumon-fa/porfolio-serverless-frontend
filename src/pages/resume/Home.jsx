import React, { Fragment } from 'react';
import Header from '../../components/layout/Header';

import About from '../../components/layout/About';
import Resume from '../../components/layout/Resume';
import Portfolio from '../../components/layout/Portfolio';
const Home = () => {
  return (
    <Fragment>
      <Header />

      <About />
      <Resume />
      <Portfolio />
    </Fragment>
  );
};

export default Home;
