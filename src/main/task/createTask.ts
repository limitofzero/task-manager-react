import {Task} from "./task";
import {api} from "../../api/api";

export interface CreateTask {
    creatorId: string;
    typeId: number;
    performerId: string;
    projectId: string;
    statusId: number;
    title: string;
    description: string;
}

export function createTask(task: CreateTask): Promise<Task> {
    return api.post('tasks', { ...task })
        .then(result => result.data);
}
