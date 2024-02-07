import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { favoriteCatsReducer } from './favoriteCatsSlice';
import { catsPageReducer } from './catsPageSlice';
import { currentPageReducer } from './currentPageSlice';

const rootReducer = combineReducers({
  favoriteCatsReducer,
  catsPageReducer,
  currentPageReducer,
});

export const store = configureStore({
  reducer: rootReducer
});