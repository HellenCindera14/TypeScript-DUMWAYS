import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

import { ChakraProvider } from '@chakra-ui/react';

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </React.StrictMode>
  );
} else {
  console.error("Elemen root tidak ditemukan dalam DOM.");
}