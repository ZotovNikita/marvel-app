import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';
import { Item } from '../../types/Item';

const Card: React.FC<{ item: Item; baseRoot: string }> = ({
  item,
  baseRoot
}) => {
  return (
    <Link className="card" to={`/${baseRoot}-details/${item.id}`}>
      <img src={item.imageUrl} alt={item.name} />
      <div className="item-details">
        <h3>{item.name}</h3>
        <p>{item.description}</p>
      </div>
    </Link>
  );
};

export default Card;
