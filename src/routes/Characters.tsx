import React from 'react';
import SearchComponent from 'components/SearchContainer/SearchContainer';
import CardList from 'components/CardList/CardList';
import { characters } from 'data/heroes';

function Characters(): JSX.Element {
  return (
    <>
      <div>
        <SearchComponent
          onSearch={(query) => console.log('Search:', query)}
          count={characters.length.toString()}
          placeholder="Search for Characters by Name"
          title="Characters"
          searchButtonLabel="SEARCH"
        />

        <hr className="hr-line" />

        <CardList items={characters} baseRoot="character" />
      </div>
    </>
  );
}

export default Characters;
