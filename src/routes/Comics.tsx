import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import SearchComponent from 'components/SearchContainer/SearchContainer';
import CardList from 'components/CardList/CardList';
import Pagination from 'components/Pagination/Pagination';
import comicsPageStore from '../stores/ComicsPageStore';

const ComicsPage = observer(() => {
  const { comicsList, totalNumber, fetchTotalComics, fetchComics } =
    comicsPageStore;
  const [currentPage, setCurPage] = useState(1);
  const maxLength = 7;
  const numItems = 12;

  useEffect(() => {
    fetchTotalComics();
    fetchComics(currentPage);
  }, [fetchTotalComics, fetchComics, currentPage]);

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
          placeholder="Search for Comics by Title"
          title="Comics"
          searchButtonLabel="SEARCH"
        />

        <hr className="hr-line" />

        <CardList items={comicsList} baseRoot="comics" noDescriptionText="" />

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

export default ComicsPage;
