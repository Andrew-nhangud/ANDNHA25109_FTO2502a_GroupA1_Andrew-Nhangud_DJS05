// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/styles.css';
import { PodcastProvider } from './PodcastContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PodcastProvider>
      <App />
    </PodcastProvider>
  </React.StrictMode>
);
