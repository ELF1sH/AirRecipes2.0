import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

import { ThemeProvider } from '@mui/material';

import App from './App';
import theme from './theme/theme';
import reportWebVitals from './reportWebVitals';
import { StoreProvider } from './components/rootMobxStore/StoreProvider';
import { AxiosErrorBoundary } from './components/errorHandlingComponents/AxiosErrorBoundary';

import './assets/fonts/Gilroy/stylesheet.scss';
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <StoreProvider>
    <ThemeProvider theme={theme}>
      <HashRouter>
        <AxiosErrorBoundary>
          <App />
        </AxiosErrorBoundary>
      </HashRouter>
    </ThemeProvider>
  </StoreProvider>,
);

reportWebVitals();
