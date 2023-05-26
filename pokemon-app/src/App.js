import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const PokemonSearch = () => {
  const [pokemonData, setPokemonData] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`)
      .then(response => response.json())
      .then(data => setPokemonData(data))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h1 className="heading my-3 mx-3 ">Pokémon Search</h1>

/ <input className="input me-1 mx-2 px-2 " type="text" placeholder="Enter Pokémon ID or Name" value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value) }
      />
    
        <button type="submit" classNane="btn btn-outline-success"onClick={handleSearch} >Search</button>
      {pokemonData ? (
      
        <div className="pokemondata text-white mx-3 my-3 px-2">
          <h2>{pokemonData.name}</h2>
          <img className="image width: 100px; height: 200px;" src={pokemonData.sprites.front_default} alt={pokemonData.name} />
          <p>Height: {pokemonData.height} dm</p>
          <p>Weight: {pokemonData.weight} hg</p>
          <p>Abilities: {pokemonData.abilities.map(ability => ability.ability.name).join(', ')}</p>
        </div>
      ) : (
        <p className="response my-3 mx-3">No Pokémon data found.</p>
      )}
    </div>
  );
};

export default PokemonSearch;

