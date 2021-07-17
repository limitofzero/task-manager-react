import {User} from "./user";
import {api} from "../../api/api";

export function loadUserById(id: string): Promise<User> {
    return api.get(`users/${id}`)
        .then(result => result.data);
}
