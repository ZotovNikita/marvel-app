import React from 'react';
import './ComicsCard.css';
import { Link } from 'react-router-dom';
import { Comics } from '../../types/Comics';

const ComicsCard: React.FC<{ comics: Comics }> = ({ comics }) => {
  return (
    <Link className="comics-card" to={`/comics/${comics.id}`}>
      <img src={comics.imageUrl} alt={comics.name} />
      <div className="comics">
        <h3>{comics.name}</h3>
        <p>{comics.authors}</p>
      </div>
    </Link>
  );
};

export default ComicsCard;
