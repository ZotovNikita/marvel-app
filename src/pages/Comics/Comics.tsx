import React from 'react';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import ComicsList from 'components/ComicsList/ComicsList';
import { comics } from 'data/comics';
import './Comics.css'; 

function Comics(): JSX.Element {
  return (
    <div className="container">
      <Header
        logoPath="../public/marvel_logo.svg"
        navigationItems={[
          { label: 'Сharacters', link: '/characters' },
          { label: 'Сomics', link: '/comics' }
        ]}
      />
      <ComicsList comics={comics} />
      <Footer />
    </div>
  );
}

export default Comics;
