// src/App.js

import React, { useState } from 'react';
import MealPlannerApp from './MealPlannerApp';
import RecipeAdd from './RecipeAdd';

const App = () => {
  const [showMealPlanner, setShowMealPlanner] = useState(false);
  const [showRecipeAdd, setShowRecipeAdd] = useState(false);

  const handleMealPlannerClick = () => {
    setShowMealPlanner(true);
    setShowRecipeAdd(false);
  };

  const handleRecipeAddClick = () => {
    setShowMealPlanner(false);
    setShowRecipeAdd(true);
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={handleMealPlannerClick}>Start Meal Planner App</button>
      <button onClick={handleRecipeAddClick}>Start Recipe Manager App</button>

      {showMealPlanner && <MealPlannerApp />}
      {showRecipeAdd && <RecipeAdd />}
    </div>
  );
};

export default App;
