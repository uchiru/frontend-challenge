import { createSlice } from "@reduxjs/toolkit";
import { fetchCats } from "./asyncThunk";
import {PayloadAction} from "@reduxjs/toolkit";

export type Cat = {height: number, id: string, url: string, width: number}

const initialState: {cats: null | Array<Cat> } = {
    cats: null,
}


const toolkitSlice = createSlice({
    name: 'cats',
    initialState,
    reducers: {
        // CHANGE_LIST(state, action) {
        //     state.cats = action.payload
        // },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCats.fulfilled, (state, action: PayloadAction<Array<Cat>>) => {
            console.log(action.payload)
            state.cats = action.payload;
        })
    }
})

export default toolkitSlice.reducer
export const { } = toolkitSlice.actions