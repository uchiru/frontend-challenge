import classes from './CatsPage.module.scss';
import { useState, useEffect } from 'react';
import { Cat } from './components';

export const CatsPage = () => {
  const [catsData, setCatsData] = useState();
  
  const getCatsImages = () => {
    fetch("https://api.thecatapi.com/v1/images/search?limit=10") // Используем параметр limit=10 для получения 10 фотографий
      .then(response => response.json()) 
      .then(data => {
        setCatsData(data);       
      })
      .catch(error => console.log('error', error)); 
  };

  useEffect(() => {
    getCatsImages();
  }, []);

  if (catsData) return (
    <main>
      Котики
      <div className={classes.wrapper}>        
        <ul className={classes.list}>   
          {Object.values(catsData).map((cat, index) => (
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
