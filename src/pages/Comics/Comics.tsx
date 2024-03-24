import React from 'react';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import CardList from 'components/CardList/CardList';
import SearchComponent from 'components/SearchContainer/SearchContainer';
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
      <SearchComponent
        onSearch={(query) => console.log('Search:', query)}
        count={comics.length.toString()}
        placeholder="Search for Comics by Name"
        title="Comics"
        searchButtonLabel="SEARCH"
      />
      <CardList items={comics} baseRoot="comics" />
      <Footer />
    </div>
  );
}

export default Comics;
