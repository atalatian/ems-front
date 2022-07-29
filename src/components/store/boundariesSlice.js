import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = []

export const getShapes = createAsyncThunk(
    'boundaries/getShapes',
    async (streamId, thunkAPI)=>{
        const token = thunkAPI.getState().auth.token;

        let headers;
        if (token) {
            headers = {'Authorization': `Token ${token}`}
        }
        const config = {
            headers,
        }


        const {data} = await axios.get(`http://localhost:8000/api/geometries/`
            ,config);


        return data.filter((shape) => shape.stream == streamId).map((shape)=>{
            return {
                id: shape.id,
                x: 0,
                y: 0,
                points: [...shape.boundary.points.map((point) => {return  [...point]})],
                type: shape.geometry_type,
                name: shape.name,
                isAccepted: true,
                isFinished: true,
                isMouseOverStartPoint: shape.geometry_type === 'polygon',
                editable: false,
            }
        })
})

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

        setId(state, { payload }){
            for (const shape of state){
                if (shape.id === payload.id){
                    shape.id = payload.value
                }
            }
        },

    },

    extraReducers : (builder) => {
        builder.addCase(getShapes.fulfilled, (state, {payload}) => {
            return payload
        })
    }
})

export const { setPoints, setShape,
    setIsFinished, editPoints, addShape, setType, setEditable, setAccepted, setId,
    setIsMouseOverStartPoint, setXY, deleteShape, setShapeName} =
    boundariesSlice.actions;

export default boundariesSlice.reducer;