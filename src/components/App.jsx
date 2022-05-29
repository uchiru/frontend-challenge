import React, { useEffect, useState } from 'react';

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
  const [cats, setCats] = useState([]);

  useEffect(() => {
    async function fetchCats(page, limit) {
      let baseURL = 'https://api.thecatapi.com/v1/images/search';
      const headers = {
        headers: {
          'x-api-key': 'fe54a132-287b-4e6b-9eb1-a2174ae94c6d'
        }
      }
      const requestedURL = baseURL + `?limit=${limit}&page=${page}&order=ASC`;
      console.log(requestedURL);
      const response = await fetch(requestedURL, headers);
      let catsJSON = await response.json();
      catsJSON = catsJSON.map((cat, index) => ({...cat, isFavorite: false, _id: index}));
      setCats(catsJSON);
    }
    fetchCats(1, 15);
  }, []);

  const toggleFavorites = (id) => {
    const cat = cats.find((cat) => cat.id === id);

    if (cat) {
      cat.isFavorite = !cat.isFavorite;
      setCats([...cats.slice(0, cat._id), cat, ...cats.slice(cat._id + 1)])
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