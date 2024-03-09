import React from 'react';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
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
      <h1 className="text">Comics page</h1>
      <Footer />
    </div>
  );
}

export default Comics;
