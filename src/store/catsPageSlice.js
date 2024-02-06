import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const onGetCatsPage = async (_, thunkAPI) => {
  try {    
    const url = 'https://api.thecatapi.com/v1/images/search?limit=10';
    const response = await fetch(url);
    const data = await response.json();
    return thunkAPI.fulfillWithValue(data);
  } catch (error) {
    const { message } = error;
    console.error(message);
    return thunkAPI.rejectWithValue(message);
  };
};

const getCatsPage = createAsyncThunk(
  'catsPage/getCatsPage',
  onGetCatsPage,
);
  
const initialState = {
  isCatsPageLoading: false,
  catsPage: localStorage.getItem('catsPage') ? JSON.parse(localStorage.getItem('catsPage')) : [], 
  catsPageErrorMessage: '',
};

const catsPageSlice = createSlice({
  name: 'catsPage',
  initialState,
  reducers: { },
  extraReducers: builder => {
    builder
      .addCase(getCatsPage.pending, (state) => {
        state.isCatsPageLoading = true;
        state.catsPage = [];
        state.catsPageErrorMessage = '';
      })
      .addCase(getCatsPage.fulfilled, (state, { payload }) => {
        state.isCatsPageLoading = false;
        state.catsPage = payload;
        state.catsPageErrorMessage = '';
      })
      .addCase(getCatsPage.rejected, (state, { payload }) => {
        state.isCatsPageLoading = false;
        state.catsPage = [];
        state.catsPageErrorMessage = payload;
      });
  }
});

export { getCatsPage };
export const { reducer: catsPageReducer } = catsPageSlice;
