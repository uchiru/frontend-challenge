import { useSelector } from 'react-redux';
import { getCatsPage } from '../store/catsPageSlice';

const getState = (store) => store.catsPageReducer;

export const useCatsPage = () => {
  const state = useSelector(getState);

  return {
    ...state,    
    getCatsPage,
  };
};
