import React from 'react';

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <header className="header">
        <div className="container">
          <Link className="main-logo" to="/">
            I-PATH 校園學習衛星站
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
