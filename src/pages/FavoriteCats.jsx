import React from 'react';
import Header from '../components/Header';
import CatsList from '../components/CatsList';

function FavoriteCats({ cats, addToFavorites, removeFromFavorites }) {
  return (
    <div>
      <Header/>
      <CatsList
        cats={cats}
        addToFavorites={addToFavorites}
        removeFromFavorites={removeFromFavorites}
        favoriteAll={true}
      />
    </div>
  );
}

export default FavoriteCats;