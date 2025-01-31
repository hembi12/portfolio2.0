import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import '../config/i18n';
import App from './App.tsx';

const rootElement = document.getElementById('root');
if (!rootElement) {
    throw new Error("No se encontró el elemento con id 'root'. Verifica tu index.html.");
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
