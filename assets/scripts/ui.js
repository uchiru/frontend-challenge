const catsContainer = document.querySelector('.cats');

export const createCatCard = (cat) => {
  const cardElement = document.createElement('div');
  const catImageElement = document.createElement('img');
  const favoriteButtonElement = createFavoriteButton(cat);
  cardElement.classList.add('cat');
  cardElement.classList.add('shadow');
  catImageElement.src = cat.url;
  cardElement.appendChild(catImageElement);
  cardElement.appendChild(favoriteButtonElement);
  catsContainer.appendChild(cardElement);
}

export const createFavoriteButton = (cat, onFavorite, onUnFavorite) => {
  const favoriteButtonElement = document.createElement('div');
  favoriteButtonElement.classList.add('favorite-button');
  favoriteButtonElement.classList.add('non-favorite');

  const toggleState = () => {
    if (favoriteButtonElement.classList.contains('non-favorite')) {
      favoriteButtonElement.classList.remove('non-favorite');
      favoriteButtonElement.classList.add('is-favorite');
      onFavorite(cat)
    }
    else if (favoriteButtonElement.classList.contains('is-favorite')) {
      favoriteButtonElement.classList.remove('is-favorite');
      favoriteButtonElement.classList.add('non-favorite');
      onUnFavorite(cat.id)
    }
  }

  favoriteButtonElement.addEventListener('click', toggleState);

  return favoriteButtonElement;
}