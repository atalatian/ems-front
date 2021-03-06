import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const DataApi = createApi({
    reducerPath: 'dataApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8000/api/',
        prepareHeaders: (headers, {getState}) => {
            const token = getState().auth.token;

            if (token) {
                headers.set('authorization', `Token ${token}`)
            }

            return headers
        }
    }),
    tagTypes: [`Streams`, `Stream`, `Events`, 'Shapes'],
    endpoints: (builder) => ({
        getDetectors: builder.query({
            query: ()=> `detectors/`,
        }),

        getStreams: builder.query({
            query: ()=> `streams/`,
            providesTags: [`Streams`],
        }),

        setStreams: builder.mutation({
            query(stream){
                return {
                    url: `streams/`,
                    method: `POST`,
                    body: stream,
                }
            },
            invalidatesTags: ['Streams']
        }),

        getStream: builder.query({
            query: (id)=> `streams/${id}/`,
            providesTags: ['Stream'],
        }),

        setStream: builder.mutation({
            query(obj) {
                return {
                    url: `streams/${obj.id}/`,
                    method: 'PATCH',
                    body: obj.switch,
                }
            },
            invalidatesTags: ['Streams', 'Stream'],
        }),

        getEvents: builder.query({
            query: (args)=> 'events/',
            providesTags: ['Events'],

        }),

        deleteEvent: builder.mutation({
            query(id){
                return{
                    url: `events/${id}/`,
                    method: `DELETE`,
                }
            },
            invalidatesTags: [`Events`],
        }),

        setShape : builder.mutation({
            query(shape){
                return{
                    url: `geometries/`,
                    method: `POST`,
                    body: shape,
                }
            }
        }),

        editShape: builder.mutation({
            query(obj){
                return{
                    url: `geometries/${obj.id}/`,
                    method: `PATCH`,
                    body: obj.boundary,
                }
            }
        }),

        deleteShape: builder.mutation({
            query(id){
                return{
                    url: `geometries/${id}/`,
                    method: `DELETE`,
                }
            }
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetDetectorsQuery, useGetStreamsQuery, useGetEventsQuery,
    useGetStreamQuery, useDeleteEventMutation,
    useSetShapeMutation, useEditShapeMutation, useDeleteShapeMutation,
    useSetStreamMutation, useSetStreamsMutation } = DataApi;
