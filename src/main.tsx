import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import { ThemeModeProvider } from './theme/ThemeContext';
import './styles/global.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <ThemeModeProvider>
        <App />
      </ThemeModeProvider>
    </HelmetProvider>
  </React.StrictMode>
);
