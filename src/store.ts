import { configureStore } from '@reduxjs/toolkit'
import {sessionReducer} from "./session/sessionSlice";
import {userTasksReducer} from "./main/user-task-table/userTaskSlise";
import {userProjectsReducer} from "./main/project/userProjectsSlice";
import {taskTypeReducer} from "./main/task-type/taskTypeSlice";
import {projectUsersReducer} from "./main/user/projectUsersSlice";

export const store = configureStore({
    reducer: {
        session: sessionReducer,
        userTasks: userTasksReducer,
        userProjects: userProjectsReducer,
        taskTypes: taskTypeReducer,
        projectUsers: projectUsersReducer,
    },
});
