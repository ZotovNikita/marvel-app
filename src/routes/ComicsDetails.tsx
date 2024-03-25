import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Details from 'components/Details/Details';
import { getComicsByID, getComicsCharacters } from 'api/GetComics';
import { Item } from '../types/Item';

function ComicsDetails(): JSX.Element {
  const { id } = useParams<{ id: string }>();

  const [comicsDetails, setComicsDetails] = useState<Item[]>([]);
  const [comicsCharacters, setComicsCharacters] = useState<{
    [id: number]: string;
  }>({});

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const details = await getComicsByID(Number(id));
        setComicsDetails(details);
      } catch (error) {
        console.error('Error fetching details:', error);
      }
    };

    fetchDetails();
  }, [id]);

  useEffect(() => {
    const fetchCharacterComics = async () => {
      try {
        const comics = await getComicsCharacters(Number(id));
        setComicsCharacters(comics);
      } catch (error) {
        console.error('Error fetching comics:', error);
      }
    };

    fetchCharacterComics();
  }, [id]);

  const selectedComics = comicsDetails.find(
    (details) => details.id === Number(id)
  );

  return (
    <div>
      {selectedComics ? (
        <Details
          item={selectedComics}
          title="Characters"
          baseRoot="comics"
          links={comicsCharacters}
        />
      ) : (
        <p>Not found</p>
      )}
    </div>
  );
}

export default ComicsDetails;
