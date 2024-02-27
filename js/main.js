//Модуль входа JS
import './nav.js';
import {getPhotos} from './api.js';

//Определяем url по умолчанию
const url = 'https://api.thecatapi.com/v1/images/search?limit=20';
//Определяем ключ доступа к серверу для кошек  по умолчанию
const api_cat_key = "live_kXTx0E9DJ26u2DwO7B01hqaoICxQkHH4RPv3CQVbN9VImBylpJGLJc5oVjIWv97d";

//Выводим 20 случайных фото кошек
getPhotos(url, 0, api_cat_key);
