import { Cat } from "@/app/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type CatState = {
  favorites: Cat[];
};

const initialState: CatState = {
  favorites: [],
};

export const FavoriteCatsSlice = createSlice({
  name: "favorite_cats_slice",
  initialState,
  reducers: {
    addToFavorite(state, action: PayloadAction<Cat>) {
      state.favorites.push(action.payload);
    },
  },
});

export const catsReducer = FavoriteCatsSlice.reducer;
