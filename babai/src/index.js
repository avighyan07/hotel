import { ColorModeScript, ChakraProvider, theme } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ColorModeSwitcher from './ColorModeSwitcher';
import { StrictMode } from 'react';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript />
      <ColorModeSwitcher />
      <App />
    </ChakraProvider>
  </StrictMode>
);


