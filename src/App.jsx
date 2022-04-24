import React, { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './components/layout/About';
import Contact from './components/layout/Contact';
import Home from './pages/resume/Home';
function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home />} exact />
      </Routes>
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
      <Routes>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Fragment>
  );
}

export default App;
