import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import SearchComponent from 'components/SearchContainer/SearchContainer';
import CardList from 'components/CardList/CardList';
import charactersStore from '../stores/CharactersStore';

const Characters = observer(() => {
  const { characterList, totalNumber, fetchTotalCharacters, fetchCharacters } = charactersStore;

  useEffect(() => {
    fetchTotalCharacters();
    fetchCharacters();
  }, [fetchTotalCharacters, fetchCharacters]);

  const handleSearch = (query: string) => {
    console.log('Search:', query);
  };

  return (
    <>
      <div>
        <SearchComponent
          onSearch={handleSearch}
          count={totalNumber}
          placeholder="Search for Characters by Name"
          title="Characters"
          searchButtonLabel="SEARCH"
        />

        <hr className="hr-line" />

        <CardList items={characterList} baseRoot="character" noDescriptionText="No description provided" />
      </div>
    </>
  );
});

export default Characters;
