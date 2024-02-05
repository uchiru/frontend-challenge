import { useEffect } from 'react';
import { useSelector } from 'react-redux';
// import { getLangs, setLang } from '../reducers/langsSlice';
import { getCatsPage } from '../store/catsPageSlice';

const getState = (store) => store.catsPageReducer;

export const useCatsPage = () => {
  const state = useSelector(getState);
  // const { lang } = state;

  // useEffect(() => {
  //   localStorage.setItem('catsPage', JSON.stringify(catsPage));
  // }, [catsPage]);

  return {
    ...state,
    // setLang,
    getCatsPage,
  };
};
