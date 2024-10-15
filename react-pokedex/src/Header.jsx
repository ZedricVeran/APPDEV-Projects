import React from 'react';
import PropTypes from 'prop-types';

function Header({ searchTerm, onSearch }) {
  return (
    <div className="fixed-header">
      <h1>Pokédex (Kanto)</h1>
      <input
        className="search-bar"
        type="text"
        placeholder="Search Pokémon"
        value={searchTerm}
        onChange={onSearch}
      />
    </div>
  );
}

Header.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default Header;
