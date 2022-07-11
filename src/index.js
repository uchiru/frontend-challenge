import "./styles/index.scss";
import Api from './api/api';
import View from './view/view';
import ImagesModel from './imagesModel/imagesModel';
import { CatsRequest } from './utils/const';
import {getFavoriteImages} from './favorite/add-to-favorite';
const footer = document.querySelector('.footer');
const footerText = document.querySelector('.footer__text');
const content = document.querySelector('.main__content');
const favorite = document.querySelector('.favorite-item');
const allItem = document.querySelector('.all-item');

let nextPage = 1;
const ImgView = new View()
const ImageModel = new ImagesModel;

allItem.addEventListener('click', showAllImages);
favorite.addEventListener('click', showFavorites);

function showFavorites(event) {
  event.preventDefault();
  footer.innerHTML='';
  allItem.classList.remove('header-item--active');
  favorite.classList.add('header-item--active');
  const imagesLocalStorage = getFavoriteImages();
  if(imagesLocalStorage.length === 0){
    content.innerHTML = `<div>У вас еще нет любимых котиков!</div>`
  } else {
    ImgView.renderImg (imagesLocalStorage, content)
  }
}

function showAllImages(evt) {
  evt.preventDefault();
  favorite.classList.remove('header-item--active');
  allItem.classList.add('header-item--active');
  ImgView.renderImg((ImageModel.getImages()), content);
  footer.append(footerText);
  imageObserver.observe(footerText);
}

const imageObserver = new IntersectionObserver (
  ([entry], observer) => {
    async function getData () {
      return await Api.get(CatsRequest.BASEURL + `&page=${nextPage}`, CatsRequest.HEADERS);    }
    getData()
    .then((data => ImageModel.setImages(data)))
    .then(() => ImgView.renderImg((ImageModel.getImages()), content))
    .then(() => nextPage++)
  },
);
imageObserver.observe(footerText);
