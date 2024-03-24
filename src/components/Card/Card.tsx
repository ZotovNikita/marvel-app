import React from 'react';
import { Link } from 'react-router-dom';
import { Character } from '../../types/Character';
import './Card.css';

const Card: React.FC<{ item: Character; baseRoot: string }> = ({
  item,
  baseRoot
}) => {
  const { description } = item;

  const MAX_DESCRIPTION_LENGTH = 70;

  let truncatedDescription = description;
  if (truncatedDescription.length > MAX_DESCRIPTION_LENGTH) {
    truncatedDescription = `${truncatedDescription.slice(0, MAX_DESCRIPTION_LENGTH)}...`;
  }

  return (
    <Link className="card" to={`/${baseRoot}-details/${item.id}`}>
      <img
        src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
        alt={item.name}
      />
      <div className="item-details">
        <h3>{item.name}</h3>
        <p>
          {truncatedDescription !== ''
            ? truncatedDescription
            : 'No description provided'}
        </p>
      </div>
    </Link>
  );
};

export default Card;
