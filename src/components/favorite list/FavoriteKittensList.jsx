import React, {useContext} from 'react';
import {observer} from 'mobx-react-lite';
import {FaHeart} from 'react-icons/fa';

import {Context} from '../../index';
import '../general list/KittensList.scss';
import '../item/KittenItem.scss';

const FavoriteKittensList = observer(() => {
  const {favorites} = useContext(Context);

  const handleClick = (item) => {
    favorites.removeFromFavorites(item.id);
  };

  return (
    <div className='kittens-list'>
      {favorites.favorites.map((item) => {
        return (
          <div key={item.id} className='item'>
          <img
            src={item.url} 
            className='item-img' 
            alt=''
          />
          <div className='item-overlay'>
            <div className='icons'>
              <FaHeart className='icon-active' onClick={() => handleClick(item)}/>
            </div>
          </div>
        </div>
        )}
      )}
    </div>
  );
});

export default FavoriteKittensList;
