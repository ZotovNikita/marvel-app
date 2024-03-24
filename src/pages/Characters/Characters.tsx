import React from 'react';
import './Characters.css';
import Header from 'components/Header/Header';
import SearchComponent from 'components/SearchContainer/SearchContainer';
import CardList from 'components/CardList/CardList';
import { characters } from 'data/heroes';
import Footer from 'components/Footer/Footer';

function Characters(): JSX.Element {
  return (
    <>
      <div>
        <Header
          logoPath="../public/marvel_logo.svg"
          navigationItems={[
            { label: 'Сharacters', link: '/characters' },
            { label: 'Сomics', link: '/comics' }
          ]}
        />
        <SearchComponent
          onSearch={(query) => console.log('Search:', query)}
          count={characters.length.toString()}
          placeholder="Search for Characters by Name"
          title="Characters"
          searchButtonLabel="SEARCH"
        />
        
        <hr className="hr-line" />
        <CardList items={characters} baseRoot='character'/>
        <Footer />
      </div>
    </>
  );
}

export default Characters;
