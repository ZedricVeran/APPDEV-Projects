import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './App.css'; // Using the same CSS file

// Type color map for Pokémon types
const typeColors = {
  normal: '#A8A77A',
  fire: '#EE8130',
  water: '#6390F0',
  electric: '#F7D02C',
  grass: '#7AC74C',
  ice: '#96D9D6',
  fighting: '#C22E28',
  poison: '#A33EA1',
  ground: '#E2BF65',
  flying: '#A98FF3',
  psychic: '#F95587',
  bug: '#A6B91A',
  rock: '#B6A136',
  ghost: '#735797',
  dragon: '#6F35FC',
  dark: '#705746',
  steel: '#B7B7CE',
  fairy: '#D685AD',
};

function Pokedex({ pokemonList, onCardClick }) {
  return (
    <div className="pokedex">
      {pokemonList.map((pokemon, index) => (
        <PokemonCard
          key={index}
          name={pokemon.name}
          url={pokemon.url}
          onClick={onCardClick}
        />
      ))}
    </div>
  );
}

Pokedex.propTypes = {
  pokemonList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
  onCardClick: PropTypes.func.isRequired,
};

function PokemonCard({ name, url, onClick }) {
  const [pokemonDetails, setPokemonDetails] = useState(null);

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

  const getPokemonId = (url) => {
    const id = url.split('/').slice(-2, -1);
    return `#${String(id).padStart(3, '0')}`;
  };

  return (
    <div 
      className="pokemon-card" 
      onClick={() => onClick(url)} 
      style={{ 
        borderColor: pokemonDetails && typeColors[pokemonDetails.types[0].type.name] 
      }}
    >
      {pokemonDetails ? (
        <>
          <img
            src={pokemonDetails.sprites.front_default}
            alt={pokemonDetails.name}
          />
          <h4>{getPokemonId(url)}</h4>
          <h3>{pokemonDetails.name}</h3>
          <p>
            Types: {pokemonDetails.types.map(type => (
              <span 
                key={type.type.name} 
                className="type" 
                style={{ backgroundColor: typeColors[type.type.name] || '#ccc' }}
              >
                {type.type.name}
              </span>
            )).reduce((prev, curr) => [prev, ', ', curr])}
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

function PokemonModal({ pokemon, onClose }) {
  if (!pokemon) return null;

  const mainType = pokemon.types[0].type.name;
  const backgroundColor = typeColors[mainType] || '#fff';

  return (
    <div className="modal-overlay">
      <div className="modal-content" style={{ backgroundColor }}>
        <div className="modal-image">
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
        <div className="modal-details">
          <h2>{pokemon.name}</h2>
          <p>Species: {pokemon.speciesData.genera[7].genus}</p>
          <p>Height: {pokemon.height}</p>
          <p>Weight: {pokemon.weight}</p>
          <p>Types: {pokemon.types.map((type) => type.type.name).join(', ')}</p>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}

PokemonModal.propTypes = {
  pokemon: PropTypes.object,
  onClose: PropTypes.func.isRequired,
};

export { Pokedex, PokemonModal };
