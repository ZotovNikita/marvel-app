import React from 'react';
import { useParams } from 'react-router-dom';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Details from 'components/Details/Details';
import { characters } from 'data/heroes';

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
        <Details item={selectedCharacter} title='Comics'/>
      ) : (
        <p>Not found</p>
      )}
      <Footer />
    </div>
  );
}

export default CharacterDetails;
