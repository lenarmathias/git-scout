import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Normalize } from 'styled-normalize';
import { ThemeProvider } from "styled-components";
import { theme } from './theme';
import { HashRouter } from 'react-router-dom';
import { GlobalStyle } from './styled';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Normalize />
    <ThemeProvider theme={theme}>
      <HashRouter>
        <GlobalStyle />
        <App />
      </HashRouter>
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();