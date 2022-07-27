import {createSlice} from "@reduxjs/toolkit";

const initialState = []


const boundariesSlice = createSlice({
    name: 'boundaries',
    initialState,
    reducers: {
        setPoints(state, { payload }){
            for (const shape of state){
                if (shape.id === payload.id){
                    shape.points.push(payload.value);
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

        setType(state, { payload }){
            for (const shape of state){
                if (shape.id === payload.id){
                    shape.type = payload.value
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
        },

        setEditable(state, { payload }){
            for (const shape of state){
                if (shape.id === payload.id){
                    shape.editable = payload.value
                }
            }
        },

        setShape(state, { payload }){
            return state.map((shape) => {
                if (shape.id === payload.id){
                    return payload.value;
                }
                return shape;
            })
        },

        setShapeName(state, { payload }){
            for (const shape of state){
                if (shape.id === payload.id){
                    shape.name = payload.value
                }
            }
        },

        setAccepted(state, { payload }){
            for (const shape of state){
                if (shape.id === payload.id){
                    shape.isAccepted = payload.value
                }
            }
        },

    }
})

export const { setPoints, setShape,
    setIsFinished, editPoints, addShape, setType, setEditable, setAccepted,
    setIsMouseOverStartPoint, setXY, deleteShape, setShapeName, } =
    boundariesSlice.actions;

export default boundariesSlice.reducer;