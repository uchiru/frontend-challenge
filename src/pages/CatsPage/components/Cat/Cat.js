import classes from './Cat.module.scss';
import { useState, useRef } from 'react';
import { ReactComponent as IconLike } from './assets/favorite_border.svg'

export const Cat = ({ cat, addToFavorites }) => {
  console.log(cat);

  const [isHover, setIsHover] = useState(false);
  const likeButtonRef = useRef(null);
  const catRef = useRef(null);


  const handleMouseEnter = () => {
    setIsHover(true);
    // catRef.current.style.transform = 'scale(1.2)';
    catRef.current.style.scale = '1.2';
    catRef.current.style.transitionProperty = 'all';
    catRef.current.style.transitionDuration = '1s';
  };

  const handleMouseLeave = () => {
    setIsHover(false);
    catRef.current.style.scale = '1';
    catRef.current.style.transitionProperty = 'all';
  };

  const addToFavorites = (cat) => {
    setFavoriteCats(prevFavoriteCats => [...prevFavoriteCats, cat]);
  };

  const handleCatClick = () => {
    addToFavorites(cat);
  };

  return (
    <div
      ref={catRef}
      className={classes.cat}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onCatClick={handleCatClick}
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
        />
      )}
    </div>
  );
};
