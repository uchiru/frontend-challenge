import { createCatCard } from './ui.js';


let cats = [];
let favoriteCats = [];

function addIntoFavorites(cat) {
  favoriteCats.push(cat);
  console.log('favorite cats:', favoriteCats);
}

function removeFromFavorites(id) {
  favoriteCats = favoriteCats.filter((cat) => cat.id !== id);
  console.log('favorite cats:', favoriteCats);
}

createCatCard(
  { id: 'ceh', url: "https://cdn2.thecatapi.com/images/bn1.jpg" },
  addIntoFavorites,
  removeFromFavorites,
);

createCatCard(
  { id: 'ceh', url: "https://cdn2.thecatapi.com/images/bn6.jpg" },
  addIntoFavorites,
  removeFromFavorites,
);