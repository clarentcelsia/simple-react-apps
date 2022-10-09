// RTK Query
// Basically, RTK Query is used to simplify your existing data fetching logic you defined using redux-middleware before.
// Imagine you have 4 endpoints (post, get, put, delete), then you need to define 4 Thunkfns + 4x3 reducers (rejected/fulfilled/pending), total 24 fns.
// With RTK Query, you can wrap them all in 1 file.

import { color } from "@mui/system";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ColorAPI = createApi({
    // ReducerPath is similar to 'name' in Slice.
    reducerPath:"colorAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://reqres.in/api",
    }),
    // this endpoints will return an object, so wrap it with ({})
    endpoints: (builder) => ({
        // GET /colors
        colors: builder.query({
            query: () => "/colors",
        }),

        // GET /colors/:id
        colorById: builder.query({
            query: (id) => `colors/${id}`,
        }),

        // POST /colors
        addColor: builder.mutation({
            query: (color) => ({
                url:"/colors",
                method:"POST",
                body:color,
            }),
        }),

        // PUT /colors/:id
        updateColorById: builder.mutation({
            query: ({ id, ...color }) => ({
                url: `/colors/${id}`,
                method: "PUT",
                body: color,
            }), 
        }),

        // Delete /colors/:id
        deleteColorById: builder.mutation({
            query: (id) => ({
                url: `/colors/${id}`,
                method: "DELETE",
            }),
        }),
    }),
});

// export custom hooks-> use + endpoint + fnName
export const {
    useColorsQuery,
    useColorByIdQuery,
    useAddColorMutation,
    useUpdateColorByIdMutation,
    useDeleteColorByIdMutation,
} = ColorAPI;
