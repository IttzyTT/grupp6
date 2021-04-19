import React from 'react';
import logo from '../LOGO.png';

const Header = () => {
  return (
    <div>
      <header className="header">
        <img className="logo" src={logo} alt="logo" />
      </header>
    </div>
  );
};

export default Header;
