// RandomNamesApp.js
import React, { useState } from 'react';
import namesData from './names.json';

const RandomNamesApp = () => {
  const [numToShow, setNumToShow] = useState(1);
  const [randomNames, setRandomNames] = useState([]);

  const handleNumToShowChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setNumToShow(value);
  };

  const generateRandomNames = () => {
    const shuffledNames = [...namesData.names].sort(() => 0.5 - Math.random());
    const selectedNames = shuffledNames.slice(0, numToShow);
    setRandomNames(selectedNames);
  };

  return (
    <div>
      <h1>Random Names Generator</h1>
      <label>
        Number of Names to Show:
        <input
          type="number"
          value={numToShow}
          onChange={handleNumToShowChange}
          min="1"
          max={namesData.names.length}
        />
      </label>
      <button onClick={generateRandomNames}>Generate Names</button>
      <ul>
        {randomNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RandomNamesApp;
