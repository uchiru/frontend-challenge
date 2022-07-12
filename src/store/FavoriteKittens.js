import {makeAutoObservable, configure} from 'mobx';

export default class FavoriteKittens {
  constructor() {
    this.favorites = [];
    makeAutoObservable(this);
  };

  setFavorites(items) {
    this.favorites = items;
  };

  get items() {
    return this.favorites;
  };

  addToFavorites(item) {
    this.favorites.push(item);
    this.updateLocalStorage();
  };

  removeFromFavorites(id) {
    this.favorites = this.favorites.filter((item) => item.id !== id);
    this.updateLocalStorage();
  };

  updateLocalStorage() {
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }
};

configure({
  useProxies: 'never',
});
