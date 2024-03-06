import React from 'react';
import './Header.css'; 

interface NavigationItem {
    label: string;
    link: string;
}

interface HeaderProps {
    logoPath: string;
    navigationItems: NavigationItem[];
}

const Header: React.FC<HeaderProps> = ({ logoPath, navigationItems }) => {
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
}

export default Header;
