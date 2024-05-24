import React, { useState, useEffect } from 'react';
import './MealPlannerApp.css';
import dishesData from './dishes.json';
import categoriesData from './categories.json';

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
  const [categoryCounts, setCategoryCounts] = useState({});

  useEffect(() => {
    const initialCategoryCounts = {};
    categoriesData.categories.forEach((category) => {
      initialCategoryCounts[category] = 0;
    });
    setCategoryCounts(initialCategoryCounts);
  }, []);

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
      {categoriesData.categories.map((category) => (
        <DishInput
          key={category}
          label={`Cantidad de Platos de ${category}:`}
          value={categoryCounts[category] || 0}  // Set initial value to 0
          onChange={(value) => handleInputChange(category, value)}
        />
      ))}
      <button onClick={handleButtonClick}>Generar Plan de Comidas</button>
      {selectedDishes.length > 0 ? renderSelectedDishes() : null}
    </div>
  );
}

export default MealPlannerApp;