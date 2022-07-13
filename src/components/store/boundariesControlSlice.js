import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    id: 0,
    curMousePos: [0, 0],
    mode: 'draw',
    selectedId: null,
    elClicked: { rect: false, line: false },
    lowestPointPosition: [0, 0],
}


const boundariesControlSlice = createSlice({
    name: 'boundariesControl',
    initialState,
    reducers: {
        setId(state, { payload }){
            state.id = payload
        },

        setCurMousePos(state, { payload }){
            state.curMousePos = [payload[0], payload[1]]
        },

        setMode(state, { payload }){
            state.mode = payload
        },

        setSelectedId(state, { payload }){
            state.selectedId = payload;
        },

        setRectClicked(state, { payload }){
            state.elClicked = {...state.elClicked, rect: payload, line: false};
        },

        setLineClicked(state, { payload }){
            state.elClicked = {...state.elClicked, line: payload, rect: false};
        },

        setStageClicked(state){
            state.elClicked = {...state.elClicked, line: false, rect: false};
        },

        setLowestPointPosition(state, { payload }){
            state.lowestPointPosition = [payload[0], payload[1]];
        }
    }
})

export const { setId, setCurMousePos,
    setMode, setSelectedId, setLowestPointPosition,
    setRectClicked, setLineClicked, setStageClicked } = boundariesControlSlice.actions;

export default boundariesControlSlice.reducer;