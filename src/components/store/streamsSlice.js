import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const streamsSlice = createSlice({
    name: 'streams',
    initialState,
    reducers: {
        setStreams(state, { payload }){
            return payload;
        },
    }
})


export const { setStreams } = streamsSlice.actions;


export default streamsSlice.reducer;