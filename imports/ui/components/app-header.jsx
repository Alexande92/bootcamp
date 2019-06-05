import React from 'react';

import '../styles/app-header.css';

const AppHeader = () => (
  <header className="container">
    <div className="logo">
      <img src="/images/logo.svg" alt="logo" />
    </div>
    <nav className="navbar">
      <ul className="link-list">
        <li>
          <a href="/" className="active">Main</a>
        </li>
        <li>
          <a href="#">Test</a>
        </li>
        <li>
          <a href="#">Test</a>
        </li>
      </ul>
    </nav>
  </header>
);

AppHeader.displayName = 'AppHeader'

export default AppHeader;
