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

  const renderTable = () => {
    const daysOfWeek = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

    return (
      <table>
        <thead>
          <tr>
            <th> </th>
            {daysOfWeek.map((day, index) => (
              <th key={index}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {selectedDishes.map((dish, index) => (
            <tr key={index}>
              <td>{dish.name}</td>
              {daysOfWeek.map((_, dayIndex) => (
                <td key={dayIndex}>
                  {index === dayIndex ? <strong>{dish.ingredient}</strong> : null}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
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
      {selectedDishes.length > 0 ? renderTable() : null}
    </div>
  );
}

export default MealPlannerApp;
