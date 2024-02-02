import { createSlice } from "@reduxjs/toolkit";

export const dataCatSlice = createSlice({
  name: "dataCat",
  initialState: {
    data: [],
    favorite: [],
  },
  reducers: {
    setDataCat: (state, action) => {
      state.data = action.payload;
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
      state.favorite = state.favorite.filter((obj) => obj.id !== findItem.id)
    },
  },
});

export const { setDataCat, favoriteAdd, favoriteRemove } = dataCatSlice.actions;
export default dataCatSlice.reducer;
