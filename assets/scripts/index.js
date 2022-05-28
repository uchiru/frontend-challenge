const catsContainer = document.querySelector('.cats');

const createFavoriteButton = () => {
  const favoriteButtonElement = document.createElement('div');
  favoriteButtonElement.classList.add('favorite-button');
  favoriteButtonElement.classList.add('non-favorite');

  const toggleState = () => {
    if (favoriteButtonElement.classList.contains('non-favorite')) {
      favoriteButtonElement.classList.remove('non-favorite');
      favoriteButtonElement.classList.add('is-favorite');
    }
    else if (favoriteButtonElement.classList.contains('is-favorite')) {
      favoriteButtonElement.classList.remove('is-favorite');
      favoriteButtonElement.classList.add('non-favorite');
    }
  }

  favoriteButtonElement.addEventListener('click', toggleState);

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
