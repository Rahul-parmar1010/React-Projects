import React, { useState } from 'react';

const MovieApp = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movieData, setMovieData] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    fetch(`https://www.omdbapi.com/movies?search=${searchTerm}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.Response === 'True') {
          setMovieData(data.Search);
          setError(null);
        } else {
          setMovieData(null);
          setError(data.Error);
        }
      })
      .catch((error) => {
        setMovieData(null);
        setError('Error occurred while fetching data. Please try again later.');
      });
  };

  return (
    <div>
      <h1>Movie App</h1>
      <input type="text" value={searchTerm} onChange={handleInputChange} placeholder="Enter movie name" />
      <button onClick={handleSearch}>Search</button>
      {error && <p>{error}</p>}
      {movieData && (
        <ul>
          {movieData.map((movie) => (
            <li key={movie.imdbID}>
              <img src={movie.Poster} alt={movie.Title} />
              <h3>{movie.Title}</h3>
              <p>Year: {movie.Year}</p>
              <p>Type: {movie.Type}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieApp;

