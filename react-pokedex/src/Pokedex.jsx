import React from 'react';
import PropTypes from 'prop-types';
import PokemonCard from './PokemonCard';
import './Pokedex.css';

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

export default Pokedex;
