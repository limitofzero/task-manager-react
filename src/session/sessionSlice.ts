import {createSlice, Draft, PayloadAction} from "@reduxjs/toolkit";

export interface State {
    token: string | null;
}

export const sessionSlice = createSlice({
    name: 'session',
    initialState: {
        token: null,
    },
    reducers: {
        signIn: (state: Draft<State>, action: PayloadAction<string>) => {
            state.token = action.payload;
        },
        logout: (state: Draft<State>) => {
            state.token = null;
        }
    }
})

export const { signIn, logout } = sessionSlice.actions;
export const sessionReducer = sessionSlice.reducer;
