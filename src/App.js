import { Routes, Route } from 'react-router-dom';
import { Cats } from 'pages/Cats'
import { FavoriteCats } from 'pages/FavoriteCats'

export const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Cats />} />
        <Route path='/favoriteCats' element={<FavoriteCats />} />      
      </Routes>
    </>
  );
};
