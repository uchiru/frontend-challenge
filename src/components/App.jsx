import React from 'react';

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
  const cats = [
    { id: 1, url: 'https://cdn2.thecatapi.com/images/wIFSp4brt.jpg' },
  ];
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home cats={cats}/>}/>
        <Route path="/favorite" element={<FavoriteCats cats={cats}/>}/>
      </Routes>
    </div>
  );
}

export default App;