import { createSlice } from "@reduxjs/toolkit";


const initialState = [
    { id: 0, points: [], isFinished: false, isMouseOverStartPointSet: false },
]

const boundariesSlice2 = createSlice({
    name: 'boundaries2',
    initialState,
    reducers: {

    }
})

