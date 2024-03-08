import React from 'react';
import './CharacterCard.css';
import { Character } from '../../types/Character';

const CharacterCard: React.FC<{ character: Character }> = ({ character }) => {
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
