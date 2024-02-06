import classes from './FavoriteCats.module.scss';
import { useCurrentPage, useFavoriteCats } from '../../hooks';
// import { Cat } from './components';
import { Cat } from '../../components';
import {useEffect} from 'react';

export const FavoriteCatsPage = () => {
  const { favoriteCats, setFavoriteCats } = useFavoriteCats();
  const { currentPage, setCurrentPage } = useCurrentPage();

  useEffect(() => {
    dispatch(setCurrentPage('favoriteCats'));
  }, [currentPage]);

  useEffect(() => {      
    console.log('test');
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
