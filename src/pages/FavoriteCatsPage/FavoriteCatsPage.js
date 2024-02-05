import classes from './FavoriteCats.module.scss';
import { NavLink } from 'react-router-dom';
import { useFavoriteCats } from '../../hooks/useFavoriteCats';
import { Cat } from './components';

export const FavoriteCatsPage = () => {
  const { favoriteCats, setFavoriteCats } = useFavoriteCats();

  return (
    <main>
      <div className={classes.wrapper}>
        <ul className={classes.list}>
          {Object.values(favoriteCats).map((favoriteCat, index) => (
            <li
              className={classes.listItem}
              key={index}
            >
              <Cat cat={favoriteCat} />
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
};