import React from 'react';
//import ReactDOM from 'react-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import themes from '../theme/themes'
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
const root = createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={themes}>
    <CssBaseline />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>
);