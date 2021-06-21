import {createSlice, Draft, PayloadAction} from "@reduxjs/toolkit";
import {TaskType} from "./task-type";

export interface State {
    types: TaskType[];
}

export const taskTypeSlice = createSlice({
    name: 'taskTypes',
    initialState: {
        types: [],
    },
    reducers: {
        finishLoadTaskTypes: (state: Draft<State>, { payload }: PayloadAction<{ taskTypes: TaskType[] }>) => {
            state.types = payload.taskTypes;
        }
    }
});

export const { finishLoadTaskTypes } = taskTypeSlice.actions;
export const taskTypeReducer = taskTypeSlice.reducer;
