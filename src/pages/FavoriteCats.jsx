import React from 'react';
import Header from '../components/Header';
import CatsList from '../components/CatsList';

function FavoriteCats({ cats }) {
  return (
    <div>
      <Header/>
      <CatsList cats={cats}/>
    </div>
  );
}

export default FavoriteCats;