import React, { useState } from 'react';

function Cat({ url }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const className = 'favorite-button' + (isFavorite ? ' is-favorite' : ' non-favorite');

  const handleClick = (e) => {
    setIsFavorite(!isFavorite);
  }

  return (
    <div className="cat">
      <img src={url} alt="" />
      <button className={className} onClick={handleClick} />
    </div>
  );
}

export default Cat;