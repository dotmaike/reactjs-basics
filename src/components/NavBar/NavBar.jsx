import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

const NavBar = () => (
  <nav role="navigation" className="navbar navbar-static-top">
    <div className="container">
      <div className="navbar-header">
        <a href="/" className="navbar-brand">Brand</a>
      </div>
      <div className="collapse navbar-collapse">
        <ul className="nav navbar-nav">
          <li role="presentation">
            <Link to="/">Home</Link>
          </li>
          <li role="presentation">
            <Link to="/about">About</Link>
          </li>
          <li role="presentation">
            <Link to="/counter-react">Counter React</Link>
          </li>
          <li role="presentation">
            <Link to="/counter-redux">Counter Redux</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default NavBar;
