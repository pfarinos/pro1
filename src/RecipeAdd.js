import React, { useState } from 'react';

const RecipeAdd = ({ recipes, setRecipes }) => {
  const [newRecipe, setNewRecipe] = useState({
    name: '',
    ingredient: '',
    category: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewRecipe((prevRecipe) => ({
      ...prevRecipe,
      [name]: value,
    }));
  };

  const handleAddRecipe = () => {
    if (newRecipe.name && newRecipe.ingredient && newRecipe.category) {
      setRecipes([...recipes, newRecipe]);
      setNewRecipe({
        name: '',
        ingredient: '',
        category: '',
      });
    } else {
      alert('Please fill in all fields before adding a new recipe.');
    }
  };

  return (
    <div>
      <h2>Recipe Add App</h2>
      <form>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={newRecipe.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Ingredient:
          <input
            type="text"
            name="ingredient"
            value={newRecipe.ingredient}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Category:
          <input
            type="text"
            name="category"
            value={newRecipe.category}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="button" onClick={handleAddRecipe}>
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default RecipeAdd;
