import React from 'react';
import PropTypes from 'prop-types';
import './PokemonModal.css'; // Optional: Add your own styles for the modal

function PokemonModal({ pokemon, onClose }) {
  if (!pokemon) return null; // If no Pokémon is selected, return null

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{pokemon.name}</h2>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <p>Height: {pokemon.height}</p>
        <p>Weight: {pokemon.weight}</p>
        <p>Types: {pokemon.types.map(type => type.type.name).join(', ')}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

PokemonModal.propTypes = {
  pokemon: PropTypes.object,
  onClose: PropTypes.func.isRequired,
};

export default PokemonModal;
