import React, { useState } from 'react';
import './MealPlannerApp.css';
import dishesData from './dishes.json';

function MealPlannerApp() {
  const [selectedDishes, setSelectedDishes] = useState([]);
  const [categoryCounts, setCategoryCounts] = useState({ Carne: 0, Pescado: 0, Pasta: 0 });

  const getRandomDish = (category) => {
    const categoryDishes = dishesData.filter((dish) => dish.category === category);
    const randomIndex = Math.floor(Math.random() * categoryDishes.length);
    return categoryDishes[randomIndex];
  };

  const handleButtonClick = () => {
    const newSelectedDishes = [];
    for (const category in categoryCounts) {
      for (let i = 0; i < categoryCounts[category]; i++) {
        const randomDish = getRandomDish(category);
        newSelectedDishes.push(randomDish);
      }
    }
    setSelectedDishes(newSelectedDishes);
  };

  return (
    <div className="MealPlannerApp">
      <h1>Planificador de Comidas</h1>
      <div>
        <label>Cantidad de Platos de Carne:</label>
        <input
          type="number"
          value={categoryCounts.Carne}
          onChange={(e) => setCategoryCounts({ ...categoryCounts, Carne: parseInt(e.target.value, 10) })}
        />
      </div>
      <div>
        <label>Cantidad de Platos de Pescado:</label>
        <input
          type="number"
          value={categoryCounts.Pescado}
          onChange={(e) => setCategoryCounts({ ...categoryCounts, Pescado: parseInt(e.target.value, 10) })}
        />
      </div>
      <div>
        <label>Cantidad de Platos de Pasta:</label>
        <input
          type="number"
          value={categoryCounts.Pasta}
          onChange={(e) => setCategoryCounts({ ...categoryCounts, Pasta: parseInt(e.target.value, 10) })}
        />
      </div>
      <button onClick={handleButtonClick}>Generar Plan de Comidas</button>
      <ul>
        {selectedDishes.map((dish, index) => (
          <li key={index}>
            <strong>{dish.name}</strong> - {dish.ingredient}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MealPlannerApp;
