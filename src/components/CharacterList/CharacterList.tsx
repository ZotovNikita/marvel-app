import React from 'react';
import CharacterCard from '../CharacterCard/CharacterCard'; 
import './CharacterList.css'; 

export interface Character {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  link: { [id: number]: string };
}

export interface CharacterListProps {
  characters: Character[]; 
}

const CharacterList: React.FC<CharacterListProps> = ({ characters }) => {
  return (
    <div className="character-list">
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
};

export default CharacterList;
