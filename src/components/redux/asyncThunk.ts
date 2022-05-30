import  {createAsyncThunk} from "@reduxjs/toolkit";
import {getCatsUrl} from "../shared/url";

export const fetchCats = createAsyncThunk('cats/fetchMostPopular', async () => {
    console.log('fetch')
    const response = await fetch(getCatsUrl, {
        headers: {
            env: {
                "X-Api-Key": "api_key=6837a200-fd1a-47df-99d2-12052d09383d",
            }
        }
    });
    return response.json();
})