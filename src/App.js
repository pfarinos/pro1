import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    // Fetch the data when the component mounts
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Fetch the JSON data
      const response = await fetch('data.json');
      const jsonData = await response.json();

      // Update the state with the fetched data
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello en vivo, {data.name}!</h1>
      </header>
    </div>
  );
}

export default App;
