import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './PokemonCard.css';

function PokemonCard({ name, url, onClick }) {
  const [pokemonDetails, setPokemonDetails] = useState(null);

  // Type colors defined here
  const typeColors = {
    bug: '#A8B820',
    dark: '#705848',
    dragon: '#7038F8',
    electric: '#F8D030',
    fairy: '#EE99AC',
    fighting: '#C03028',
    fire: '#F08030',
    flying: '#A890F0',
    ghost: '#705898',
    grass: '#78C850',
    ground: '#E0C068',
    ice: '#98D8D8',
    normal: '#A8A878',
    poison: '#A040B0',
    psychic: '#F85888',
    rock: '#B8A038',
    steel: '#B8B8D0',
    water: '#6890F0',
  };

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setPokemonDetails(data);
      } catch (error) {
        console.error('Error fetching Pokémon details:', error);
      }
    };

    fetchPokemonDetails();
  }, [url]);

  // Extract Pokémon ID from URL and format it
  const getPokemonId = (url) => {
    const id = url.split('/').slice(-2, -1); // Extracts the ID from the URL
    return `#${String(id).padStart(3, '0')}`; // Format ID with leading zeros
  };

  return (
    <div className="pokemon-card" onClick={() => onClick(url)}>
      {pokemonDetails ? (
        <>
          <img
            src={pokemonDetails.sprites.front_default}
            alt={pokemonDetails.name}
          />
          <h4>{getPokemonId(url)}</h4> {/* Display formatted Pokémon ID */}
          <h3>{pokemonDetails.name}</h3>
          <p>
            {pokemonDetails.types.map(type => (
              <span 
                key={type.type.name} 
                className="type" 
                style={{ backgroundColor: typeColors[type.type.name] || '#ccc' }} // Dynamic background color
              >
                {type.type.name}
              </span>
            )).reduce((prev, curr) => [prev, ' ', curr])}
          </p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

PokemonCard.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default PokemonCard;
