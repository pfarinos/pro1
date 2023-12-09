// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MealPlannerApp from './MealPlannerApp';  // Asegúrate de importar el componente correcto
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MealPlannerApp />
  </React.StrictMode>
);

reportWebVitals();
