//Модуль общения с сервером и вывода полученных данных
//Функция формирования запросов к серверу и обработки полученных данных, используя API сервиса
const getPhotos = (url, num, api_key) => {
  
  //Находим узел списка фоток
  const list = document.querySelector('.imgrid');
  //Создаём живую коллекцию из элементов списка фоток
  let listItems = list.childNodes;

  // Запускаем метод fetch и передаём ему путь обращения, объект настроек с дополнительным параметром и ключ доступа
  fetch(url,{headers: {"content-type": "application/json", 'x-api-key': api_key}})
    // Возвращаем объект promise с будущим ответом сервера и, если он придёт успешно (зарезолвится), вызываем метод then и передаём ему колбэк с объектом ответа response
    .then((response) => {
    // Проверяем свойство объекта ответа сервера .ок и если оно false
    if (!response.ok) {
      // Бросаем ошибку запроса (исключение) к серверу, выводим текст ошибки и переходим в секцию catch
      throw new Error(`Ошибка сервера: ${response.status} - ${response.statusText} попробуйте позже`);
    }
    // Возвращаем результат выполнения метода json к данным ответа сервера (т.е. преобразуем строку с данными json в объект js - десерализуем/распарсим)
    return response.json();
    })
    // Возвращаем объект promise с будущим ответом сервера и, если он придёт успешно (зарезолвится), вызываем метод then и передаём ему объект ответа data
    .then((data) => {
      //Копируем полученные данные в рабочий массив
      let imagesData = data;
      //Для каждого элемента массива ImageData методом map выполним функцию
      imagesData.map((imageData) => {
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
          };
        //Добавляем атрибут title тегу img фото
        image.title = "Добавить/убрать в/из любимые";
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
        //Добавим в DOM собранный тег div в родительский элемент с id=grid
        document.getElementById('grid').appendChild(gridCell);
      });
   
    //Удаляем/добавляем кликнутое фото из выведенных на экран в любимые
    //Для каждого элемента коллекции фото
    listItems.forEach((photo, index) => {
      //При клике на фото получаем индекс кликнутой фотки
      photo.addEventListener('click', () => {
        //Если фото в любимых и мы находимся в разделе любимые, удалем фото из любимых
        if(listItems[index].querySelector('.favorite').alt == "favorite_photo" && (num == 1 || num == 4)) {
          //Меняем иконку на убрано из любимых
          listItems[index].querySelector('.favorite').src = './images/favorite_border.svg';
          //Сохраняем id кликнутой фотки 
          const favouriteId = listItems[index].querySelector('.photo').id;
          //Меняем атрибут alt на случайное фото
          listItems[index].querySelector('.favorite').alt = "random_photo";
          //Удаляем из DOM убираемое из любимых фото
          //list.removeChild(listItems[index]);
          //Если мы находимся в разделе любимые котики, удаляем из любимых котиков
          if(num == 1) {
            //Отправляем на сервер запрос на удаление из любимых фото котиков
            fetch(`https://api.thecatapi.com/v1/favourites/${favouriteId}`, 
              {
                method: 'DELETE',
                headers: {"content-type": "application/json", "x-api-key": api_key},
                redirect: 'follow'
              }
            )
            .then(response => console.log(response.text()))
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
          }
          //Если мы находимся в разделе любимые собачки, удаляем из любимых собачек
          if(num == 4) {
            //Отправляем на сервер запрос на удаление из любимых фото собачек
            fetch(`https://api.thedogapi.com/v1/favourites/${favouriteId}`, 
              {
                method: 'DELETE',
                headers: {"content-type": "application/json", "x-api-key": api_key},
                redirect: 'follow'
              }
            )
            .then(response => console.log(response.text()))
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
          }

        } else
        //Если фото не в любимых и мы не находимся в разделе любимые добавляем фото в любимые
        if(listItems[index].querySelector('.favorite').alt == "random_photo" && num !== 1 && num !== 4) {
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
          if(num == 0 || num == 2) {
            fetch("https://api.thecatapi.com/v1/favourites", 
              {
                method: 'POST',
                headers: {"content-type": "application/json", "x-api-key": api_key},
                body: rawBody
              }
            )
            .then(response => console.log(response.text()))
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
          }
          //Отправляем на сервер запрос о добавлении в любимые фото собачки
          if(num == 3 || num == 5) {
            fetch("https://api.thedogapi.com/v1/favourites", 
              {
                method: 'POST',
                headers: {"content-type": "application/json", "x-api-key": api_key},
                body: rawBody
              }
            )
            .then(response => console.log(response.text()))
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
          }
        }
      })
    })
  })
}

export {getPhotos};