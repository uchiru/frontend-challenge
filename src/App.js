// import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CatsPage, FavoriteCatsPage } from './pages'

export const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<CatsPage />} />
          <Route path='/favoriteCats' element={<FavoriteCatsPage />} />
        </Routes>
      </Router>
    </>
  );
};
