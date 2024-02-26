const getPhotos = (url, num) => {
  
  //Определяем ключ доступа
  const api_key = "live_vCr6lJrQwqr6CRh8941GX1XbgylkipCMYZm2QPx8PAnmLBUlamNfFBTU3n0u3pUg";
  //Находим узел списка фоток
  const list = document.querySelector('.imgrid');
  //Создаём живую коллекцию из элементов списка фоток
  let listItems = list.childNodes;

  // Запускаем метод fetch и передаём ему путь обращения, объект настроек с дополнительным параметром ключ доступа
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
    // Возвращаем объект promise с будущим ответом сервера и, если он придёт успешно (зарезолвится), вызываем метод then и передаём ему колбэк с объектом ответа data
    .then((data) => {
      //Копируем полученные данные в рабочий массив
      let imagesData = data;
      console.log(imagesData);
      //Для каждого элемента массива ImageData методом map выполним функцию
      imagesData.map((imageData) => {
        //Создадим в переменной тег img для вывода скачанного фото 
        let image = document.createElement('img');
        image.classList.add('photo');
        //Запишем в атрибуты тега img идидентификатор фото из параметра id и src ссылку на фото из параметра url объекта массива
        image.id = `${imageData.id}`;
        //Если данные о любимых фото
        if(imageData.image_id) { image.src = `${imageData.image.url}` }
          //Если данные о случайных фото
          else { image.src = `${imageData.url}` };
        //Добавляем атрибут title тегу img
        image.title = "Добавить/убрать в/из любимые";
        //Создадим в переменной тег img для вывода иконки like
        let favorite = document.createElement('img');
        //Добавим тегу иконки класс favorite
        favorite.classList.add('favorite');
        //Запишем в атрибуд src иконки ссылку на изображение иконки и alt в зависимости от типа любимые или случайные
        if(imageData.image_id) {
          favorite.src = './images/favorite.svg';
          favorite.alt = "favorite_photo";
        } else {
          favorite.src = './images/favorite_border.svg';
          favorite.alt = "random_photo";
        };
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
   
    //Колбэк функция добавления кликнутого фото в любимые
    //Для каждого элемента массивоподобной коллекции списка фото
    listItems.forEach((photo, index) => {
      //При клике на фото получаем индекс кликнутой фотки
      photo.addEventListener('click', () => {
        //Если фото в любимых и мы находимся в разделе любимые
        if(listItems[index].querySelector('.favorite').alt == "favorite_photo" && num == 4) {
          //Меняем иконку на убрано из любимых
          listItems[index].querySelector('.favorite').src = './images/favorite_border.svg';
          //Сохраняем id кликнутой фотки 
          const favouriteId = listItems[index].querySelector('.photo').id;
          //Меняем атрибут alt на случайное фото
          listItems[index].querySelector('.favorite').alt = "random_photo";
          //Удаляем из DOM убираемое из любимых фото
          //list.removeChild(listItems[index]);
          //Отправляем на сервер запрос на удаление из любимых фото
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
        } else
        //Если фото не в любимых и мы не находимся в разделе любимые
        if(listItems[index].querySelector('.favorite').alt == "random_photo" && num !== 4) {
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
          //Отправляем на сервер данные о добавленной в любимые фото
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
      })
    })
  })
    //В случае прихода ошибки с сервера (или перехода в состояние  rejected из-за сверхлимитной задержки ответа сервера) вызываем метод catch и выводим ошибку в консоль
    .catch(error => console.log('error', error)); 
}

export {getPhotos};