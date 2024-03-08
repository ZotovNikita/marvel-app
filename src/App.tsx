import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import SearchComponent from './components/SearchContainer/SearchContainer';
import CharacterList from './components/CharacterList/CharacterList';
import {characters} from './data/heroes';
import Footer from './components/Footer/Footer';

function App(): JSX.Element {
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
          count="1562"
        />
        <hr className="hr-line"/>
        <CharacterList characters={characters} />
        <Footer />
      </div>
    </>
  );
}

export default App;
