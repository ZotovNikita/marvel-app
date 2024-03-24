import React from 'react';
import Card from '../Card/Card';
import './CardList.css';
import { Character } from '../../types/Character';

const CardList: React.FC<{ items: Character[]; baseRoot: string }> = ({
  items,
  baseRoot
}) => {
  return (
    <div className="card-list">
      {items.map((item) => (
        <Card key={item.id} item={item} baseRoot={baseRoot} />
      ))}
    </div>
  );
};

export default CardList;
