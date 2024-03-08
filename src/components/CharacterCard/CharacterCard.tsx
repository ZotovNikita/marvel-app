import React from 'react';
import './CharacterCard.css';

interface Character {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  link: { [id: number]: string };
}

interface CharacterCardProps {
  character: Character;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  return (
    <div className="character-card">
      <img src={character.imageUrl} alt={character.name} />
      <div className="character-details">
        <h3>{character.name}</h3>
        <p>{character.description}</p>
      </div>
    </div>
  );
};

export default CharacterCard;