import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

const NavBar = ({ match }) => (
  <nav role="navigation" className="collapse navbar-collapse">
    <ul className="nav navbar-nav">
      <li role="presentation" className={match ? 'active' : ''}><Link to="/">Home</Link></li>
      <li role="presentation" className={match ? 'active' : ''}><Link to="/about">About</Link></li>
      <li role="presentation" className={match ? 'active' : ''}><Link to="/inbox">Inbox</Link></li>
    </ul>
  </nav>
);

export default NavBar;
