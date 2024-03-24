import React, { FC } from 'react';
import './Details.css';
import { Link } from 'react-router-dom';
import { Item } from '../../types/Item';

const Details: FC<{ item: Item; title: string; baseRoot: string }> = ({
  item,
  title,
  baseRoot
}) => (
  <div className="details-container">
    <img src={item.imageUrl} alt={item.name} />
    <div className="info-container">
      <div className="details-info">
        <div className="details-name">{item.name}</div>
        <div className="details-description">{item.description}</div>
      </div>
      <div className="details-links">
        <h2 className="details-title">{title}</h2>
        {Object.entries(item.link).map(([id, linkTitle]) => (
          <Link to={`/${baseRoot}-details/${id}`}>{linkTitle}</Link>
        ))}
      </div>
    </div>
  </div>
);

export default Details;
