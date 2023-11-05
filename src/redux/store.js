import { configureStore } from "@reduxjs/toolkit";
import { cocktailApi } from "../services/cocktailApi";
import homeSlice from "./slices/homeSlice";
import authSlice from "./slices/authSlice";

export const store= configureStore({
    reducer:{
    homeSlice,
    [cocktailApi.reducerPath]: cocktailApi.reducer, 
    authSlice,
    },
    middleware: (getDefaultMiddleware)=>
    getDefaultMiddleware().concat(cocktailApi.middleware),
});