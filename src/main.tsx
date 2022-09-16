import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './index.scss';
import { MoodContextProvider } from './contexts/MoodContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MoodContextProvider>
      <App />
    </MoodContextProvider>
  </React.StrictMode>
)
