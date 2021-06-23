import {createSlice, Draft, PayloadAction} from "@reduxjs/toolkit";
import {User} from "./user";

export interface State {
    isLoading: boolean;
    users: User[];
}

export const projectUsersSlice = createSlice({
    name: 'projectUsers',
    initialState: {
        isLoading: false,
        users: [],
    },
    reducers: {
        startLoadingUsers: (state: Draft<State>) => {
            state.isLoading = true;
        },
        finishLoadingUsers: (state: Draft<State>, { payload }: PayloadAction<{ users: User[] }>) => {
            state.isLoading = false;
            state.users = payload.users;
        }
    }
});

export const { startLoadingUsers, finishLoadingUsers } = projectUsersSlice.actions;
export const projectUsersReducer = projectUsersSlice.reducer;
