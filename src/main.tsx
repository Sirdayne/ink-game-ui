import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './assets/styles/_normalize.css'
import './assets/styles/_var.scss'
import { subscribeMessages } from './uitls/events.ts';

subscribeMessages();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
