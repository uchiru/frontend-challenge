import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { favoriteCatsReducer } from './favoriteCatsSlice';
import { catsPageReducer } from './catsPageSlice';

const rootReducer = combineReducers({
  favoriteCatsReducer,
  catsPageReducer,
});

export const store = configureStore({
  reducer: rootReducer
});