import classes from './CatsPage.module.scss';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useCatsPage } from '../../hooks';
import { Cat } from './components';

export const CatsPage = () => {
  const dispatch = useDispatch();
  const { catsPage, getCatsPage } = useCatsPage(); 

  useEffect(() => {   
    dispatch(getCatsPage());
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
