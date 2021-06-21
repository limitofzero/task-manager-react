import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {finishLoadProjects, startLoadProjects, State} from "../../project/userProjectsSlice";
import {loadProjects} from "../../project/loadProjects";
import {MenuItem} from "@material-ui/core";
import * as React from "react";
import {Control, FieldValues } from "react-hook-form";
import {FormSelect} from "../../../controls/FormSelect";
import {FormControlProps} from "@material-ui/core/FormControl/FormControl";

export interface ProjectSelectorProps extends FormControlProps {
    userId: string;
    control: Control<FieldValues>;
    name: string;
}

export const ProjectSelector = ({ userId, control, name, ...props }: ProjectSelectorProps) => {
    const dispatch = useDispatch();

    const { projects } = useSelector((state: any) => state.userProjects as State);

    useEffect(() => {
        dispatch(startLoadProjects());
        loadProjects({ userId }).then(projects => {
            dispatch(finishLoadProjects(projects));
        });
    }, [userId]);

    return (
        <FormSelect control={control}
                    label="Project"
                    name={name}
                    defaultValue=""
                    {...props}>
            <MenuItem value="">
                <em>None</em>
            </MenuItem>
            {
                projects.map(project => (
                    <MenuItem key={project.id} value={project.id}>{ project.name }</MenuItem>
                ))
            }
        </FormSelect>
    )
}
