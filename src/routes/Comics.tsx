import React, { useEffect, useState } from 'react';
import CardList from 'components/CardList/CardList';
import SearchComponent from 'components/SearchContainer/SearchContainer';
import { getTotalComics, getComics } from 'api/GetComics';
import { Item } from 'types/Item';

function ComicsPage(): JSX.Element {
  const [comicsList, setComicsList] = useState<Item[]>([]);
  const [totalNumber, setTotal] = useState<number>(0);

  useEffect(() => {
    const fetchTotal = async () => {
      try {
        const total = await getTotalComics();
        setTotal(total);
      } catch (error) {
        console.error('Error fetching total:', error);
      }
    };

    fetchTotal();
  }, []);

  useEffect(() => {
    const fetchComics = async () => {
      try {
        const offset = 0;
        const comics = await getComics(offset);
        setComicsList(comics);
      } catch (error) {
        console.error('Error fetching comics:', error);
      }
    };

    fetchComics();
  }, []);
  return (
    <div>
      <SearchComponent
        onSearch={(query) => console.log('Search:', query)}
        count={totalNumber}
        placeholder="Search for Comics by Title"
        title="Comics"
        searchButtonLabel="SEARCH"
      />

      <hr className="hr-line" />

      <CardList items={comicsList} baseRoot="comics" noDescriptionText=""/>
    </div>
  );
}

export default ComicsPage;
