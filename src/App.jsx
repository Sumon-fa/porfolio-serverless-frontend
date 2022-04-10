import React, { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/resume/Main';
function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </Fragment>
  );
}

export default App;
