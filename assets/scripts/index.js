const catsContainer = document.querySelector('.cats');

let cats = [];
let favoriteCats = [];

const createFavoriteButton = (cat) => {
  const favoriteButtonElement = document.createElement('div');
  favoriteButtonElement.classList.add('favorite-button');
  favoriteButtonElement.classList.add('non-favorite');

  const toggleState = () => {
    if (favoriteButtonElement.classList.contains('non-favorite')) {
      favoriteButtonElement.classList.remove('non-favorite');
      favoriteButtonElement.classList.add('is-favorite');
      addIntoFavorites(cat)
    }
    else if (favoriteButtonElement.classList.contains('is-favorite')) {
      favoriteButtonElement.classList.remove('is-favorite');
      favoriteButtonElement.classList.add('non-favorite');
      removeFromFavorites(cat.id)
    }
  }

  favoriteButtonElement.addEventListener('click', toggleState);

  return favoriteButtonElement;
}

function addIntoFavorites(cat) {
  favoriteCats.push(cat);
  console.log('favorite cats:', favoriteCats);
}

function removeFromFavorites(id) {
  favoriteCats = favoriteCats.filter((cat) => cat.id !== id);
  console.log('favorite cats:', favoriteCats);
}

const createCatCard = (cat) => {
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

createCatCard({ id: 'ceh', url: "https://cdn2.thecatapi.com/images/bn1.jpg"});
createCatCard({ id: 'nh', url: "https://cdn2.thecatapi.com/images/bn6.jpg"});
