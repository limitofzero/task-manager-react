import {createSlice, Draft, PayloadAction} from "@reduxjs/toolkit";

export interface State {
    token: string | null;
    isLoading: boolean;
}

export const sessionSlice = createSlice({
    name: 'session',
    initialState: {
        token: null,
        isLoading: false,
    },
    reducers: {
        startSignIn: (state: Draft<State>) => {
            state.isLoading = true;
        },
        finishSignIn: (state: Draft<State>, { payload }: PayloadAction<{ token: string }>) => {
            const { token } = payload;
            state.token = token;
            state.isLoading = false;
        },
        logout: (state: Draft<State>) => {
            state.token = null;
        }
    }
})

export const { startSignIn, finishSignIn, logout } = sessionSlice.actions;
export const sessionReducer = sessionSlice.reducer;
