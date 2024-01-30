import { Cat } from "@/app/types";
import { createSlice } from "@reduxjs/toolkit";

export type CatState = {
  data: Cat[];
};

const initialState: CatState = {
  data: [],
};

export const CatSlice = createSlice({
  name: "cat_slice",
  initialState,
  reducers: {},
});

export const catsReducer = CatSlice.reducer;
