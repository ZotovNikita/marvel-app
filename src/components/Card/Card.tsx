import React from 'react';
import { Link } from 'react-router-dom';
import { Item } from '../../types/Item';
import './Card.css';

interface CardProps {
  item: Item;
  baseRoot: string;
  noDescriptionText: string;
}

const Card: React.FC<CardProps> = ({ item, baseRoot, noDescriptionText }) => {
  const { description } = item;

  const MAX_DESCRIPTION_LENGTH = 70;

  let truncatedDescription = description;
  if (
    truncatedDescription &&
    truncatedDescription.length > MAX_DESCRIPTION_LENGTH
  ) {
    truncatedDescription = `${truncatedDescription.slice(
      0,
      MAX_DESCRIPTION_LENGTH
    )}...`;
  }

  const displayDescription = truncatedDescription || noDescriptionText;

  return (
    <Link className="card" to={`/${baseRoot}-details/${item.id}`}>
      <img src={`${item.imageUrl}`} alt={item.name} />
      <div className="item-details">
        <h3>{item.name}</h3>
        <p>{displayDescription}</p>
      </div>
    </Link>
  );
};

export default Card;
