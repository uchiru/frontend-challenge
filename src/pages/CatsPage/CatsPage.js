import classes from './CatsPage.module.scss';
import { useState, useEffect } from 'react';
import { Cat } from './components';
import { useCatsPage } from '../../hooks/useCatsPage';

export const CatsPage = () => {
  const startCatsData = localStorage.getItem('catsData') ? JSON.parse(localStorage.getItem('catsData')) : null;
  // const [catsPage, setCatsPage] = useState(startCatsData);

  const { catsPage } = useCatsPage();
  const state = useCatsPage();

  // const getCatsImages = () => {
  //   fetch("https://api.thecatapi.com/v1/images/search?limit=10") // Используем параметр limit=10 для получения 10 фотографий
  //     .then(response => response.json())
  //     .then(data => {
  //       setCatsPage(data);
  //       localStorage.setItem('catsData', JSON.stringify(data));
  //     })
  //     .catch(error => console.log('error', error));
  // };

  // useEffect(() => {
  //   getCatsImages();
  // }, []);

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
