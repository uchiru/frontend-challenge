import { classes } from './CatsPage.module.scss';
import { useState, useEffect } from 'react';
import { Cat } from './components';

export const CatsPage = () => {

  const [catsData, setCatsData] = useState();



  // Функция для получения 10 фотографий кошек
  const getCatImages = () => {
    fetch("https://api.thecatapi.com/v1/images/search?limit=10") // Используем параметр limit=10 для получения 10 фотографий
      .then(response => response.json()) // Преобразуем ответ в JSON формат
      .then(data => {
        setCatsData(data);
        // console.log(data); // Выводим данные в консоль
        // Здесь вы можете обработать полученные данные, например, отобразить их на странице
      })
      .catch(error => console.log('error', error)); // Обрабатываем возможные ошибки
  };

  // Вызываем функцию для получения фотографий кошек
  useEffect(() => {
    getCatImages();
  }, []);

  useEffect(() => {
    console.log(catsData);
  }, []);


  if (catsData) return (
    <main>
      Котики
      {/* <div className={classes.wrapper}> */}
      <div>
        {/* <ul className={classes.list}> */}
        <ul>
          {Object.values(catsData).map((cat, index) => (
            <li
              // className={classes.listItem}

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
