// src/components/Layout.js

import React from 'react';

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <h1>Mi sitio web</h1>
      </header>
      <main>{children}</main>
      <footer>
        <p>&copy; 2025 Mi Sitio Web</p>
      </footer>
    </div>
  );
};

export default Layout;
