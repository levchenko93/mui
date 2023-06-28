import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
   palette: {
      primary: {
         main: '#008080',
      },
   },
   secondary: {
      main: '#da61bf',
   },
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
   <ThemeProvider theme={theme}>
      <App />
   </ThemeProvider>
);
