//Модуль входа JS
import './nav.js';
import {getPhotos} from './api.js';

//Находим элемент вывода галереи фото
const screen = document.querySelector('.imgrid');
//Определяем ключ доступа к серверу по умолчанию
const api_cat_key = "live_kXTx0E9DJ26u2DwO7B01hqaoICxQkHH4RPv3CQVbN9VImBylpJGLJc5oVjIWv97d";

//Определяем высоту элемента вывода галереи фото исходя из высоты окна вывода приложения
screen.style.height = `${Math.ceil(window.innerHeight/1.36)}px`;
//Определяем количество запрашиваемых для вывода фото исходя из размеров окна вывода приложения
const quantityPhoto = Math.ceil(window.innerWidth/270 * window.innerHeight/270 * 1.6);
//Назначаем глобальную переменную пути запроса к серверу и определяем стартовый путь для запроса
window.url_req = `https://api.thecatapi.com/v1/images/search?limit=${quantityPhoto}`;
//Назначаем глобальную переменную кнопки и определяем кнопку меню по умолчанию
window.butt = 0;
//Выводим  расчитанное под размер окна вывода количество случайных фото кошек
getPhotos(url_req, butt, api_cat_key);
