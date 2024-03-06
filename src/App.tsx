import React from 'react';
import './App.css';
import Header from './components/Header/Header';

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
      </div>
    </>
  );
}

export default App;
