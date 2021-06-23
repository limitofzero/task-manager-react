import {User} from "./user";
import {api} from "../../api/api";

export interface Filter {
    projectId?: string;
}

export function loadUsers(filter: Filter): Promise<User[]> {
    return api.get<User[]>('users', { params: filter }).then(result => result.data);
}
