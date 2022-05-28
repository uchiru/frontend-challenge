const catsContainer = document.querySelector('.cats');

const createFavoriteButton = () => {
  const favoriteButtonElement = document.createElement('div');
  favoriteButtonElement.classList.add('favorite-button');
  favoriteButtonElement.classList.add('non-favorite');
  return favoriteButtonElement;
}

const createCatCard = (image) => {
  const cardElement = document.createElement('div');
  const catImageElement = document.createElement('img');
  const favoriteButtonElement = createFavoriteButton();
  cardElement.classList.add('cat');
  cardElement.classList.add('shadow');
  catImageElement.src = image;
  cardElement.appendChild(catImageElement);
  cardElement.appendChild(favoriteButtonElement);
  catsContainer.appendChild(cardElement);
}

createCatCard("https://cdn2.thecatapi.com/images/bn1.jpg");
