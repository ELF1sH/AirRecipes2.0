import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    h1: {
      fontFamily: ['Gilroy', 'Roboto', 'sans-serif'].join(','),
      fontWeight: 800,
      fontSize: 64,
      lineHeight: '80px',
    },
    h2: {
      fontFamily: ['Gilroy', 'Roboto', 'sans-serif'].join(','),
      fontWeight: 800,
      fontSize: 40,
      lineHeight: '48px',
    },
    h3: {
      fontFamily: ['Gilroy', 'Roboto', 'sans-serif'].join(','),
      fontWeight: 800,
      fontSize: 24,
      lineHeight: '28px',
    },
    body1: {
      fontFamily: ['Roboto', 'sans-serif'].join(','),
      fontWeight: 400,
      fontSize: 16,
      lineHeight: '24px',
    },
    span: {
      fontFamily: ['Roboto', 'sans-serif'].join(','),
    },
  },
});

export default theme;
