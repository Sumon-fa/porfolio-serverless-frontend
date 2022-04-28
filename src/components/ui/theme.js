import { createTheme } from '@mui/material/styles';

const dark = '#111';
const white = '#fff';
const blue = 'rgba(0, 0, 255,0.5)';

export default createTheme({
  palette: {
    common: {
      dark: `${dark}`,
      white: `${white}`,
      blue: `${blue}`,
    },
    primary: {
      main: `${white}`,
    },
    secondary: {
      main: `${dark}`,
    },
  },

  typography: {
    h2: { fontFamily: 'auto', fontWeight: '400', color: `${dark}` },
  },
});
