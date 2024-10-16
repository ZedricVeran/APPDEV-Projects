import React, { useState, useEffect } from 'react';
import { Pokedex, PokemonModal } from './Pokedex'; // Combined components
import Header from './Header'; // Importing Header component
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

  const handleCardClick = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      const speciesResponse = await fetch(data.species.url);
      const speciesData = await speciesResponse.json();

      const pokemonWithSpecies = {
        ...data,
        speciesData,
      };

      setSelectedPokemon(pokemonWithSpecies);
    } catch (error) {
      console.error('Error fetching Pokémon details:', error);
    }
  };

  const handleCloseModal = () => {
    setSelectedPokemon(null);
  };

  return (
    <div>
      <Header searchTerm={searchTerm} onSearch={handleSearch} /> {/* Use Header component */}

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
