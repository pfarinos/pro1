import React, { useState } from 'react';
import './MealPlannerApp.css';
import dishesData from './dishes.json';

function DishInput({ label, value, onChange }) {
  return (
    <div>
      <label>{label}</label>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value, 10))}
      />
    </div>
  );
}

function MealPlannerApp() {
  const [selectedDishes, setSelectedDishes] = useState([]);
  const [categoryCounts, setCategoryCounts] = useState({ Carne: 0, Pescado: 0, Pasta: 0 });

  const getRandomDish = (category) => {
    const categoryDishes = dishesData.filter((dish) => dish.category === category);
    const randomIndex = Math.floor(Math.random() * categoryDishes.length);
    return categoryDishes[randomIndex];
  };

  const handleInputChange = (category, value) => {
    if (value >= 0) {
      setCategoryCounts({ ...categoryCounts, [category]: value });
    }
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

  const renderSelectedDishes = () => {
    return (
      <div>
        <h2>Platos Seleccionados</h2>
        <ul>
          {selectedDishes.map((dish, index) => (
            <li key={index}>
              <strong>{dish.name}</strong>
            </li>
          ))}
        </ul>
        <h2>Lista de la compra</h2>
        <ul>
          {selectedDishes.map((dish, index) => (
            <li key={index}>{dish.ingredient}</li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="MealPlannerApp">
      <h1>Planificador de Comidas</h1>
      <DishInput
        label="Cantidad de Platos de Carne:"
        value={categoryCounts.Carne}
        onChange={(value) => handleInputChange('Carne', value)}
      />
      <DishInput
        label="Cantidad de Platos de Pescado:"
        value={categoryCounts.Pescado}
        onChange={(value) => handleInputChange('Pescado', value)}
      />
      <DishInput
        label="Cantidad de Platos de Pasta:"
        value={categoryCounts.Pasta}
        onChange={(value) => handleInputChange('Pasta', value)}
      />
      <button onClick={handleButtonClick}>Generar Plan de Comidas</button>
      {selectedDishes.length > 0 ? renderSelectedDishes() : null}
    </div>
  );
}

export default MealPlannerApp;
