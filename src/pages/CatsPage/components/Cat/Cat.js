import classes from './Cat.module.scss';
import { useState, useRef } from 'react';
import { useEffect } from 'react';
import { ReactComponent as IconEmptyLike } from './assets/favorite_border.svg'
import { ReactComponent as IconClickedLike } from './assets/favorite.svg'
import { useFavoriteCats } from '../../../../hooks/useFavoriteCats';
import { useDispatch } from 'react-redux';

export const Cat = ({ cat }) => {
  const [isHover, setIsHover] = useState(false);
  const [isLikeVisible, setIsLikeVisible] = useState(false);
  const [isLikeClicked, setIsLikeClicked] = useState(false);
  const [isHeartHovered, setIsHeartHovered] = useState(false);

  const dispatch = useDispatch();
  const likeButtonRef = useRef(null);
  const catRef = useRef(null);
  const { favoriteCats, setFavoriteCats } = useFavoriteCats();


  const handleCatMouseEnter = () => {
    setIsHover(true);
    setIsLikeVisible(true);
    // catRef.current.style.transform = 'scale(1.2)';
    catRef.current.style.scale = '1.2';
    catRef.current.style.transitionProperty = 'all';
    catRef.current.style.transitionDuration = '1s';
  };

  const handleCatMouseLeave = () => {
    setIsHover(false);
    setIsLikeVisible(false);
    catRef.current.style.scale = '1';
    catRef.current.style.transitionProperty = 'all';
  };

  const handleLikeMouseEnter = () => {
    setIsHeartHovered(true);
  };
  const handleLikeMouseLeave = () => {
    setIsHeartHovered(false);
  };

  const addToFavoriteCats = (cat) => {
    const newFavoriteCats = [...favoriteCats, cat];
    dispatch(setFavoriteCats(newFavoriteCats));
  };

  const removeFromFavoriteCats = (catToRemove) => {
    const updatedFavoriteCats = favoriteCats.filter(cat => cat !== catToRemove);
    dispatch(setFavoriteCats(updatedFavoriteCats));
  };

  const handleLikeClick = () => {
    if (favoriteCats.includes(cat)) {
      setIsLikeClicked(false);
      removeFromFavoriteCats(cat);     
    }
    else {
      addToFavoriteCats(cat);
      setIsLikeClicked(true);     
    }
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
      {isHover && isLikeVisible && !isLikeClicked && (
        <IconEmptyLike
          className={classes.like}
          ref={likeButtonRef}
          onClick={handleLikeClick}
          onMouseEnter={handleLikeMouseEnter}
          onMouseLeave={handleLikeMouseLeave}
        />
      )}
      {isLikeVisible && (isLikeClicked || isHeartHovered) && (
        <IconClickedLike
          className={classes.like}
          // ref={likeButtonRef}
          onClick={handleLikeClick}
          onMouseEnter={handleLikeMouseEnter}
          onMouseLeave={handleLikeMouseLeave}
        />
      )}
    </div>
  );
};
