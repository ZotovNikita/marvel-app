import React from 'react';
import './CharacterCard.css';
import { Link } from 'react-router-dom';
import { Character } from '../../types/Character';

const CharacterCard: React.FC<{ character: Character }> = ({ character }) => {
  return (
    <Link className="character-card" to={`/character-details/${character.id}`}>
      <img src={character.imageUrl} alt={character.name} />
      <div className="character-details">
        <h3>{character.name}</h3>
        <p>{character.description}</p>
      </div>
    </Link>
  );
};

export default CharacterCard;
