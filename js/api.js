const getPhotos = (url) => {
  //Находим кнопку загрузить ещё 10 фото
  const button = document.querySelector('.more__button');
  //Определяем ключ доступа
  const api_key = "live_kXTx0E9DJ26u2DwO7B01hqaoICxQkHH4RPv3CQVbN9VImBylpJGLJc5oVjIWv97d";
  // Запускаем метод fetch и передаём ему путь обращения, объект настроек с дополнительным параметром ключ доступа
  fetch(url,{headers: {'x-api-key': api_key}})
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
      //Для каждого элемента массива ImageData методом map выполним функцию
      imagesData.map((imageData) => {
        //Создадим тег img в переменной
        let image = document.createElement('img');
        //Запишем в атрибуд src тега img ссылку на фото из параметра url объекта массива
        image.src = `${imageData.url}`;
        //Создадим тег div в переменной
        let gridCell = document.createElement('div');
        //Добавим тегу div класс col
        gridCell.classList.add('col');
        //Вложим в тег div тег img
        gridCell.appendChild(image);
        //Добавим в DOM собранный тег div в родительский элемент с id=grid
        document.getElementById('grid').appendChild(gridCell);
      });
    })
    //В случае прихода ошибки с сервера (или перехода в состояние  rejected из-за сверхлимитной задержки ответа сервера) вызываем метод catch и выводим ошибку в консоль
    .catch(function(error) {
      console.log(error);
    });
    button.click();
}

export {getPhotos};