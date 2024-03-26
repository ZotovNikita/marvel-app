import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import SearchComponent from 'components/SearchContainer/SearchContainer';
import CardList from 'components/CardList/CardList';
import charactersStore from '../stores/CharactersStore';
import Pagination from '../components/Pagination/Pagination';

const Characters = observer(() => {
  const { characterList, totalNumber, fetchTotalCharacters, fetchCharacters } = charactersStore;
  const [currentPage, setCurPage] = useState(1);
  const maxLength = 7;
  const numItems = 12

  const [nameStartsWith] = useState('');

  useEffect(() => {
    
    fetchTotalCharacters();
    fetchCharacters(currentPage);
  }, [fetchTotalCharacters, fetchCharacters, currentPage, nameStartsWith]);

  const handleSearch = (query: string) => {
    console.log('Search:', query);
  };

  const handlePageClick = (pageNumber: number) => {
    setCurPage(pageNumber);
  };
  
  const lastPage = Math.ceil(totalNumber / numItems);

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

        <hr className="hr-line" />

        <Pagination
          currentPage={currentPage}
          lastPage={lastPage}
          maxLength={maxLength}
          handlePageClick={handlePageClick}
        />
      </div>
    </>
  );
});

export default Characters;
