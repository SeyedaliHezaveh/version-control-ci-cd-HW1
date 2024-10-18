import React from 'react';
import logo from '../../logo.svg'

const Header = () => {
  return (
    <header>
     <img src={logo} alt="Logo" style={{ height: '50px' }} />
      <h1>My Static Site</h1>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>

  );
};

export default Header;