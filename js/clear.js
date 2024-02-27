//Модуль удаления всех выведенных в DOM фото
//функция удаления всех фото
const removeAllPhotos = () => {

const photos = document.querySelector('.imgrid');
photos.innerHTML = '';
}

export {removeAllPhotos};