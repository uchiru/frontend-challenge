// import { Routes, Route } from 'react-router-dom';
import './scss/settings/index.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CatsPage, FavoriteCatsPage } from './pages';
import { Header } from './components';

export const App = () => {
  return (
    <div className='app'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<CatsPage />} />
          <Route path='/favoriteCats' element={<FavoriteCatsPage />} />
        </Routes>
      </Router>
    </div>
  );
};
