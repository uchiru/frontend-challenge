//Модуль входа JS
import './nav.js';
import {getPhotos} from './api.js';

const screen = document.querySelector('.imgrid');

window.innerHeight = window.innerHeight;
window.innerWidth = window.innerWidth
console.log(innerHeight, innerWidth);
window.quantityPhoto = Math.round(innerWidth/270 * innerHeight/250 * 2);
console.log(quantityPhoto);
screen.style.height = `${Math.round(innerHeight/1.37)}px`;
const h = screen.style.height;
console.log(h);
//Назначаем глобальную переменную url_req и назначаем первичную ссылку запроса
window.url_req = `https://api.thecatapi.com/v1/images/search?limit=${quantityPhoto}`;
//Назначаем глобальную переменную butt и назначаем кнопку меню по умолчанию
window.butt = 0;
//Определяем ключ доступа к серверу по умолчанию
const api_cat_key = "live_kXTx0E9DJ26u2DwO7B01hqaoICxQkHH4RPv3CQVbN9VImBylpJGLJc5oVjIWv97d";
//Выводим 20 случайных фото кошек
getPhotos(url_req, butt, api_cat_key);
