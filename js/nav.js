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
const cat_url = `https://api.thecatapi.com/v1/images/search?limit=10`;
//Определяем ссылку на сервер с фото кошек породы бенгази
const cat_beng_url = 'https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng';
const cat_manx_url = 'https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=manx';
const cat_hima_url = 'https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=hima';
//Определяем ссылку на сервер с фото собак
const dog_url = `https://api.thedogapi.com/v1/images/search?limit=10`;
const dog_afg_url = `https://api.thedogapi.com/v1/images/search?limit=10&breed_ids=2`;
const dog_akita_url = `https://api.thedogapi.com/v1/images/search?limit=10&breed_ids=6`;
const dog_malamut_url = `https://api.thedogapi.com/v1/images/search?limit=10&breed_ids=9`;
let url = cat_url;

//Функция смены активного элемента фильтра
const changeActivFilter = (index) => {
  //Для всех ссылок на фильтры
  for (let filters__button of filters) {
    //Удаляем класс активного фильтра
    filters__button.classList.remove('filters__button--active')
  }
  //Добавляем класс активного фильтра для кликнутого фильтра
  filters[index].classList.add('filters__button--active');
  //Удаляем все загруженные фото 
  removeAllPhotos();
  //Если нажата кнопка №1
  if (index === 0) {
    //Меняем ссылку на кошачью
    url = cat_url;
    //Выводим 10 случайных фото с кошками
    getPhotos(url);
  };
  //Если нажата кнопка №2
  if (index === 1) {
    //Меняем ссылку на кошачью породы бенгази
    url = cat_beng_url;
    //Выводим 10 случайных фото с кошками бенгази
    getPhotos(url);
  };
  //Если нажата кнопка №3
  if (index === 2) {
    //Меняем ссылку на кошачью порды манкс
    url = cat_manx_url;
    //Выводим 10 случайных фото с кошками манкс
    getPhotos(url);
  };
  //Если нажата кнопка №4
  if (index === 3) {
    //Меняем ссылку на кошачью породы гималайская
    url = cat_hima_url;
    //Выводим 10 случайных фото с кошками гималайская
    getPhotos(url);
  };
  //Если нажата кнопка №6
  if (index === 5) {
    //Меняем ссылку на собачью
    url = dog_url;
    //Выводим 10 случайных фото с собаками
    getPhotos(url);
  };
  //Если нажата кнопка №7
  if (index === 6) {
    //Меняем ссылку на собачью породы Афганская гончая
    url = dog_afg_url;
    //Выводим 10 случайных фото с собаками
    getPhotos(url);
  };
  //Если нажата кнопка №8
  if (index === 7) {
    //Меняем ссылку на собачью породы Афганская гончая
    url = dog_akita_url;
    //Выводим 10 случайных фото с собаками
    getPhotos(url);
  };
  //Если нажата кнопка №9
  if (index === 8) {
    //Меняем ссылку на собачью породы Афганская гончая
    url = dog_malamut_url;
    //Выводим 10 случайных фото с собаками
    getPhotos(url);
  };
}

//Колбэк функция переключения активного фильтра на кликнутую группу
//Для каждого элемента массивоподобной коллекции фильтров фото
filters.forEach((filters__button, index) => {
  //При клике на любой фильтр фото получаем индекс кликнутого пункта меню
  filters__button.addEventListener('click', () => {
  //Запускаем функцию смены активного фильтра
  changeActivFilter(index);
  })
})

more.addEventListener('click', () => {
  getPhotos(url);
  document.getElementById('grid').scrollTop = document.getElementById('grid').scrollHeight;
  console.log(document.getElementById('grid').scrollHeight);
})
