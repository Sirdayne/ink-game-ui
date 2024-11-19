import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './assets/styles/_normalize.css'
import './assets/styles/_var.scss'
import { subscribeMessages } from './uitls/events.ts';
import { Provider } from 'react-redux';
import store from './store';

subscribeMessages();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
