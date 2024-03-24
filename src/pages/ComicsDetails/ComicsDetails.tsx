import React from 'react';
import { useParams } from 'react-router-dom';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Details from 'components/Details/Details';
import { comics } from 'data/comics';

function ComicsDetails(): JSX.Element {
  const { id } = useParams();

  const selectedComics = comics.find(
    (comic) => comic.id === Number(id)
  );

  return (
    <div className="container">
      <Header
        logoPath="../public/marvel_logo.svg"
        navigationItems={[
          { label: 'Сharacters', link: '/characters' },
          { label: 'Сomics', link: '/comics' }
        ]}
      />
      {selectedComics ? (
        <Details item={selectedComics} title='Characters'/>
      ) : (
        <p>Not found</p>
      )}
      <Footer />
    </div>
  );
}

export default ComicsDetails;
