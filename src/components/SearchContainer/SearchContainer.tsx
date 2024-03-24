import React, { useState } from 'react';
import './SearchContainer.css';
import { SearchProps } from '../../types/SearchProps';

const SearchComponent: React.FC<SearchProps> = ({
  onSearch,
  count,
  placeholder,
  title,
  searchButtonLabel
}) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="search-container">
      <h1 className="search-title">
        {title} <span className="count">{count}</span>
      </h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="search-input"
      />
      <button type="button" onClick={handleSearch} className="search-button">
        {searchButtonLabel}
      </button>
    </div>
  );
};

export default SearchComponent;
