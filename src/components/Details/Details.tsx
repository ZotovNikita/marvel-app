import React, { FC } from 'react';
import './Details.css';
import { Item } from '../../types/Item';

interface DetailsProps {
  item: Item;
  title: string;
}

const Details: FC<DetailsProps> = ({ item, title }) => (
  <div className="details-container">
    <img src={item.imageUrl} alt={item.name}/>
    <div className="info-container">
      <div className="details-info">
        <div className="details-name">{item.name}</div>
        <div className="details-description">{item.description}</div>
      </div>
      <div className="details-links">
        <h2 className="details-title">{title}</h2>
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
