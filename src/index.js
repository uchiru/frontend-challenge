import "./styles/index.scss";
import Api from './api/api';
import View from './view/view';
const Img = new View()
const content = document.querySelector('.main__content')
const catsRequest = {
  baseURL: 'https://api.thecatapi.com/v1/images/search?limit=15',
  headers: {
      'x-api-key': '9c2f62d7-2236-4d2d-95af-bffa62c3d4b4',
  },
};
async function getData() {
 return await Api.get(catsRequest.baseURL, catsRequest.headers)
}

getData().then((data => Img.renderImg(data, content))).then(() => {
  document.addEventListener('click', function (evt) {
    localStorage.setItem('content', evt.target);
  });
});
