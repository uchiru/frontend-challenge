import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useRef } from 'react';

function Cat({ id, url, isFavorite, toggleFavorites }) {
  const [displayFavorite, setDisplayFavorite] = useState('none');
  const location = useLocation();
  const catRef = useRef();
  const favoriteButtonRef = useRef();

  let className = 'favorite-button' + (isFavorite ? ' is-favorite': ' non-favorite');

  const handleClick = (e) => {
    toggleFavorites(id);
  }

  const onFavoritePage = () => location.pathname === '/favorite';

  const showHurt = () => onFavoritePage() ? setDisplayFavorite('block') : null;
  const hideHurt = () => onFavoritePage() ? setDisplayFavorite('none') : null;

  return (
    <div ref={catRef} className="cat" onMouseOver={showHurt} onMouseLeave={hideHurt}>
      <img src={url} alt="" />
      <button
        ref={favoriteButtonRef}
        className={className}
        onClick={handleClick}
        style={{display: onFavoritePage() ? displayFavorite : 'block'}}
      />
    </div>
  );
}

export default Cat;