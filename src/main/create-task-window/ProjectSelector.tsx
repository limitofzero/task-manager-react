import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {finishLoadProjects, startLoadProjects, State} from "../project/userProjectsSlice";
import {loadProjects} from "../project/loadProjects";
import {FormControl, InputLabel, MenuItem, Select} from "@material-ui/core";
import * as React from "react";

export interface ProjectSelectorProps {
    userId: string;
}

export const ProjectSelector = ({ userId }: ProjectSelectorProps) => {
    const dispatch = useDispatch();

    const { isLoading, projects } = useSelector((state: any) => state.userProjects as State);

    const [projectId, setProjectId] = useState<string>('');

    const handleChange = (
        event: React.ChangeEvent<{ name?: string; value: unknown }>,
        child: React.ReactNode
    ) => {
        setProjectId(event.target.value as string);
    }

    useEffect(() => {
        dispatch(startLoadProjects());
        loadProjects({ userId }).then(projects => {
            dispatch(finishLoadProjects(projects));
        });
    }, [userId]);

    return (
        <FormControl variant="outlined">
            <InputLabel id="user-projects">Projects</InputLabel>
            <Select
                labelId="user-projects"
                id="demo-simple-select-outlined"
                value={projectId}
                onChange={handleChange}
                label="Age"
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                {
                    projects.map(project => (
                        <MenuItem value={project.id}>{ project.name }</MenuItem>
                    ))
                }
            </Select>
        </FormControl>
    )
}
