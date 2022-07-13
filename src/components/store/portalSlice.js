import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    addCameraId: null,
}


const portalSlice = createSlice({
    name: 'portal',
    initialState,
    reducers: {
        setAddCameraId(state, { payload }){
            state.addCameraId = payload;
        }
    },
})


export const { setAddCameraId } = portalSlice.actions

export default portalSlice.reducer