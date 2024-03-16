//Модуль общения с сервером и вывода полученных данных в DOM

import { openModal } from './opens-photo.js';

//Находим узел списка фоток
const list = document.querySelector('.imgrid');
//Находим кнопку загрузить ещё 10 фото
const more = document.querySelector('.more__button');
//Находим кнопку Сохранить фото
const btn = document.querySelector('.big-picture__download');
//Находим полноэкранноое изображение в модальном окне
const srcImg = document.querySelector('.big-picture__src');
//Создаём живую коллекцию из элементов списка фоток
let listItems = list.childNodes;
//Назначаем переменную для передачи типа нажатой иконки
let type;


//Функция формирования запросов к серверу и обработки полученных данных, используя API сервисов
const getPhotos = (url_req, num, api_key) => {
  // Запускаем метод fetch и передаём ему путь обращения, объект настроек с дополнительным параметром и ключ доступа
  fetch(url_req,{headers: {"content-type": "application/json", 'x-api-key': api_key}})
  // Возвращаем объект promise с будущим ответом сервера и, если он придёт успешно (зарезолвится), вызываем метод then и передаём ему колбэк с объектом ответа response
  .then((response) => {
  // Проверяем свойство объекта ответа сервера .ок и если оно false
  if (!response.ok) {
    // Бросаем ошибку запроса (исключение) к серверу, выводим текст ошибки и переходим в секцию catch
    throw new Error(`Ошибка сервера: ${response.status} - ${response.statusText}, попробуйте позже`);
  }
  // Возвращаем результат выполнения метода json к данным ответа сервера (т.е. преобразуем строку с данными json в объект js - десерализуем/распарсим)
  return response.json();
  })
  // Возвращаем объект promise с будущим ответом сервера и, если он придёт успешно (зарезолвится), вызываем метод then и передаём ему объект ответа data
  .then((data) => {
    //Копируем полученные данные в рабочий массив
    let imagesData = data;
    
    //Запускаем функцию вывода в DOM группы фото по полученным данным
    photoRender(imagesData);
    //Запускаем функцию логики показа кнопки "показать ещё 10 фоток"
    moreButton(more, imagesData);
    //Запускаем функцию добавления/удаления фото в любимые/из любимых
    likeMove(num, api_key);
  })
}

//Функция логики показа кнопки "показать ещё 10 фоток"
const moreButton = (more, imagesData) => {
  //Если в массиве меньше 10 фото, то скрываем кнопку "показать ещё 10 фоток"
  if(imagesData.length < 10) more.classList.add('hidden');
  //Если в массиве 20 фото или меньше и находимся не в разделах случайные фото, то скрываем кнопку "показать ещё 10 фоток"
  if(imagesData.length <= 20 && (butt != 0 && butt != 3)) more.classList.add('hidden');
  //Если находимся в разделах любимые, то скрываем кнопку "показать ещё 10 фоток"
  if(butt != 0 || butt != 3) more.classList.add('hidden');
  //Если находимся в разделах случайные, то показываем кнопку "показать ещё 10 фоток"
  if(butt == 0 || butt == 3) more.classList.remove('hidden');
}

//Функция вывода в DOM группы фото по данным полученного массива данных о фото 
  const photoRender = (arrayData) => {
  //Для каждого элемента массива arrayData методом map выполним функцию формирования элемента с фото
  arrayData.map((imageData) => {photoData(imageData)})};

//Функция формирования элемента с фото
const photoData = (imageData) => {
  //Создадим в переменной тег img для вывода скачанного фото 
  let image = document.createElement('img');
  //Создадим в переменной тег img для вывода иконки like
  let favorite = document.createElement('img');
  //Добавим тегу img для вывода скачанного фото класс
  image.classList.add('photo');
  //Запишем в атрибуты тега img идидентификатор фото из параметра id и src ссылку на фото из параметра url объекта фото
  image.id = `${imageData.id}`;
  //Если данные о любимых фото
  if(imageData.image_id) {
    //Добавим ссылку на любимое фото
    image.src = `${imageData.image.url}`;
    //Добавим ссылку на иконку любимого фото
    favorite.src = './images/favorite.svg';
    //Добавим идентификатор любимое фото
    favorite.alt = "favorite_photo";
  }
    //Если данные о случайных фото
    else {
      //Добавим ссылку на случайное фото
      image.src = `${imageData.url}`;
      //Добавим ссылку на иконку случайного фото
      favorite.src = './images/favorite_border.svg';
      //Добавим идентификатор случайное фото
      favorite.alt = "random_photo";
      //Добавляем атрибут title тегу img фото с описанием породы, если она есть в данных
  //Если в данных есть массив описания породы и в нём есть объект с описанимм
  if(imageData.breeds[0] && imageData.breeds[0].description) {
    //Записываем в атрибут title название породы, её описание и темперамент
    image.title = `${imageData.breeds[0].name}:  ${imageData.breeds[0].description} Temperament: ${imageData.breeds[0].temperament}.`;
          //Если в данных есть массив описания породы и в нём есть объект с применением породы
  } else if(imageData.breeds[0] && imageData.breeds[0].bred_for) {
            //Записываем в атрибут title название породы, её применение и темперамент
            image.title = `${imageData.breeds[0].name}:  ${imageData.breeds[0].bred_for}. Temperament: ${imageData.breeds[0].temperament}.`;
            //Если в данных есть массив описания породы и в нём есть объект с группой породы
          } else if(imageData.breeds[0] && imageData.breeds[0].breed_group) {
                      //Записываем в атрибут title название породы, её группу и темперамент
                      image.title = `${imageData.breeds[0].name}:  ${imageData.breeds[0].breed_group} Temperament: ${imageData.breeds[0].temperament}.`;
                    } else image.title = "Нет данных о породе";
    };
  //Добавим тегу иконки класс favorite
  favorite.classList.add('favorite');
  //Создадим тег div в переменной
  let gridCell = document.createElement('div');
  //Добавим тегу div класс col
  gridCell.classList.add('col');
  //Добавим в тег div тег img фото
  gridCell.appendChild(image);
  //Добавим в тег div тег img иконки
  gridCell.appendChild(favorite);
  //Добавим в DOM собранный тег div в родительский элемент
  document.querySelector('.imgrid').appendChild(gridCell);
}

//Функция удаляения/добавления кликнутого фото из выведенных на экран из/в любимые
const likeMove = (num, api_key) => {listItems.forEach((photo, index) => {likeMoveOperations(photo, index, num, api_key)})};

//Функция операцию при удалении/добвления из/в любимые
const likeMoveOperations = (photo, index, num, api_key) => {
  //При клике на фото получаем индекс кликнутой фотки
  photo.addEventListener('click', () => {
    //Если фото в любимых,мы находимся в разделе любимые и нажата иконка "в любимых", удалем фото из любимых
    if(listItems[index].querySelector('.favorite').alt == "favorite_photo" && (num == 1 || num == 4) && type === "favorite_photo") {
      //Меняем иконку на убрано из любимых
      listItems[index].querySelector('.favorite').src = './images/favorite_border.svg';
      //Сохраняем id кликнутой фотки 
      const favouriteId = listItems[index].querySelector('.photo').id;
      //Меняем атрибут alt на случайное фото
      listItems[index].querySelector('.favorite').alt = "random_photo";
      //Удаляем из DOM убираемое из любимых фото
      //list.removeChild(listItems[index]);
      //Если мы находимся в разделе любимые котики, удаляем из любимых котиков
      if(num == 1) likeRequest('DELETE', `https://api.thecatapi.com/v1/favourites/${favouriteId}`, api_key);
      //Если мы находимся в разделе любимые собачки, удаляем из любимых собачек
      if(num == 4) likeRequest('DELETE', `https://api.thedogapi.com/v1/favourites/${favouriteId}`, api_key);
    } else
    //Если фото не в любимых, мы не находимся в разделе любимые и нажата иконка "не в любимых"
    if(listItems[index].querySelector('.favorite').alt == "random_photo" && num !== 1 && num !== 4 && type === "random_photo") {
      //Меняем иконку на добавлено в любимые
      listItems[index].querySelector('.favorite').src = './images/favorite.svg';
      //Меняем атрибут alt на любимое фото
      listItems[index].querySelector('.favorite').alt = "favorite_photo";
      //Сохраняем id кликнутой фотки 
      let id = listItems[index].querySelector('.photo').id;
      //Формируем тело запроса
      let rawBody = JSON.stringify({ 
        "image_id": id        
        });
      //Отправляем на сервер запрос о добавлении в любимые фото котика
      if(num == 0 || num == 2) likeRequest('POST', "https://api.thecatapi.com/v1/favourites", api_key, rawBody);
      //Отправляем на сервер запрос о добавлении в любимые фото собачки
      if(num == 3 || num == 5) likeRequest('POST', "https://api.thedogapi.com/v1/favourites", api_key, rawBody);
    }
  })
}

//Функция запроса любимых фото
const likeRequest = (metodReq, likeUrl, apiKey, rawBody) =>  {
  fetch(likeUrl, 
  {
    method: metodReq,
    headers: {"content-type": "application/json", "x-api-key": apiKey},
    body: rawBody
  }
)}

//Функция сохранения открытого в модальном окне фото локально
const downloadImage = (imageSrc) => {
  //Создаём элемент a
  const anchorElement = document.createElement('a');
  //Добавляем элементу a атрибут href с ссылкой на загружаемое фото
  anchorElement.href = imageSrc.src;
  //Добавляем элементу a атрибут download с именем фото для сохранения
  anchorElement.download;
  //Добавляем сформированный элемент a в конец DOM
  //document.body.appendChild(anchorElement);
  //Кликаем ссылку a для запуска сохранения фото
  anchorElement.click();
  //Удаляем ссылку a из DOM
  //document.body.removeChild(anchorElement);
}

//Подписываемся на запрос локального сохраниния открытого в модальном окне фото по событию click на кнопку Сохранить
btn.addEventListener('click', () => {downloadImage(srcImg)});

// Функция окрытия модального окна с полноразмерным кликнутым фото
const onContainerClick = (evt) => {
  //По целевому событию клика ищем в кликнутом элементе атрибут с ссылкой на фото и записывам его
  const miniphoto = evt.target.src;
  //По целевому событию ищем в кликнутом элементе атрибут с типом кликнутого фото
  type = evt.target.alt;
  // Проверяем найден ли атрибут и был ли клик именно по фото
  // Если клик был не по фото или по любому сердечку завешаем работу функции и не открываем модальное окно
  if (miniphoto === undefined || type === "favorite_photo" || type === "random_photo") {return}
  // Если клик был по фото
  // Отменяем действие браузера по умолчанию для предотвращения автопрокрутки страницы в начальное положение
  evt.preventDefault();
  // Вызываем функцию открытия модального окна с искомым фото
  openModal(miniphoto);
};

// Подписываем выведенные фото на открытие модального окна с полноразмерным фото по событию click
list.addEventListener('click', onContainerClick);

export {getPhotos};