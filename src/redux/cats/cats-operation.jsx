import { fetchCats, fetchCatsLoading, fetchCatsError } from './cats-action';
import { fetchCatsApi } from 'utils/api';
export const fetchCatsGet = () => async dispatch => {
  dispatch(fetchCatsLoading());
  try {
    const cats = await fetchCatsApi();
    let newCats = cats.map(el=> ({...el, like: false, }))
    dispatch(fetchCats(newCats));
  } catch {
    dispatch(fetchCatsError());
  }
};
