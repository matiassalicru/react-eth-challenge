import React from 'react';
import '../styles/components/Header.styl';

const Header = ({ data = {}, children }) => {
  const { name } = data;
  return (
    <header className="Header-container">
      <h1 className="Header-title">{name}</h1>
      {children}
    </header>
  );
};

export default Header;
