import React, { useState, useEffect } from 'react';
import Pokedex from './Pokedex';
import './App.css';


function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch Pokémon from the API limited to Kanto (1 to 151)
    const fetchPokemon = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
        const data = await response.json();
        setPokemonList(data.results);
      } catch (error) {
        console.error('Error fetching Pokémon:', error);
      }
      setLoading(false);
    };

    fetchPokemon();
  }, []);

  // Handle search functionality
  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  // Filter the Pokémon list based on the search term
  const filteredPokemonList = pokemonList.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="App">
      <h1>Pokédex</h1>
      <input
        type="text"
        placeholder="Search Pokémon"
        value={searchTerm}
        onChange={handleSearch}
      />
      {loading ? (
        <p>Loading Pokémon...</p>
      ) : (
        <Pokedex pokemonList={filteredPokemonList} />
      )}
    </div>
  );
}

export default App;
