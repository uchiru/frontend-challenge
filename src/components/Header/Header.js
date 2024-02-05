import classes from './Header.module.scss';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  const handleAllCatsClick = () => { };

  const handleFavoriteCatsClick = () => { };

  return (
    // <header id={data.name} className={classNameHeader}>
    <header className={classes.header}>
      <div className={classes.wrapper}>
        <NavLink
          className={classes.button}
          onClick={handleAllCatsClick}
          to={`/`}
        >
          все котики
        </NavLink>
        <NavLink
          className={classes.button}
          onClick={handleFavoriteCatsClick}
          to={`/favoriteCats`}
        >
          любимые котики
        </NavLink>
      </div>
    </header>
  );
};
