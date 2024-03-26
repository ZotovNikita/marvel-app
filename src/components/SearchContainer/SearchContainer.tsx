import React, { useState, useEffect } from 'react';
import './SearchContainer.css';
import useDebounce from 'hooks/useDebounce';
import { SearchProps } from '../../types/SearchProps';

const SearchComponent: React.FC<SearchProps> = ({
  onSearch,
  count,
  placeholder,
  title,
  searchButtonLabel
}) => {
  const [query, setQuery] = useState('');
  const debounce = useDebounce(query, 3000);

  const handleSearch = () => {
    onSearch(query);
  };

  useEffect(() => {
    if (query !== '') handleSearch();
  }, [debounce]);

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
