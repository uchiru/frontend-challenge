import * as React from 'react';
import { Link, Outlet } from 'react-router-dom';


export default function Header() {
  return (
    <div className='container'>
      <header className="header">
        <nav className="header__nav header-nav">
          <ul className="header-nav__list list-reset">
            <li className="header-nav__item">
              <Link className="header-nav__btn btn-reset" to="allcats">Все котики</Link>
            </li>
            <li className="header-nav__item">
              <Link className="header-nav__btn btn-reset" to="favscats">Любимые котики</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </div>
  )
};