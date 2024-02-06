import { createSlice } from '@reduxjs/toolkit';

const initialState = {  
  currentPage: 'start',
};

console.log('tew')

export const currentPageSlice = createSlice({
  name: 'currentPage',
  initialState,
  reducers: {
    setCurrentPage: (state, { payload }) => {
      state.currentPage = payload;
    },
  },
});

export const { reducer:  currentPageReducer } =  currentPageSlice;
export const { setCurrentPage } = currentPageSlice.actions;
