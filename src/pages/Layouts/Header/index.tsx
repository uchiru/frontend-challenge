import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import { navLinks } from "@/app/consts";

export const Header = () => {
  return (
    <header className={styles.Header}>
      <nav className={styles.Nav}>
        <ul className={styles.List}>
          {navLinks.map((link) => (
            <li key={link.name} className={styles.ListElement}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? `${styles.Link} ${styles.Active}` : styles.Link
                }
                to={link.to}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
