import { base_url } from "../data/databseApi";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


export const cocktailApi= createApi({
    reducePath: "cocktailApi",
    baseQuery: fetchBaseQuery({baseUrl:base_url}),

    endpoints: (builder) =>({
        searchByName: builder.query({
            query:(strDrink)=> `search.php?s=${strDrink}`
        }),

        searchByLetter: builder.query({
            query:(strDrink)=> `search.php?s=${strDrink}`
        }),

        searchByIngredient: builder.query({
           query: (strIngredient) => `search.php?i=${strIngredient}`
        }),

        cocktailWithAlcohol: builder.query({
            query: ()=>`filter.php?a=Alcoholic`,
        }),

        cocktailWithOutAlcohol: builder.query({
            query: ()=>`filter.php?a=Non_Alcoholic`,
        }),
    }),
});

export const { useSearchByNameQuery, useSearchByLetterQuery, useSearchByIngrdientQuery, useCocktailWithAlcoholQuery, usecocktailWithOutAlcoholQuery}= cocktailApi;