import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/store';
const theme = createTheme({
  palette: {
    primary: {
      main: '#1A1110',
    },
    secondary: {
      main: 'rgba(0, 0, 255,0.5)',
    },
  },

  typography: {
    tab: {
      fontFamily: 'Raleway',
      textTransform: 'none',
      color: '#fff',
      fontWeight: 700,
      fontSize: '1rem',
    },
  },
});
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
