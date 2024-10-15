import React, { useState, useEffect } from 'react';
import Pokedex from './Pokedex';
import PokemonModal from './PokemonModal';
import Header from './Header'; // Import Header component
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
      // Fetch Pokémon details
      const response = await fetch(url);
      const data = await response.json();

      // Fetch species data
      const speciesResponse = await fetch(data.species.url);
      const speciesData = await speciesResponse.json();

      // Combine both Pokémon details and species data
      const pokemonWithSpecies = {
        ...data,
        speciesData,
      };

      setSelectedPokemon(pokemonWithSpecies);
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
      {/* Use Header component */}
      <Header searchTerm={searchTerm} onSearch={handleSearch} />

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
