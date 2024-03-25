import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Details from 'components/Details/Details';
import { getCharacterByID, getCharacterComics } from 'api/GetCharacters';
import { Item } from '../types/Item';

function CharacterDetails(): JSX.Element {
  const { id } = useParams<{ id: string }>();

  const [characterDetails, setCharacterDetails] = useState<Item[]>([]);
  const [charactersComics, setCharacterComics] = useState<{
    [id: number]: string;
  }>({});

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const details = await getCharacterByID(Number(id));
        setCharacterDetails(details);
      } catch (error) {
        console.error('Error fetching details:', error);
      }
    };

    fetchDetails();
  }, [id]);

  useEffect(() => {
    const fetchCharacterComics = async () => {
      try {
        const comics = await getCharacterComics(Number(id));
        setCharacterComics(comics);
      } catch (error) {
        console.error('Error fetching comics:', error);
      }
    };

    fetchCharacterComics();
  }, [id]);

  const selectedCharacter = characterDetails.find(
    (details) => details.id === Number(id)
  );

  return (
    <div>
      {selectedCharacter ? (
        <Details
          item={selectedCharacter}
          title="Comics"
          baseRoot="comics"
          links={charactersComics}
        />
      ) : (
        <p>Not found</p>
      )}
    </div>
  );
}

export default CharacterDetails;
