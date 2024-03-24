import React, { FC } from 'react';
import './Details.css';
import { Item } from '../../types/Item';

interface DetailsProps {
  item: Item;
  title: string;
}

const Details: FC<DetailsProps> = ({ item, title }) => (
  <div className="character-container">
    <img src={item.imageUrl} alt={item.name} className="character-image" />
    <div className="details-container">
      <div className="character-info">
        <div className="character-name">{item.name}</div>
        <div className="character-description">{item.description}</div>
      </div>
      <div className="comics-links">
        <h2 className="title">{title}</h2>
        {Object.entries(item.link).map(([id, linkTitle]) => (
          <a
            key={id}
            href={linkTitle}
            target="_blank"
            rel="noopener noreferrer"
          >
            {linkTitle}
          </a>
        ))}
      </div>
    </div>
  </div>
);

export default Details;
