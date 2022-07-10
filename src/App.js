import React, {useEffect, useContext} from 'react';
import {observer} from 'mobx-react-lite';

import Navigation from './components/navigation/Navigation.jsx';
import {Context} from './index';
import './App.css';

const App = observer(() => {
  const {favorites} = useContext(Context);

  useEffect(() => {
    const favLocal = JSON.parse(localStorage.getItem('favorites'));

    if (favLocal !== null) {
      favorites.setFavorites(favLocal);
    }
  }, [])

  return (
    <div className="App">
      <Navigation />     
    </div>
  );
});

export default App;
