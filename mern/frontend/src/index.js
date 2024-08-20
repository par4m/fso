import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { WorktoutContextProvider } from './context/WorkoutContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WorktoutContextProvider>
      <App />
    </WorktoutContextProvider>
  </React.StrictMode>
)
