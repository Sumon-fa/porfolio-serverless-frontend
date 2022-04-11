import { createTheme, ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1e464a',
    },
    secondary: {
      main: '#1e464a',
    },
  },
  colors: {
    base1: '#0097a7',
    base2: '#fff',
  },
});
ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
