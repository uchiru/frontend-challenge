import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {AllCats} from "./components/pages/AllCats";
import {FavoriteCats} from "./components/pages/FavoriteCats";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
      <App>
          <Routes>
              <Route path="/" element={<AllCats />} />
              <Route path="/favorite" element={<FavoriteCats />} />
          </Routes>
      </App>
  </BrowserRouter>
)
