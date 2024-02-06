import classes from './CatsPage.module.scss';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useCatsPage, useCurrentPage } from '../../hooks';
import { Cat } from '../../components/Cat';

export const CatsPage = () => {
  const dispatch = useDispatch();
  const { catsPage, getCatsPage } = useCatsPage();
  const { currentPage, setCurrentPage } = useCurrentPage();

  useEffect(() => {
    if (currentPage !== 'favoriteCatsPage') dispatch(getCatsPage());
    dispatch(setCurrentPage('/'));
  }, [getCatsPage]);

  if (catsPage) return (
    <main>
      <div className={classes.wrapper}>
        <ul className={classes.list}>
          {catsPage.map((cat, index) => (
            <li
              className={classes.listItem}
              key={index}
            >
              <Cat cat={cat} />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};
