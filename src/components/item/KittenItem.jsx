import React, {useContext} from 'react';
import {observer} from 'mobx-react-lite';
import {FiHeart} from 'react-icons/fi';
import {FaHeart} from 'react-icons/fa';

import {Context} from '../../index';
import './KittenItem.scss';

const KittenItem = observer(({item}) => {
  const {favorites} = useContext(Context);

  const isItemInFavorites = favorites.favorites.some((i) => i.id === item.id);

  const handleClick = () => {
    if (isItemInFavorites) {
      favorites.removeFromFavorites(item.id);
    } else {
      favorites.addToFavorites(item);
    }
  };

  return (
    <div key={item.id} className='item'>
      <img
        src={item.url} 
        className='item-img' 
        alt=''
      />
      <div className='item-overlay'>
        <div
          className='icons'
          onClick={handleClick}
        >
          {isItemInFavorites ?
          <FaHeart className='icon-active' />
          :
          <>
            <FiHeart className='item-icon'/>
            <FaHeart className='item-icon item-icon__hover'/>
          </>
          }
        </div>
      </div>
    </div>
  );
});

export default KittenItem;
