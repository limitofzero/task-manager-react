import { configureStore } from '@reduxjs/toolkit'
import {sessionReducer} from "./session/sessionSlice";
import {userTasksReducer} from "./main/user-task-table/userTaskSlise";

export const store = configureStore({
    reducer: {
        session: sessionReducer,
        userTasks: userTasksReducer,
    },
});
