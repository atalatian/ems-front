import { createSlice } from '@reduxjs/toolkit';

const initialState = { token: localStorage.getItem('token') }


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken(state, {payload}){
            state.token = payload;
        },
    },
})


export const { setToken } = authSlice.actions

export default authSlice.reducer