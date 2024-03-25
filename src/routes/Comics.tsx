import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import SearchComponent from 'components/SearchContainer/SearchContainer';
import CardList from 'components/CardList/CardList';
import comicsPageStore from '../stores/ComicsPageStore';

const ComicsPage = observer(() => {
  const { comicsList, totalNumber, fetchTotalComics, fetchComics } = comicsPageStore;

  useEffect(() => {
    fetchTotalComics();
    fetchComics();
  }, [fetchTotalComics, fetchComics]);

  const handleSearch = (query: string) => {
    console.log('Search:', query);
  };

  return (
    <div>
      <SearchComponent
        onSearch={handleSearch}
        count={totalNumber}
        placeholder="Search for Comics by Title"
        title="Comics"
        searchButtonLabel="SEARCH"
      />

      <hr className="hr-line" />

      <CardList items={comicsList} baseRoot="comics" noDescriptionText="" />
    </div>
  );
});

export default ComicsPage;
