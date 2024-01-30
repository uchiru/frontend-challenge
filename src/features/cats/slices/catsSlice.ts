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
    toggleFavorite(state, action: PayloadAction<Cat>) {
      const isFavorite = state.favorites.find(
        (cat) => cat.id === action.payload.id
      );

      console.log(isFavorite);

      if (isFavorite) {
        state.favorites = state.favorites.filter(
          (cat) => cat.id !== action.payload.id
        );
      } else {
        state.favorites.push(action.payload);
      }
    },
  },
});

export const { toggleFavorite } = FavoriteCatsSlice.actions;

export const catsReducer = FavoriteCatsSlice.reducer;
