import {TaskType} from "./task-type";
import {api} from "../../api/api";

export function loadTaskTypes(): Promise<TaskType[]> {
    return api.get('task-types')
        .then((result => result.data));
}
