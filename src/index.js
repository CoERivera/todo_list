import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MantineProvider } from '@mantine/core';
import '@fontsource/lora';
import '@fontsource/ubuntu-condensed';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: 'dark',
        primaryColor: 'grape',
        primaryShade: 6,
        cursorType: 'pointer',
        fontFamily: 'Ubuntu Condensed, sans-serif',
        headings: {
          fontFamily: 'Lora, sans-serif'
        },
        fontSizes: {
          xs: 16,
          sm: 18,
          md: 20,
          lg: 22,
          xl: 24
        }
      }}>
      <App />
    </MantineProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
