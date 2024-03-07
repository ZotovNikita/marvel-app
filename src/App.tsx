import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import SearchComponent from './components/SearchContainer/SearchContainer';

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
        <SearchComponent onSearch={(query) => console.log('Search:', query)} count='1562'/>
      </div>
    </>
  );
}

export default App;
