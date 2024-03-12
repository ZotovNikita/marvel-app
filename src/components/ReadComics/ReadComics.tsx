import React, { FC } from 'react';
import './ReadComics.css';
import { Comics } from '../../types/Comics';

const CharacterComics: FC<{ comics: Comics }> = ({ comics }) => (
  <div className="comics-container">
    <img src={comics.imageUrl} alt={comics.name} className="comics-image" />
  </div>
);

export default CharacterComics;
