import React from 'react';
import { useParams } from 'react-router-dom';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import CharacterComics from 'components/CharacterComics/CharacterComics';
import { characters } from 'data/heroes';
import './CharacterDetails.css';

function CharacterDetails(): JSX.Element {
  const { id } = useParams();

  const selectedCharacter = characters.find(
    (character) => character.id === Number(id)
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
      {selectedCharacter ? (
        <CharacterComics character={selectedCharacter} />
      ) : (
        <p>Not found</p>
      )}
      <Footer />
    </div>
  );
}

export default CharacterDetails;
