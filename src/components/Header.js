import React from 'react';

import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="container">
          <Link className="main-logo" to="/">
            TangleID Demo | Tangle
          </Link>
        </div>
      </header>
    );
  }
}

export default Header;
