import { useSelector } from 'react-redux';
import { getCarePage } from '../reducers/carePageSlice';


const getState = (store) => store.catsPageReducer;


export const useCarePage = () => {
  const state = useSelector(getState);

  return {
    ...state,
    getCatsPage,
  };
};
