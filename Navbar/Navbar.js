import React from 'react';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" to="/">
      [Title]
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav">
        <li className="nav-item">   
          <a activeClassName="active" className="nav-link" to="/teams">
            [Protected Link 1]
          </a>
        </li>
      </ul>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
        <a activeClassName="active" className="nav-link" to="/login">
          [Unprotected Link]
        </a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
