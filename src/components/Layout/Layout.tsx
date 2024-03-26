import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import './Layout.css'; 

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="layout">
      <Header
        logoPath="../public/marvel_logo.svg"
        navigationItems={[
          { label: 'Сharacters', link: '/characters' },
          { label: 'Сomics', link: '/comics' }
        ]}
      />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
