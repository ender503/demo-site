import React from 'react';

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <header className="header">
        <div className="container">
          <Link className="main-logo" to="/">
            TangleID Demo | Tangle
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
