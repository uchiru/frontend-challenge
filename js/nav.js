//Скрипт смены фильтров выборки фото
import { getPhotos } from './api.js';
import { removeAllPhotos } from './clear.js';

//Находим группу фильтров
const navFilters = document.querySelector('.filters__form');
//Создаём массивоподобную коллекцию классов фильтров
const filters = navFilters.querySelectorAll('.filters__button');
//Находим кнопку загрузить ещё 10 фото
const more = document.querySelector('.more__button');
//Определяем ссылку на сервер с фото кошек
const cat_url = 'https://api.thecatapi.com/v1/images/search?limit=20';
//Определяем ссылку запроса  на сервер с фото кошек породы бенгази
const cat_beng_url = 'https://api.thecatapi.com/v1/images/search?limit=20&breed_ids=beng';
const cat_manx_url = 'https://api.thecatapi.com/v1/images/search?limit=20&breed_ids=manx';
const cat_hima_url = 'https://api.thecatapi.com/v1/images/search?limit=20&breed_ids=hima';
const cat_fav_url = 'https://api.thecatapi.com/v1/favourites';
//Определяем ссылку запроса на сервер с фото собак
const dog_url = 'https://api.thedogapi.com/v1/images/search?limit=20';
const dog_afg_url = 'https://api.thedogapi.com/v1/images/search?limit=20&breed_ids=2';
const dog_akita_url = 'https://api.thedogapi.com/v1/images/search?limit=20&breed_ids=6';
const dog_malamut_url = 'https://api.thedogapi.com/v1/images/search?limit=20&breed_ids=9';
let url = cat_url;

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
  //Если нажата кнопка №1
  if (num === 0) {
    //Меняем ссылку на кошачью
    url = cat_url;
    //Выводим 20 случайных фото с кошками
    getPhotos(url, num);
  };
  //Если нажата кнопка №2
  if (num === 1) {
    //Меняем ссылку на кошачью породы бенгази
    url = cat_beng_url;
    //Выводим 20 случайных фото с кошками бенгази
    getPhotos(url, num);
  };
  //Если нажата кнопка №3
  if (num === 2) {
    //Меняем ссылку на кошачью порды манкс
    url = cat_manx_url;
    //Выводим 20 случайных фото с кошками манкс
    getPhotos(url, num);
  };
  //Если нажата кнопка №4
  if (num === 3) {
    //Меняем ссылку на кошачью породы гималайская
    url = cat_hima_url;
    //Выводим 20 случайных фото с кошками гималайская
    getPhotos(url, num);
  };
  //Если нажата кнопка №5
  if (num === 4) {
    //Меняем ссылку на любимых котиков
    url = cat_fav_url;
    //Выводим 20 любимых фото
    getPhotos(url, num);
  };
  //Если нажата кнопка №6
  if (num === 5) {
    //Меняем ссылку на собачью
    url = dog_url;
    //Выводим 20 случайных фото с собаками
    getPhotos(url, num);
  };
  //Если нажата кнопка №7
  if (num === 6) {
    //Меняем ссылку на собачью породы Афганская гончая
    url = dog_afg_url;
    //Выводим 20 случайных фото с собаками
    getPhotos(url, num);
  };
  //Если нажата кнопка №8
  if (num === 7) {
    //Меняем ссылку на собачью породы Афганская гончая
    url = dog_akita_url;
    //Выводим 20 случайных фото с собаками
    getPhotos(url, num);
  };
  //Если нажата кнопка №9
  if (num === 8) {
    //Меняем ссылку на собачью породы Афганская гончая
    url = dog_malamut_url;
    //Выводим 20 случайных фото с собаками
    getPhotos(url,num);
  };
}

//Колбэк функция переключения активного фильтра на кликнутую группу
//Для каждого элемента массивоподобной коллекции фильтров фото
filters.forEach((button, index) => {
  //При клике на любой фильтр фото получаем индекс кликнутого пункта меню
  button.addEventListener('click', () => {
  //Запускаем функцию смены активного фильтра
  changeActivFilter(index);
  })
})

//Отслеживаем нажатие кнопки "показать ещё 10 фоток"
more.addEventListener('click', () => {
  //При нажатии запускаем функцию загрузки 10 фото
  getPhotos(url);
  //Прокручиваем окно вывода
  document.getElementById('grid').scrollTop = document.getElementById('grid').scrollHeight;
})
