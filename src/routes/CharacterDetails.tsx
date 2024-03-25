import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router-dom';
import Details from 'components/Details/Details';
import characterDetailsStore from '../stores/CharacterDetailsStore';

const CharacterDetails = observer(() => {
  const { id } = useParams<{ id: string }>();
  const { characterDetails, characterComics, fetchCharacterDetails, fetchCharacterComics } = characterDetailsStore;

  useEffect(() => {
    fetchCharacterDetails(Number(id));
    fetchCharacterComics(Number(id));
  }, [fetchCharacterDetails, fetchCharacterComics, id]);

  const selectedCharacter = characterDetails.find((details) => details.id === Number(id));

  return (
    <div>
      {selectedCharacter ? (
        <Details
          item={selectedCharacter}
          title="Comics"
          baseRoot="comics"
          links={characterComics}
        />
      ) : (
        <p>Not found</p>
      )}
    </div>
  );
});

export default CharacterDetails;
