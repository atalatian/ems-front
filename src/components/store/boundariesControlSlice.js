import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    id: 0,
    selectedId: null,
}


const boundariesControlSlice = createSlice({
    name: 'boundariesControl',
    initialState,
    reducers: {
        setId(state, { payload }){
            state.id = payload
        },

        setSelectedId(state, { payload }){
            state.selectedId = payload;
        },
    }
})

export const { setId, setMode, setSelectedId, } = boundariesControlSlice.actions;

export default boundariesControlSlice.reducer;