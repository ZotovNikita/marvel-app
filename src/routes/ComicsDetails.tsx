import React from 'react';
import { useParams } from 'react-router-dom';
import Details from 'components/Details/Details';

function ComicsDetails(): JSX.Element {
  const { id } = useParams();

  // const selectedComics = comics.find((comic) => comic.id === Number(id));

  return (
    <div>
      {/* {selectedComics ? (
        <Details
          item={selectedComics}
          title="Characters"
          baseRoot="character"
        />
      ) : (
        <p>Not found</p>
      )} */}
    </div>
  );
}

export default ComicsDetails;
