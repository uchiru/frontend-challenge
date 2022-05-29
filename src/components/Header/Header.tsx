import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.headerLink}>
        Все котики
      </Link>
      <Link to="favorites" className={styles.headerLink}>
        Любимые котики
      </Link>
    </header>
  );
};

export default Header;
