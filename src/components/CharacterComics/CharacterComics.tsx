import React, { FC } from 'react';
import './CharacterComics.css';
import { Character } from '../../types/Character';

const CharacterComics: FC<{ character: Character }> = ({ character }) => (
  <div className="character-container">
    <img
      src={character.imageUrl}
      alt={character.name}
      className="character-image"
    />
    <div className="details-container">
      <div className="character-info">
        <div className="character-name">{character.name}</div>
        <div className="character-description">{character.description}</div>
      </div>
      <div className="comics-links">
        <h2 className="title">Comics</h2>
        {Object.entries(character.link).map(([id, url]) => (
          <a key={id} href={url} target="_blank" rel="noopener noreferrer">
            Comic #{id}
          </a>
        ))}
      </div>
    </div>
  </div>
);

export default CharacterComics;
