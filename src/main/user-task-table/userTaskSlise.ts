import {Task} from "../task/task";
import {createSlice, Draft, PayloadAction} from "@reduxjs/toolkit";

export interface State {
    isLoading: boolean,
    tasks: Task[],
}

export const userTaskSlice = createSlice({
    name: 'userTasks',
    initialState: {
        isLoading: false,
        tasks: [],
    },
    reducers: {
        loadTasks: (state: Draft<State>) => {
            state.isLoading = true;
        },
        tasksLoaded: (state: Draft<State>, { payload }: PayloadAction<{ tasks: Task[] }>) => {
            state.isLoading = false;
            state.tasks = payload.tasks;
        }
    }
});

export const { loadTasks, tasksLoaded } = userTaskSlice.actions;
export const userTasksReducer = userTaskSlice.reducer;
