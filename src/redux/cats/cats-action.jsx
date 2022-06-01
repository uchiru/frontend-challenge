import { createAction } from "@reduxjs/toolkit";
export const fetchCatsLoading = createAction("cats/fetchCatsLoading");
export const fetchCats = createAction("cats/fetchCats");
export const fetchCatsError = createAction("cats/fetchCatsError");
export const catsLike = createAction("cats/catsLike");