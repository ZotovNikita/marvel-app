import React from 'react';
import { useParams } from 'react-router-dom';
import Details from 'components/Details/Details';
import { characters } from 'data/heroes';

function CharacterDetails(): JSX.Element {
  const { id } = useParams();

  const selectedCharacter = characters.find(
    (character) => character.id === Number(id)
  );

  return (
    <div>
      {selectedCharacter ? (
        <Details item={selectedCharacter} title="Comics" baseRoot="comics" />
      ) : (
        <p>Not found</p>
      )}
    </div>
  );
}

export default CharacterDetails;
