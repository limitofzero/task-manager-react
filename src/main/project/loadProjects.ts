import {Project} from "./project";
import {api} from "../../api/api";

export interface Filter {
    userId?: string;
}

export function loadProjects(filter: Filter): Promise<Project[]> {
    return api.get<Project[]>('projects', {
        params: filter
    }).then(resp => resp.data);
}
