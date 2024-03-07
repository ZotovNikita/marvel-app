import React, { useState } from 'react';
import './SearchContainer.css';

interface SearchProps {
  onSearch: (query: string) => void;
  count: string; 
}

const SearchComponent: React.FC<SearchProps> = ({ onSearch, count }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="search-container">
      <h1 className="search-title">Characters <span className="count">({count})</span></h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for Characters by Name"
        className="search-input"
      />
      <button
        type="button" 
        onClick={handleSearch}
        className="search-button"
      >
        SEARCH
      </button>
    </div>
  );
};

export default SearchComponent;
