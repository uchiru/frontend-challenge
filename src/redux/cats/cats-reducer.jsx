import { createReducer } from "@reduxjs/toolkit";
import {combineReducers} from "redux"
import {fetchCats, fetchCatsError, fetchCatsLoading, catsLike} from '../../redux/cats/cats-action';

const catsReducer = createReducer([],{
    [fetchCats]: (state, { payload }) => [...state, ...payload],
    [catsLike]: (state, {payload})=> state.map(el => (el.id === payload.id ? ({...payload}) : el))
 })
 const loading = createReducer(false, {
    [fetchCats]: () => false,
    [fetchCatsLoading]: () => true,
    [fetchCatsError]: () => false,
})
const catsStore = combineReducers({
    cats: catsReducer,
    loading,
})
export default catsStore
