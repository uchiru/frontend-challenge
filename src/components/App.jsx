import React, { useState } from 'react';

import {
  Routes,
  Route,
  Link,
} from 'react-router-dom';

import Home from '../pages/Home';
import FavoriteCats from '../pages/FavoriteCats';
import Header from './Header';

import './App.css';

function App() {
  const [cats, setCats] = useState([
    { id: 1, url: 'https://cdn2.thecatapi.com/images/wIFSp4brt.jpg' },
    { id: 2, url: 'https://cdn2.thecatapi.com/images/2hk.jpg' },
    { id: 3, url: 'https://cdn2.thecatapi.com/images/bhm.jpg' },
    { id: 4, url: 'https://cdn2.thecatapi.com/images/t8oArUO-L.jpg' },
  ]);

  const [favoriteCats, setFavoriteCats] = useState([]);

  const addToFavorites = (id, url) => {
    if (favoriteCats.find((cat) => cat.id === id)) {
      return;
    }

    setFavoriteCats([...favoriteCats, { id, url }]);
  };

  const removeFromFavorites = (id) => {
    setFavoriteCats(favoriteCats.filter((cat) => cat.id !== id));
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Home
              cats={cats}
              addToFavorites={addToFavorites}
              removeFromFavorites={removeFromFavorites}
            />
          }
        />
        <Route
          path="/favorite"
          element={
            <FavoriteCats
              cats={favoriteCats}
              addToFavorites={addToFavorites}
              removeFromFavorites={removeFromFavorites}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;