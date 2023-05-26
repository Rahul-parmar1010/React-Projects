import './App.css';
import React, { useState } from 'react';
import axios from 'axios';
import MealCard from './MealCard';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [meals, setMeals] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
      );
      setMeals(response.data.meals || []);
    } catch (error) {
      console.error('Error fetching meal data:', error);
    }
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">The Meal DB</h1>
      <div className="form-group mt-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search meal by name"
          value={searchTerm}
          onChange={handleChange}
        />
        <button className="btn btn-primary mt-2" onClick={handleSearch}>
          Search
        </button>
      </div>
      <div className="row mt-5">
        {meals.length === 0 ? (
          <p className="text-center">No meals found. Please try another search term.</p>
        ) : (
          meals.map((meal) => <MealCard key={meal.idMeal} meal={meal} />)
        )}
      </div>
    </div>
  );
};

export default App;
