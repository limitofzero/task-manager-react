import { configureStore } from '@reduxjs/toolkit'
import {sessionReducer} from "./session/sessionSlice";

export const store = configureStore({
    reducer: {
        session: sessionReducer,
    },
});
