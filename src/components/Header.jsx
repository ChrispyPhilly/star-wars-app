import React from 'react';
import Nav from './Nav';

import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/starships">Starships</Link></li>
        <li><Link to="/films">Films</Link></li>
        <li><Link to="/planets">Planets</Link></li>
        <li><Link to="/people">People</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;