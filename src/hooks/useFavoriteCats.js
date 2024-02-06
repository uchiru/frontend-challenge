import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { setFavoriteCats } from '../store/favoriteCatsSlice';

const getState = (store) => store.favoriteCatsReducer;

export const useFavoriteCats = () => {
  const { favoriteCats } = useSelector(getState);
  // Если любимые должны сохраняться после обновления страницы
  useEffect(() => {
    // console.log(favoriteCats)
    // console.log(JSON.stringify(favoriteCats))
    if (favoriteCats) localStorage.setItem('favoriteCats', JSON.stringify(favoriteCats));
  }, [favoriteCats]);

  return {
    favoriteCats,
    setFavoriteCats,
  };
};
