import { firebase_url } from "../firebase/database";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


export const firebasedb= createApi({
    reducePath: "firebasdb",
    baseQuery: fetchBaseQuery({baseUrl:firebase_url}),
    endpoints: (builder) =>({
        getImage: builder.query({
            query: ()=> "image.json",
        }),

        putImage: builder.mutation({
            query: (image)=> ({
                url: "image.json",
                method: "PUT",
                body: image,
            }),
        }),
}),
})
export const {useGetImageQuery, usePutImageMutation}= firebasedb;