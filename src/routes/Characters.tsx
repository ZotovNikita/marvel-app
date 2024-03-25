import React, { useEffect, useState } from 'react';
import SearchComponent from 'components/SearchContainer/SearchContainer';
import CardList from 'components/CardList/CardList';
import { getTotalCharacters, getCharacters} from '../api/GetCharacters';
import { Item } from '../types/Item';

function Characters(): JSX.Element {
  const [characterList, setCharacterList] = useState<Item[]>([]);
  const [totalNumber, setTotal] = useState<number>(0);

  useEffect(() => {
    const fetchTotal = async () => {
      try {
        const total = await getTotalCharacters();
        setTotal(total);
      } catch (error) {
        console.error('Error fetching total:', error);
      }
    };

    fetchTotal();
  }, []);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const offset = 0;
        const characters = await getCharacters(offset);
        setCharacterList(characters);
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    };

    fetchCharacters();
  }, []);

  return (
    <>
      <div>
        <SearchComponent
          onSearch={(query) => console.log('Search:', query)}
          count={totalNumber} 
          placeholder="Search for Characters by Name"
          title="Characters"
          searchButtonLabel="SEARCH"
        />

        <hr className="hr-line" />

        <CardList items={characterList} baseRoot="character" />
      </div>
    </>
  );
}

export default Characters;
