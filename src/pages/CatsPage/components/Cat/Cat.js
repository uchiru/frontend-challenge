import classes from './Cat.module.scss';
import { useState, useRef } from 'react';
import { useEffect } from 'react';
import { ReactComponent as IconLike } from './assets/favorite_border.svg'
import { useFavoriteCats } from '../../../../hooks/useFavoriteCats';
import {useDispatch} from 'react-redux';

export const Cat = ({ cat }) => {
  const [isHover, setIsHover] = useState(false);
  const dispatch = useDispatch();
  const likeButtonRef = useRef(null);
  const catRef = useRef(null);
  const { favoriteCats, setFavoriteCats } = useFavoriteCats();

  const handleCatMouseEnter = () => {
    setIsHover(true);
    // catRef.current.style.transform = 'scale(1.2)';
    catRef.current.style.scale = '1.2';
    catRef.current.style.transitionProperty = 'all';
    catRef.current.style.transitionDuration = '1s';
  };

  const handleCatMouseLeave = () => {
    setIsHover(false);
    catRef.current.style.scale = '1';
    catRef.current.style.transitionProperty = 'all';
  };

  const handleLikeMouseEnter = () => {
    console.log(likeButtonRef.current.style)
  };
  const handleLikeMouseLeave = () => {};

  const addToFavoriteCats = (cat) => {
    const newFavoriteCats = [...favoriteCats, cat];
    dispatch(setFavoriteCats(newFavoriteCats));
  };

  const removeFromFavoriteCats = (catToRemove) => {
    const updatedFavoriteCats = favoriteCats.filter(cat => cat !== catToRemove);
    dispatch(setFavoriteCats(updatedFavoriteCats));
  };

  const handleCatClick = () => {
    if (favoriteCats.includes(cat)) removeFromFavoriteCats(cat);
    else addToFavoriteCats(cat);   
  };

  return (
    <div
      ref={catRef}
      className={classes.cat}
      onMouseEnter={handleCatMouseEnter}
      onMouseLeave={handleCatMouseLeave}      
    >
      <div className={classes.image}>
        <img

          src={cat?.url && cat.url}
          alt={'здесь был кот'}
        />
      </div>
      {isHover && (
        <IconLike
          className={classes.like}
          ref={likeButtonRef}
          onClick={handleCatClick}
          onMouseEnter={handleLikeMouseEnter}
          onMouseLeave={handleLikeMouseLeave}  
        />
      )}
    </div>
  );
};
