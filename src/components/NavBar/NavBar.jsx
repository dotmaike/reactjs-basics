import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

const NavBar = () => (
  <nav role="navigation" className="collapse navbar-collapse">
    <ul className="nav navbar-nav">
      <li role="presentation" className="active"><Link to="/">Home</Link></li>
      <li role="presentation"><Link to="/about">About</Link></li>
      <li role="presentation"><Link to="/inbox">Inbox</Link></li>
    </ul>
  </nav>
);

export default NavBar;
