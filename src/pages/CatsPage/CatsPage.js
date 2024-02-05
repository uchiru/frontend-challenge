import classes from './CatsPage.module.scss';
import { useState, useEffect } from 'react';
import { Cat } from './components';

export const CatsPage = () => {
  console.log(localStorage.getItem('catsData'));
  console.log(JSON.parse(localStorage.getItem('catsData')));
  const startCatsData = localStorage.getItem('catsData') ? JSON.parse(localStorage.getItem('catsData')) : null;
  const [catsData, setCatsData] = useState(startCatsData);



  const getCatsImages = () => {
    fetch("https://api.thecatapi.com/v1/images/search?limit=10") // Используем параметр limit=10 для получения 10 фотографий
      .then(response => response.json())
      .then(data => {
        setCatsData(data);
        localStorage.setItem('catsData', JSON.stringify(data));
      })
      .catch(error => console.log('error', error));
  };

  useEffect(() => {
    getCatsImages();
  }, []);

  if (catsData) return (
    <main>
      <div className={classes.wrapper}>
        <ul className={classes.list}>
          {catsData.map((cat, index) => (
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
