import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import { AuthApi } from "./authApi";
import { DataApi } from "./dataApi";
import { StreamApi } from "./streamApi";
import boundariesReducer from './boundariesSlice';
import boundariesControlReducer from './boundariesControlSlice';
import decodersReducer from "./decodersSlice";
import streamsReducer from "./streamsSlice";
import portalReducer from './portalSlice';

const store = configureStore({
    reducer: {
        [AuthApi.reducerPath]: AuthApi.reducer,
        [DataApi.reducerPath]: DataApi.reducer,
        [StreamApi.reducerPath]: StreamApi.reducer,
        auth: authReducer,
        boundaries: boundariesReducer,
        boundariesControl: boundariesControlReducer,
        decoders: decodersReducer,
        streams: streamsReducer,
        portal: portalReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(AuthApi.middleware).concat(DataApi.middleware).concat(StreamApi.middleware),
})


export default store;