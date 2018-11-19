import React from 'react';

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
      <h5 class="my-0 mr-md-auto font-weight-normal">
        <Link to="/">I-PATH 校園學習衛星站</Link>
      </h5>

      <nav className="my-2 my-md-0 mr-md-3">
        <Link className="p-2 text-dark" to="/">
          Home
        </Link>
        <Link className="p-2 text-dark" to="/users">
          Students
        </Link>
        <Link className="p-2 text-dark" to="/activity">
          Activity
        </Link>
      </nav>
      <a class="btn btn-outline-primary" href="#">
        Sign up
      </a>
    </header>
  );
};

export default Header;
