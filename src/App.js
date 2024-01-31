import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import style from './scss/App.module.scss';

import Home from './pages/Home';
import Love from './pages/Love';

function App() {
  const [selected, setSelected] = React.useState('');

  const go = (e) => {
    setSelected(e);
  };

  return (
    <div className={style.App}>
      <header className={style.Header}>
        <div
          className={
            selected === 'home' ? style.HeaderButtonSelected : style.HeaderButtonNoSelected
          }
          onClick={() => setSelected('home')}
        >
          <Link to="/">
            <div>
              <span>Все котики</span>
            </div>
          </Link>
        </div>

        <div
          className={
            selected === 'love' ? style.HeaderButtonSelected : style.HeaderButtonNoSelected
          }
          onClick={() => setSelected('love')}
        >
          <Link to="/Love">
            <div>
              <span>Любимые котики</span>
            </div>
          </Link>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Home id="home" go={go} />} />
        <Route path="/Love" element={<Love id="love" go={go} />} />
      </Routes>
    </div>
  );
}

export default App;
