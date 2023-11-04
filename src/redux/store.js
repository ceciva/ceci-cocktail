import { configureStore } from "@reduxjs/toolkit";
import { cocktailApi } from "../services/cocktailApi";
import homeSlice from "./slices/homeSlice";

export const store= configureStore({
    reducer:{
    homeSlice,
    [cocktailApi.reducerPath]: cocktailApi.reducer,
    },
    middleware: (getDefaultMiddleware)=>
    getDefaultMiddleware().concat(cocktailApi.middleware),
});