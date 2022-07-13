import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const AuthApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8000/api/',
    }),
    endpoints: (builder) => ({
        login: builder.mutation({
            query(credentials) {
                return {
                    url: `api-token-auth/`,
                    method: 'POST',
                    body: credentials,
                }
            },
            transformResponse: ({token, role}, meta, arg) => {
                return token;
            }
        }),
    }),
})

export const { useLoginMutation } = AuthApi;