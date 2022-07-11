import { getFavoriteImages, toggleLocalStorage } from '../favorite/add-to-favorite';



export default class View {
  renderImg(data, container) {
    const favoriteImages = getFavoriteImages();
    container.innerHTML = '';
    data.forEach(element => {
      const isFavorite = favoriteImages.some(image => image.url === element.url)
      const component = createImgElement(element.url, isFavorite);
      container.append(component);
    });
  }
}
const createImgElement = (template, isFavorite) => {
  const newElement = document.createElement(`div`);
  newElement.classList.add('main__image');
  const image = new Image();
  image.src = template;
  newElement.append(image)
  createButton(newElement, isFavorite);
  return newElement
};

const createButton = (element, isFavorite) => {
  const button = document.createElement(`button`);
  button.setAttribute('type', 'button');
  isFavorite ? button.classList.add('favorite', 'main__button') : button.classList.add('main__button');
  button.classList.add('main__button');
  button.addEventListener('click', toggleLocalStorage)
  element.append(button);
  return element;
}
