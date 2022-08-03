import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const StreamApi = createApi({
    reducerPath: 'streamApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8000/',
        prepareHeaders: (headers, {getState}) => {
            const token = getState().auth.token;

            if (token) {
                headers.set('authorization', `Token ${token}`)
            }

            return headers
        }
    }),
    endpoints: (builder) => ({
        getStream: builder.query({
            query: (id)=> `stream/${id}`
        }),
    }),
})

export const { useGetStreamQuery, useLazyGetStreamQuery } = StreamApi;