import './Header.css';
import { Link, useLocation } from 'react-router-dom';

function Header() {

  const { pathname } = useLocation();

  return (
    <header className="header">
      <div className='header__container'>
          <Link 
            to={'/'} 
            className={pathname === '/' ? 'header__cats header__active' : 'header__cats'}>Все котики
          </Link>
          <Link 
            to={'/saved-cats'} 
            className={pathname === '/saved-cats' ? 'header__saved-cats header__active' : 'header__saved-cats'}>Любимые котики
          </Link>
        </div>  
    </header>
  );
}

export default Header;
