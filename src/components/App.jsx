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
    { id: 1, url: 'https://cdn2.thecatapi.com/images/wIFSp4brt.jpg', isFavorite: false },
    { id: 2, url: 'https://cdn2.thecatapi.com/images/2hk.jpg', isFavorite: false },
    { id: 3, url: 'https://cdn2.thecatapi.com/images/bhm.jpg', isFavorite: false },
    { id: 4, url: 'https://cdn2.thecatapi.com/images/t8oArUO-L.jpg', isFavorite: false },
  ]);

  const toggleFavorites = (id) => {
    const cat = cats.find((cat) => cat.id === id);

    if (cat) {
      cat.isFavorite = !cat.isFavorite;
      setCats([...cats.slice(0, cat.id - 1), cat, ...cats.slice(cat.id)])
    }
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Home
              cats={cats}
              toggleFavorites={toggleFavorites}
            />
          }
        />
        <Route
          path="/favorite"
          element={
            <FavoriteCats
              cats={cats.filter((cat) => cat.isFavorite)}
              toggleFavorites={toggleFavorites}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;