import React, { useState } from 'react';

function Cat({ id, url, addToFavorites, removeFromFavorites }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleClick = (e) => {
    if (isFavorite === false) {
      addToFavorites(id, url);
    } else {
      removeFromFavorites(id);
    }

    setIsFavorite(!isFavorite);
  }

  return (
    <div className="cat">
      <img src={url} alt="" />
      <button className={isFavorite ? 'favorite-button is-favorite': 'favorite-button non-favorite'} onClick={handleClick} />
    </div>
  );
}

export default Cat;