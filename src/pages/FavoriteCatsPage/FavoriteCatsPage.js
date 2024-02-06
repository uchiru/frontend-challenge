import classes from './FavoriteCats.module.scss';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useCurrentPage, useFavoriteCats } from '../../hooks';
// import { Cat } from './components';
import { Cat } from '../../components';

export const FavoriteCatsPage = () => {
  const dispatch = useDispatch();
  const { favoriteCats, setFavoriteCats } = useFavoriteCats();
  const { currentPage, setCurrentPage } = useCurrentPage();

  useEffect(() => {
    dispatch(setCurrentPage('favoriteCatsPage'));
  }, [currentPage]);

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
