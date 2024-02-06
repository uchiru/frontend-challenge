
import { useSelector } from 'react-redux';
import { setCurrentPage } from '../store/currentPageSlice';

const getState = (store) => store.currentPageReducer;

export const useCurrentPage = () => {
  const { currentPage } = useSelector(getState);
  // console.log(setCurrentPage)

  return {
    currentPage,
    setCurrentPage,
  };
};
