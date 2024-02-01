import classes from './Header.module.scss';

export const Header = () => {
  const handleAllCatsClick = () => { };

  const handleFavoriteCatsClick = () => { };

  return (
    // <header id={data.name} className={classNameHeader}>
    <header className={classes.header}>
      <div className={classes.wrapper}>
        <button
          className={classes.button}
          onClick={handleAllCatsClick}
        >
          все котики
        </button>
        <button
          className={classes.button}
          onClick={handleFavoriteCatsClick}
        >
          любимые котики
        </button>
      </div>
    </header>
  );
};
