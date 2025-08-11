import { createTheme } from '@mui/material/styles';

import '@fontsource/spicy-rice';           // h1 font
import '@fontsource/montserrat/500.css';   // Medium weight
import '@fontsource/montserrat/600.css';   // Semi-bold weight

const themes = createTheme({
  palette: {
    primary: {
      main: '#5A1954', // deep plum
    },
    secondary: {
      main: '#058FCB', // turquoise accent
    },
    background: {
      default: '#FAF3D6', // cream
    },
    text: {
      primary: '#5A1954',
      secondary: '#058FCB',
    },
  },
  typography: {
    fontFamily: '"Montserrat", sans-serif',
    h1: {
      fontFamily: '"Spicy Rice", cursive',
      fontWeight: 400,
      color: '#5A1954',
    },
    h2: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 600, // semi-bold
      color: '#5A1954',
    },
    body1: {
      fontWeight: 500, // medium
      color: '#5A1954',
    },
    body2: {
      fontWeight: 500, // medium
      color: '#5A1954',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '12px',
          fontWeight: 600,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          padding: '1rem',
          borderRadius: '16px',
        },
      },
    },
  },
});

export default themes;