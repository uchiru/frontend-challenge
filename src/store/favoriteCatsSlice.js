import { createSlice } from '@reduxjs/toolkit';
import {useEffect} from 'react';

// const initialState = {
//   favoriteCats: []
// };

// Если любимые должны сохраняться после обновления страницы
const initialState = {
  favoriteCats: localStorage.getItem('favoriteCats') ? JSON.parse(localStorage.getItem('favoriteCats')) : []
  // favoriteCats: []
};

export const favoriteCatsSlice = createSlice({
  name: 'favoriteCats',
  initialState,
  reducers: {
    setFavoriteCats: (state, { payload }) => {
      state.favoriteCats = payload;
    },
  },
});

export const { reducer:  favoriteCatsReducer } =  favoriteCatsSlice;
export const { setFavoriteCats } =  favoriteCatsSlice.actions;
