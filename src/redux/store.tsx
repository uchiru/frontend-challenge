import { configureStore } from "@reduxjs/toolkit";
import dataCatReducer from "./dataCatSlice";

export default configureStore({
  reducer: {
    dataCat: dataCatReducer,
  },
});
