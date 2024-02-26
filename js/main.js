import './nav.js';
import {getPhotos} from './api.js';

//Определяем url по умолчанию
<<<<<<< HEAD
const url = `https://api.thecatapi.com/v1/images/search?limit=20`;

//Выводим 20 случайных фото кошек
=======
const url = `https://api.thecatapi.com/v1/images/search?limit=10`;
//Выводим 10 случайных фото кошек
>>>>>>> viewing
getPhotos(url);
