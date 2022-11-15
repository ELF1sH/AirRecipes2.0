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
  },
  components: {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
          zIndex: '2000 !important',
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          color: colors.shade50,
        },
        valueLabel: {
          width: '30px',
          height: '30px',
          borderRadius: '50%',
          position: 'relative',
          backgroundColor: colors.shade50,
          '&::before': {
            display: 'none',
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            top: '-81%',
            left: '50%',
            border: '12.6px solid transparent',
            borderBottom: `18.6px solid ${colors.shade50}`,
            transform: 'translate(-50%, 48px) rotate(180deg)',
          },
        },
        thumb: {
          userSelect: 'none',
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
        },
      },
    },
  },
});

export default theme;
