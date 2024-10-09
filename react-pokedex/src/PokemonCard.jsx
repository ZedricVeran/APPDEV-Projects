import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './PokemonCard.css';

function PokemonCard({ name, url }) {
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

  return (
    <div className="pokemon-card">
      {pokemonDetails ? (
        <>
          <img
            src={pokemonDetails.sprites.front_default}
            alt={pokemonDetails.name}
          />
          <h3>{pokemonDetails.name}</h3>
          <p>Height: {pokemonDetails.height}</p>
          <p>Weight: {pokemonDetails.weight}</p>
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
};

export default PokemonCard;