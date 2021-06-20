import {Task} from "./task";
import {api} from "../../api/api";

export interface Filter {
    performerId?: string;
}

export function loadTasks(filter: Filter): Promise<Task[]> {
    return api.get<Task[]>('tasks', {
        params: {
            ...filter,
        }
    }).then(resp => resp.data);
}
