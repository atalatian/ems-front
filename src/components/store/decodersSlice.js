import { createSlice } from "@reduxjs/toolkit";


const initialState = [];

const decodersSlice = createSlice({
    name: 'decoders',
    initialState,
    reducers: {
        setDecoder(state, { payload }){
            state.push(payload);
        },

        setDecoders(state, { payload }){
            return payload;
        }
    }
})


export const { setDecoders, setDecoder } = decodersSlice.actions;
export default decodersSlice.reducer;