import { createSlice } from "@reduxjs/toolkit";

export const dataCatSlice = createSlice({
  name: "dataCat",
  initialState: {
    data: [],
    favorite: [],
    start: true,
  },
  reducers: {
    setDataCat: (state, action) => {
      state.data = action.payload;
    },
    setStart: (state) => {
      state.start = false;
    },
    favoriteAdd: (state, action) => {
      const findItem = state.favorite.find((obj) => obj.id === action.payload);
      if (!findItem) {
        const findDataItem = state.data.find(
          (obj) => obj.id === action.payload
        );
        state.favorite.push(findDataItem);
      }
    },
    favoriteRemove: (state, action) => {
      const findItem = state.favorite.find((obj) => obj.id == action.payload);
      state.favorite = state.favorite.filter((obj) => obj.id !== findItem.id);
    },
    setAddNewCats: (state, action) => {
      state.data = [...state.data, action.payload]
    }
  },
});

export const { setDataCat, favoriteAdd, favoriteRemove, setStart, setAddNewCats } =
  dataCatSlice.actions;
export default dataCatSlice.reducer;
