import React from 'react';
import CardList from 'components/CardList/CardList';
import SearchComponent from 'components/SearchContainer/SearchContainer';
import { comics } from 'data/comics';

function Comics(): JSX.Element {
  return (
    <div>
      <SearchComponent
        onSearch={(query) => console.log('Search:', query)}
        count={comics.length.toString()}
        placeholder="Search for Comics by Name"
        title="Comics"
        searchButtonLabel="SEARCH"
      />

      <hr className="hr-line" />

      <CardList items={comics} baseRoot="comics" />
    </div>
  );
}

export default Comics;
