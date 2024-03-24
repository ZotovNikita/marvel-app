import React from 'react';
import Card from '../Card/Card';
import './CardList.css';
import { Item } from '../../types/Item';

const CardList: React.FC<{ items: Item[]; baseRoot: string }> = ({
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
