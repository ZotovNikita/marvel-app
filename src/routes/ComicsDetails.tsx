import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router-dom';
import Details from 'components/Details/Details';
import comicsDetailsStore from '../stores/ComicsDetailsStore';

const ComicsDetails = observer(() => {
  const { id } = useParams<{ id: string }>();
  const { comicsDetails, comicsCharacters, fetchComicsDetails, fetchComicsCharacters } = comicsDetailsStore;

  useEffect(() => {
    fetchComicsDetails(Number(id));
    fetchComicsCharacters(Number(id));
  }, [fetchComicsDetails, fetchComicsCharacters, id]);

  const selectedComics = comicsDetails.find((details) => details.id === Number(id));

  return (
    <div>
      {selectedComics ? (
        <Details
          item={selectedComics}
          title="Characters"
          baseRoot="comics"
          links={comicsCharacters}
        />
      ) : (
        <p>Not found</p>
      )}
    </div>
  );
});

export default ComicsDetails;
