import { createTheme } from '@mui/material/styles';
import colors from '../scssAbstracts/_variables.scss';

const theme = createTheme({
  typography: {
    h1: {
      fontFamily: ['Gilroy', 'Roboto', 'sans-serif'].join(','),
      fontWeight: 800,
      fontSize: 64,
      lineHeight: '80px',
      color: colors.headerFontColor,
    },
    h2: {
      fontFamily: ['Gilroy', 'Roboto', 'sans-serif'].join(','),
      fontWeight: 800,
      fontSize: 40,
      lineHeight: '48px',
      color: colors.headerFontColor,
    },
    h3: {
      fontFamily: ['Gilroy', 'Roboto', 'sans-serif'].join(','),
      fontWeight: 800,
      fontSize: 24,
      lineHeight: '28px',
      color: colors.headerFontColor,
    },
    body1: {
      fontFamily: ['Roboto', 'sans-serif'].join(','),
      fontWeight: 400,
      fontSize: 16,
      lineHeight: '24px',
      color: colors.bodyFontColor,
    },
    span: {
      fontFamily: ['Roboto', 'sans-serif'].join(','),
    },
  },
});

export default theme;
