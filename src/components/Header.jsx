import React from 'react';

import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <header className="shadow">
      <nav>
        <ul>
          <Link className="navigation-item" to="/">Все котики</Link>
          <Link className="navigation-item" to="/favorite">Любимые котики</Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;