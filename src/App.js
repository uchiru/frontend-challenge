// import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CatsPage, FavoriteCatsPage } from './pages';
import { Header } from './components';

export const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<CatsPage />} />
          <Route path='/favoriteCats' element={<FavoriteCatsPage />} />
        </Routes>
      </Router>
    </>
  );
};
