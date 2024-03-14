//Модуль смены фильтров выборки фото
import { getPhotos } from './api.js';
import { breedsRequest } from './breeds.js';
import { removeAllPhotos } from './clear.js';

//Находим группу фильтров
const navFilters = document.querySelector('.filters__nav');
//Создаём массивоподобную коллекцию классов фильтров
const filters = navFilters.querySelectorAll('.filters__button');
//Находим кнопку загрузить ещё 10 фото
const more = document.querySelector('.more__button');
//Определяем ключ доступа к серверу для кошек
const api_cat_key = "live_kXTx0E9DJ26u2DwO7B01hqaoICxQkHH4RPv3CQVbN9VImBylpJGLJc5oVjIWv97d";
//Определяем ссылку для запроса 20 случайных фото котиков с сервера
const cat_url = 'https://api.thecatapi.com/v1/images/search?limit=20';
//Определяем ссылку для запроса 10 случайных фото котиков с сервера
const cat_url_10 = 'https://api.thecatapi.com/v1/images/search?limit=10';
//Определяем ссылку для запроса фото любимых котиков
const cat_fav_url = 'https://api.thecatapi.com/v1/favourites';
//Определяем ключ доступа к серверу для собак
const api_dog_key = "live_mkkpPYTw0j96885AhwACtyennan2hLUoAMhdtr6f4buYORCuCt8WNeRq8JLggurg";
//Определяем ссылку для запроса 20 случайных фото собачек с сервера
const dog_url = 'https://api.thedogapi.com/v1/images/search?limit=20';
//Определяем ссылку для запроса 10 случайных фото собачек с сервера
const dog_url_10 = 'https://api.thedogapi.com/v1/images/search?limit=10';
//Определяем ссылку для запроса фото любимых собачек
const dog_fav_url = 'https://api.thedogapi.com/v1/favourites';
//Находим кнопку вывода выбранной породы собачек
const breedButton = document.querySelector('.filters__button--breed');
//Находим кнопку вывода выбранной породы котиков
const catBreedButton = document.querySelector('.filters__button--cat_breed');
//Находим селектор выбора породы собачек
const breedDogSelector = document.querySelector('.dog_breed_selector');
//Находим селектор выбора породы котиков
const breedCatSelector = document.querySelector('.cat_breed_selector');
//Определяем адрес для запроса имеющихся пород собачек
const breedsDogUrl = 'https://api.thedogapi.com/v1/breeds';
//Определяем адрес для запроса имеющихся пород котиков
const breedsCatUrl = 'https://api.thecatapi.com/v1/breeds';
//Определяем ключ api по умолчанию
let api_key =  api_cat_key;

//Запускаем функцию запроса и вывода в select доступных пород котиков
breedsRequest(breedsCatUrl, api_cat_key, breedCatSelector);

//Запускаем функцию запроса и вывода в select доступных пород собачек
breedsRequest(breedsDogUrl, api_dog_key, breedDogSelector);

//При нажатии кнопки вывода фото выбранной породы собачек
breedButton.onclick = () => {
  //Определяем Id породы нажатой кнопки
  let breedIds = breedDogSelector.options[breedDogSelector.selectedIndex].value;
  //Формируем ссылку запроса до 100 случайных фото выбраной породы
  url_req = `https://api.thedogapi.com/v1/images/search?limit=100&breed_ids=${breedIds}`;
};

//При нажатии кнопки вывода фото выбранной породы котиков
catBreedButton.onclick = () => {
  //Определяем Id породы нажатой кнопки
  let catBreedIds = breedCatSelector.options[breedCatSelector.selectedIndex].value;
  //Формируем ссылку запроса до 100 случайных фото выбраной породы
  url_req = `https://api.thecatapi.com/v1/images/search?limit=100&breed_ids=${catBreedIds}`;
};

//Функция смены активного элемента фильтра
const changeActivFilter = (num) => {
  //Для всех ссылок на фильтры
  for (let filters__button of filters) {
    //Удаляем класс активного фильтра
    filters__button.classList.remove('filters__button--active')
  }
  //Добавляем класс активного фильтра для кликнутого фильтра
  filters[num].classList.add('filters__button--active');
  //Удаляем все загруженные фото 
  removeAllPhotos();
  //Если нажата кнопка №0
  if (num === 0) {
    //Меняем ссылку на котиков
    url_req = cat_url;
    butt = num;
    api_key = api_cat_key;
    //Выводим 20 случайных фото с котиками
    getPhotos(cat_url, butt, api_cat_key);
  };
  //Если нажата кнопка №1
  if (num === 1) {
    butt = num;
    api_key = api_cat_key;
    //Меняем ссылку на любимых котиков
    url_req = cat_fav_url;
    //Выводим 20 любимых фото котиков
    getPhotos(cat_fav_url, butt, api_cat_key);
  };
  //Если нажата кнопка №2
  if (num === 2) {
    butt = num;
    api_key = api_cat_key;
    //Выводим 20 случайных фото с котиками выбранной породы
    getPhotos(url_req, butt, api_cat_key );
  };
  //Если нажата кнопка №3
  if (num === 3) {
    butt = num;
    api_key = api_dog_key;
    //Меняем ссылку на собачек
    url_req = dog_url;
    //Выводим 20 случайных фото с собачками
    getPhotos(dog_url, butt, api_dog_key);
  };
  //Если нажата кнопка №4
  if (num === 4) {
    butt = num;
    api_key = api_dog_key;
    //Меняем ссылку на любимых собачек
    url_req = dog_fav_url;
    //Выводим 20 любимых фото собачек
    getPhotos(dog_fav_url, butt, api_dog_key);
  };
  //Если нажата кнопка №5
  if (num === 5) {
    butt = num;
    api_key = api_dog_key;
    //Выводим 20 случайных фото с собачками выбранной породы
    getPhotos(url_req, butt, api_dog_key );
  };
  
}

//Колбэк функция переключения активного фильтра на кликнутую группу
//Для каждого элемента массивоподобной коллекции фильтров фото
filters.forEach((button, namber) => {
  //При клике на любой фильтр фото получаем индекс кликнутого пункта меню
  button.addEventListener('click', () => {
  //Запускаем функцию смены активного фильтра
  changeActivFilter(namber);
  })
})

//Отслеживаем нажатие кнопки "показать ещё 10 фоток"
more.addEventListener('click', () => {
  //При нажатии запускаем функцию загрузки 10 фоток
  if(url_req === dog_url) url_req = dog_url_10;
  if(url_req === cat_url) url_req = cat_url_10;
  getPhotos(url_req, butt, api_key);
  //Прокручиваем окно вывода
  document.querySelector('.imgrid').scrollTop = document.querySelector('.imgrid').scrollHeight;
})