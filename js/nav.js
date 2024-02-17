//Скрипт смены выборки фото

//Находим группу фильтров
const navFilters = document.querySelector('.filters__form');
//Создаём массивоподобную коллекцию классов фильтров
const filters = navFilters.querySelectorAll('.filters__button');

//Функция смены активного элемента фильтра
const changeActivFilter = (index) => {
  //Для всех ссылок на фильтры
  for (let filters__button of filters) {
    //Удаляем класс активного фильтра
    filters__button.classList.remove('filters__button--active')
  }
  //Добавляем класс активного фильтра для кликнутого фильтра
  filters[index].classList.add('filters__button--active')
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