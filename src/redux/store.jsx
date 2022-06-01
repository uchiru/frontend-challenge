import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import catsReducer from "./cats/cats-reducer";
    const middleware = [
        ...getDefaultMiddleware({
        }),
        
      ];
      const store = configureStore({
          reducer: {
            cats: catsReducer,
          },
          devTools: process.env.NODE_ENV === 'development',
          middleware
        });
        
export default store