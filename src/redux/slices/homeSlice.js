import { createSlice } from "@reduxjs/toolkit";
import { categories } from "../../data/categories";
import { drinks } from "../../data/drinks";
const homeSlice= createSlice({

    name: "home",
    initialState:{
        allCategories: categories,
        allDrinks: drinks,
    },
    reducers: {},

});
export default homeSlice.reducer;