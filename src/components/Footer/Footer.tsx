import React from 'react';
import './Footer.css';
import marvelLogo from '../../../public/marvel_logo.svg';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer-logo">
        <img src={marvelLogo} alt="Marvel logo" />
      </div>
      <p className="footer-text">Data provided by Marvel. © 2022 MARVEL</p>
      <a className="footer-link" href="https://developer.marvel.com">developer.marvel.com</a>
    </footer>
  );
};

export default Footer;