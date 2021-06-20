import {Project} from "./project";
import {createSlice, Draft, PayloadAction} from "@reduxjs/toolkit";

export interface State {
    isLoading: boolean;
    projects: Project[];
}

export const userProjectsSlice = createSlice({
    name: 'userProjects',
    initialState: {
        isLoading: false,
        projects: []
    },
    reducers: {
        startLoadProjects: (state: Draft<State>) => {
            state.isLoading = true;
        },
        finishLoadProjects: (state: Draft<State>, actions: PayloadAction<Project[]>) => {
            state.isLoading = false;
            state.projects = actions.payload;
        }
    }
});

export const { startLoadProjects, finishLoadProjects } = userProjectsSlice.actions;
export const userProjectsReducer = userProjectsSlice.reducer;
