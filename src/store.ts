import { configureStore } from '@reduxjs/toolkit'
import {sessionReducer} from "./session/sessionSlice";
import {userTasksReducer} from "./main/user-task-table/userTaskSlise";
import {userProjectsReducer} from "./main/project/userProjectsSlice";

export const store = configureStore({
    reducer: {
        session: sessionReducer,
        userTasks: userTasksReducer,
        userProjects: userProjectsReducer,
    },
});
