import React from 'react';
import ComicsCard from '../ComicsCard/ComicsCard';
import './ComicsList.css';
import { Comics } from '../../types/Comics';

const ComicsList: React.FC<{ comics: Comics[] }> = ({ comics }) => {
  return (
    <div className="comics-list">
      {comics.map((comic) => (
        <ComicsCard key={comic.id} comics={comic} />
      ))}
    </div>
  );
};

export default ComicsList;
