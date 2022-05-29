import React from 'react';
import Header from '../components/Header';
import CatsList from '../components/CatsList';

function FavoriteCats({ cats, toggleFavorites }) {
  return (
    <div>
      <Header/>
      <CatsList cats={cats} toggleFavorites={toggleFavorites}/>
    </div>
  );
}

export default FavoriteCats;