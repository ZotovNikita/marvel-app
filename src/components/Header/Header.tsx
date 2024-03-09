import React from 'react';
import './Header.css';
import { NavigationItem } from '../../types/NavigationItem';

const Header: React.FC<{
  logoPath: string;
  navigationItems: NavigationItem[];
}> = ({ logoPath, navigationItems }) => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logoPath} alt="Логотип Marvel" />
      </div>
      <nav>
        <ul>
          {navigationItems.map((item) => (
            <li key={item.link}>
              <a href={item.link}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
