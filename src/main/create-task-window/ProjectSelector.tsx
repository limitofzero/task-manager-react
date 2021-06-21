import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {finishLoadProjects, startLoadProjects, State} from "../project/userProjectsSlice";
import {loadProjects} from "../project/loadProjects";
import {FormControl, InputLabel, MenuItem, Select} from "@material-ui/core";
import * as React from "react";
import {Control, FieldValues, Controller } from "react-hook-form";
import {FormSelect} from "../../controls/FormSelect";

export interface ProjectSelectorProps {
    userId: string;
    control: Control<FieldValues>;
    name: string;
    defaultValue?: string;
}

export const ProjectSelector = ({ userId, control, name, defaultValue }: ProjectSelectorProps) => {
    const dispatch = useDispatch();

    const { isLoading, projects } = useSelector((state: any) => state.userProjects as State);

    useEffect(() => {
        dispatch(startLoadProjects());
        loadProjects({ userId }).then(projects => {
            dispatch(finishLoadProjects(projects));
        });
    }, [userId]);

    return (
        <FormSelect control={control}
                    label="project"
                    name={name}
                    defaultValue=""
                    variant="outlined"
                    fullWidth>
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
