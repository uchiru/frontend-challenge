import './nav.js';
import {getPhotos} from './api.js';

//Определяем url по умолчанию
const url = `https://api.thecatapi.com/v1/images/search?limit=10`;
//Выводим 10 случайных фото кошек
getPhotos(url);
