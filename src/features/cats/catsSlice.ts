import { createSlice } from "@reduxjs/toolkit";
import {} from "@thatapicompany/thecatapi";

type Data = {
  id: string;
  url: string;
  width: number;
  height: number;
};

export type Cat = {
  data: Data[];
};

const initialState: Cat = {
  data: [],
};

export const CatSlice = createSlice({
  name: "cat_slice",
  initialState,
  reducers: {},
});

export default CatSlice.reducer;
