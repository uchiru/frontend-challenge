const content = document.querySelector('.main__content');
export  function toggleLocalStorage (evt) {
  let favoriteImages = getFavoriteImages()
  let target = evt.target;
    if(target.tagName === "BUTTON") {
      if(target.classList.contains('favorite')) {
        favoriteImages = favoriteImages.filter((el) => el.url != target.previousSibling.currentSrc);
      } else {
        favoriteImages.push({url: target.previousSibling.currentSrc});
      }
      target.classList.toggle('favorite');
    }
    localStorage.setItem('images', JSON.stringify(favoriteImages) )
};

export function getFavoriteImages() {
  const favoriteImages = localStorage.getItem('images');

  if (favoriteImages !== null) {
      return JSON.parse(favoriteImages);
  }
  return [];
}
