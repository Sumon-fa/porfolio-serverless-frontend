import { Container } from '@mui/material';
import React, { Fragment } from 'react';
import Header from '../../components/layout/Header';
import Home from '../../components/layout/Home';
import About from '../../components/layout/About';
import Resume from '../../components/layout/Resume';
import Portfolio from '../../components/layout/Portfolio';
const Main = () => {
  return (
    <Fragment>
      <Header />
      <Home />
      <About />
      <Resume />
      <Portfolio />
    </Fragment>
  );
};

export default Main;
