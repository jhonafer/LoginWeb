import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import { AppProviders } from './hooks';

import { Routes } from './routes';

import { GlobalStyle } from './styles/global';

import { defaultTheme } from './styles/themes/default';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>

      <AppProviders>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </AppProviders>

      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
