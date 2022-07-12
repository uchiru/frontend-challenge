import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import App from './App';
import Kittens from './store/Kittens';
import FavoriteKittens from './store/FavoriteKittens';

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context.Provider value={{
      kittens: new Kittens(),
      favorites: new FavoriteKittens()
    }}>
      <App />
    </Context.Provider>
  </React.StrictMode>
);

reportWebVitals();
