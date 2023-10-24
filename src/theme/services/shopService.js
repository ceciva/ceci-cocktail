import { base_url } from "../../data/databseApi";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const cocktailApi= createApi({
    reducePath: "cocktailApi",
    baseQuery: fetchBaseQuery({baseUrl: base_url}),
    endpoints: (builder) =>({
        searchByName: builder.query({
            query:(strDrink)=> `search.php?s=${strDrink}`
        }),

        searchByIngredient: builder.query({
           query: (strIngredient) => `search.php?i=${strIngredient}`
        }),

        cocktailWithAlcohol: builder.query({
            query: (strAlcoholic)=>`filter.php?a=Alcoholic`
        }),

        cocktailWithOutAlcohol: builder.query({
            query: (strAlcoholic)=>`filter.php?a=Non_Alcoholic`
        }),
    }),
});

export const { useSearchByNameQuery, useSearchByIngrdientQuery, useCocktailEithAlcoholQuery, usecocktailWithOutAlcoholQuery}= cocktailApi;