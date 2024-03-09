// Находим body элемент страницы
const bodyElement = document.querySelector('body');
// Находим элемент отображения модального окна в DOMе
const modalOpenElement = document.querySelector('.big-picture');


// Функция операций при закрытии модального окна

const closeModal = () => {
    // Добавляем класс скрытия окна
    modalOpenElement.classList.add('hidden');
    // Удалям класс открытия окна
    bodyElement.classList.remove('modal-open');
    // Удалям обработчик события нажатия кнопки Escape
    document.removeEventListener('keydown', onDocumentKeydown);
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

// Функция окрытия модального окна с полноразмерным кликнутым фото

const openModal = () => {
    // Удаляем класс скрытия окна
    modalOpenElement.classList.remove('hidden');
    // Добавляем класс открытия окна
    bodyElement.classList.add('modal-open');
    // Добавляем обработчик события нажатия кнопки Escape для закрытия окна
    document.addEventListener('keydown', onDocumentKeydown);   
};

export { openModal };