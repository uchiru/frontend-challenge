import React from 'react';
import './App.css';
import Main from './main';
import Favorite from './favorite';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './navBar';

function App() {
  return (
    <div>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/favorite" element={<Favorite />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
