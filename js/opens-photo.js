// Модуль открытия модального окна для полноэкранного показа фото

// Находим элемент отображения модального окна в DOMе
const modalOpenElement = document.querySelector('.big-picture');
// Находим body элемент страницы
const bodyElement = document.querySelector('body');
// Находим элемент отображения кнопки для выхода из полноэкранного просмотра изображения
const cancelButtonElement = modalOpenElement.querySelector('.big-picture__cancel');
// Находим элемент фото в модальном окне
const imgOpenSrc = modalOpenElement.querySelector('.big-picture__src');


// Функция операций при закрытии модального окна

const closeModal = () => {
  // Добавляем класс скрытия окна
  modalOpenElement.classList.add('hidden');
  // Удалям класс открытия окна
  bodyElement.classList.remove('modal-open');
  // Удалям обработчик события нажатия кнопки Escape
  document.removeEventListener('keydown', onDocumentKeydown);
  //Удаляем ссылку на фото в окне
  imgOpenSrc.src = "";
};

// Функция закрытия модального окна при нажатии кнопки Escape

function onDocumentKeydown(evt) {
  // Если нажата кнопка Escape
  if (evt.key === 'Escape') {
    // Отменяем действия браузера по умолчанию
    evt.preventDefault();
    // Вызываем функцию закрытия модального окна
    closeModal();
  }
}

// Функция исполнения закрытия модального окна

const onCancelButtonClick = () => closeModal();

// Функция заполнения свойств элемента информацией об открываемой в модальном окне фотографии

// Принимает объект с инфомацией об изображении
const renderPicturesDetalis = (url) => {
  // Находим элемент ссылки на фото в DOM и записываем туда реальную ссылку на фото
  modalOpenElement.querySelector('.big-picture__img img').src = url;
};

// Функция открытия модального окна

const openModal = (url) => {
  // Удаляем класс скрытия окна
  modalOpenElement.classList.remove('hidden');
  // Добавляем класс открытия окна
  bodyElement.classList.add('modal-open');
  // Добавляем обработчик события нажатия кнопки Escape для закрытия окна
  document.addEventListener('keydown', onDocumentKeydown);
  // Вызываем функцию заполнения свойств элемента информацией об открываемой в модальном окне фотографии
  renderPicturesDetalis(url);
};

// Добавляет обработчик события click на кнопку закрытия модального окна
cancelButtonElement.addEventListener('click', onCancelButtonClick);

export { openModal };
