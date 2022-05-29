import React from 'react';
import Header from '../components/Header';
import CatsList from '../components/CatsList';

function Home({ cats, addToFavorites, removeFromFavorites }) {
  return (
    <div>
      <Header/>
      <CatsList
        cats={cats}
        addToFavorites={addToFavorites}
        removeFromFavorites={removeFromFavorites}
      />
    </div>
  );
}

export default Home;