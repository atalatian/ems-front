import {createSlice} from "@reduxjs/toolkit";
import shapesObj from "./shapesObj";

const initialState = [
    shapesObj,
]


const boundariesSlice = createSlice({
    name: 'boundaries',
    initialState,
    reducers: {
        setPoints(state, { payload }){
            for (const shape of state){
                if (shape.id === payload.id){
                    shape.points.push(payload.value)
                }
            }
        },

        editPoints(state, { payload }){
            for (const shape of state){
                if (shape.id === payload.id){
                    shape.points = payload.value
                }
            }
        },

        setIsFinished(state, { payload }){
            for (const shape of state){
                if (shape.id === payload.id){
                    shape.isFinished = payload.value
                }
            }
        },

        setIsMouseOverStartPoint(state, { payload }){
            for (const shape of state){
                if (shape.id === payload.id){
                    shape.isMouseOverStartPoint = payload.value
                }
            }
        },

        addShape(state, { payload }){
            state.push(payload)
        },

        setXY(state, { payload }){
            for (const shape of state){
                if (shape.id === payload.id){
                    shape.x = payload.value[0];
                    shape.y = payload.value[1];
                }
            }
        },

        deleteShape(state, { payload }){
            return state.filter((shape) => shape.id !== payload.id);
        }

    }
})

export const { setPoints,
    setIsFinished, editPoints, addShape,
    setIsMouseOverStartPoint, setXY, deleteShape } =
    boundariesSlice.actions;

export default boundariesSlice.reducer;