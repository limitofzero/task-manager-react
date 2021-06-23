import {FormControlProps} from "@material-ui/core/FormControl/FormControl";
import {Control, FieldValues} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {finishLoadingUsers, startLoadingUsers} from "../../user/projectUsersSlice";
import {loadUsers} from "../../user/loadUsers";
import {FormSelect} from "../../../controls/FormSelect";
import {MenuItem} from "@material-ui/core";
import * as React from "react";
import {User} from "../../user/user";

export interface ProjectSelectorProps extends FormControlProps {
    projectId: string;
    control: Control<FieldValues>;
    name: string;
}

export const ProjectUsersSelector = ({ control, name, projectId, ...props }: ProjectSelectorProps) => {
    const dispatch = useDispatch();

    const users = useSelector((state: any) => state.projectUsers.users as User[]);

    useEffect(() => {
        if (projectId) {
            dispatch(startLoadingUsers());
            loadUsers({ projectId })
                .then(users => dispatch(finishLoadingUsers({ users })));
        }
    }, [projectId]);

    return (
        <FormSelect control={control}
                    label="Performer"
                    defaultValue=""
                    name={name}
                    { ...props }>
            <MenuItem value="">
                <em>None</em>
            </MenuItem>
            {
                users.map(user => (
                    <MenuItem key={user.id} value={user.id}>{ user.email }</MenuItem>
                ))
            }
        </FormSelect>
    )
}
