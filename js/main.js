//Модуль входа JS
import './nav.js';
import {getPhotos} from './api.js';

//Находим элемент вывода галереи фото
const screen = document.querySelector('.imgrid');
//Определяем высоту окна вывода приложения
const innerHeight = window.innerHeight;
//Определяем ширину окна вывода приложения
const innerWidth = window.innerWidth;
//Определяем ключ доступа к серверу по умолчанию
const api_cat_key = "live_kXTx0E9DJ26u2DwO7B01hqaoICxQkHH4RPv3CQVbN9VImBylpJGLJc5oVjIWv97d";

//Определяем высоту элемента вывода галереи фото
screen.style.height = `${Math.round(innerHeight/1.36)}px`;
//Определяем количество запрашиваемых для вывода фото
const quantityPhoto = Math.ceil(innerWidth/270 * innerHeight/270 * 1.6);
console.log(quantityPhoto);
//Назначаем глобальную переменную url_req и определяем первичную ссылку для запроса
window.url_req = `https://api.thecatapi.com/v1/images/search?limit=${quantityPhoto}`;
//Назначаем глобальную переменную butt и назначаем кнопку меню по умолчанию
window.butt = 0;
//Выводим  quantityPhoto случайных фото кошек
getPhotos(url_req, butt, api_cat_key);
