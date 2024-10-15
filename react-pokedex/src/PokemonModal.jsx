import React from 'react';
import PropTypes from 'prop-types';
import './PokemonModal.css';

// Type color map
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

function PokemonModal({ pokemon, onClose }) {
  if (!pokemon) return null; // If no Pokémon is selected, return null

  // Get the main type to set the background color
  const mainType = pokemon.types[0].type.name;
  const backgroundColor = typeColors[mainType] || '#fff'; // Default to white if no color found

  return (
    <div className="modal-overlay">
      <div className="modal-content" style={{ backgroundColor }}>
        <div className="modal-image">
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
        <div className="modal-details">
          <h2>{pokemon.name}</h2>
          {/* Species is now directly accessible */}
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

export default PokemonModal;
