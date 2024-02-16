import './App.css';
import Header from '../Header/Header';
import { Routes, Route, useLocation } from "react-router-dom";
import CatsCardList from '../CatsCardList/CatsCardList';
import SavedCats from '../SavedCats/SavedCats';

function App() {

  const { pathname } = useLocation();

  const header =
    pathname === "/" ||
    pathname === "/saved-cats";

  return (
    <div className="page">
      {header && (
          <Header/>
      )}
      <Routes>
        <Route path='/' element={
          <CatsCardList/>
        }/>
        <Route path='/saved-cats' element={
          <CatsCardList/>
        }/>
      </Routes>
    </div>
  );
}

export default App;
