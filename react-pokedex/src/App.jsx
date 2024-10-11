import React, { useState, useEffect } from 'react';
import Pokedex from './Pokedex';
import PokemonModal from './PokemonModal';
import './App.css';

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
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

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredPokemonList = pokemonList.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm)
  );

  // Handle clicking a Pokémon card
  const handleCardClick = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setSelectedPokemon(data);
    } catch (error) {
      console.error('Error fetching Pokémon details:', error);
    }
  };

  // Handle closing the modal
  const handleCloseModal = () => {
    setSelectedPokemon(null);
  };

  return (
    <div>
      {/* Fixed Header */}
      <div className="fixed-header">
        <h1>Pokédex</h1>
        <input
          className="search-bar"
          type="text"
          placeholder="Search Pokémon"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      {/* Pokémon List */}
      <div className="pokedex-container">
        {loading ? (
          <p>Loading Pokémon...</p>
        ) : (
          <Pokedex pokemonList={filteredPokemonList} onCardClick={handleCardClick} />
        )}
        {selectedPokemon && (
          <PokemonModal pokemon={selectedPokemon} onClose={handleCloseModal} />
        )}
      </div>
    </div>
  );
}

export default App;
