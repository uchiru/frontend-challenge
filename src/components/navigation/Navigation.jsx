import React, {useState} from 'react';
import {observer} from 'mobx-react-lite';

import KittensList from '../general list/KittensList';
import FavoriteKittensList from '../favorite list/FavoriteKittensList';
import './Navigation.scss';

const Navigation = observer(() => {
  const [activeTab, setActiveTab] = useState('all');

  const handleTabAll = () => {
    setActiveTab('all');
  };
  const handleTabFavorites = () => {
    setActiveTab('favorites');
  };

  return (
    <header className='header'>
      <div className='container'>
        <nav className='nav'>
          <button 
            className={activeTab === 'all' ? "nav-btn nav-btn__active" : "nav-btn"}
            onClick={handleTabAll}        
          >
            Все котики
          </button>
          <button
            className={activeTab === 'favorites' ? "nav-btn nav-btn__active" : "nav-btn"}
            onClick={handleTabFavorites}
          >
            Любимые котики
          </button>
        </nav>

        {activeTab === 'all' ? <KittensList /> : <FavoriteKittensList />}

      </div>
    </header>
  );
});

export default Navigation;
