import classes from './FavoriteCats.module.scss';
import { useFavoriteCats } from '../../hooks';
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
  );
};
