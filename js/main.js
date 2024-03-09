//Модуль входа JS
import './nav.js';
import {getPhotos} from './api.js';


//Назначаем глобальную переменную url_req и назначаем ссылку запроса по умолчанию
window.url_req = "https://api.thecatapi.com/v1/images/search?limit=20";
//Назначаем глобальную переменную butt и назначаем кнопку по умолчанию
window.butt = 0;
//Определяем ключ доступа к серверу по умолчанию
const api_cat_key = "live_kXTx0E9DJ26u2DwO7B01hqaoICxQkHH4RPv3CQVbN9VImBylpJGLJc5oVjIWv97d";
//Выводим 20 случайных фото кошек
getPhotos(url_req, butt, api_cat_key);
