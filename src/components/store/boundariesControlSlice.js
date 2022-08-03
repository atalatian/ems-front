import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    id: 0,
    selectedId: null,
    showCheckeredBoard: false,
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

        setShowCheckeredBoard(state, { payload }){
            state.showCheckeredBoard = payload;
        }
    }
})

export const { setId, setMode, setSelectedId,
    setShowCheckeredBoard} = boundariesControlSlice.actions;

export default boundariesControlSlice.reducer;