import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {finishLoadProjects, startLoadProjects, State} from "../project/userProjectsSlice";
import {loadProjects} from "../project/loadProjects";
import {FormControl, InputLabel, MenuItem, Select} from "@material-ui/core";
import * as React from "react";
import {Control, FieldValues, Controller } from "react-hook-form";

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
        <FormControl variant="outlined" fullWidth>
            <InputLabel id="user-projects">Projects</InputLabel>
            <Controller control={control}
                        name={name}
                        defaultValue={defaultValue}
                        render={({ field }) => <Select
                    { ...field }
                    labelId="user-projects"
                    id="demo-simple-select-outlined">
                    <MenuItem value="">
                        <em></em>
                    </MenuItem>
                    {
                        projects.map(project => (
                            <MenuItem value={project.id}>{ project.name }</MenuItem>
                        ))
                    }
                </Select>
            }
            />
        </FormControl>
    )
}
