import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { favoriteCatsReducer } from './favoriteCatsSlice';

const rootReducer = combineReducers({
  favoriteCatsReducer,
});

export const store = configureStore({
  reducer: rootReducer
});