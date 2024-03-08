import React from 'react';
import CharacterCard from '../CharacterCard/CharacterCard';
import './CharacterList.css';
import { Character } from '../../types/Character';

const CharacterList: React.FC<{ characters: Character[] }> = ({
  characters
}) => {
  return (
    <div className="character-list">
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
};

export default CharacterList;
