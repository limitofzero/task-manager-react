import {Control, FieldValues} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {loadTaskTypes} from "../../task-type/loadTaskTypes";
import {finishLoadTaskTypes, State as TaskTypesState } from "../../task-type/taskTypeSlice";
import {FormSelect} from "../../../controls/FormSelect";
import {MenuItem} from "@material-ui/core";
import * as React from "react";
import {FormControlProps} from "@material-ui/core/FormControl/FormControl";

export interface TaskTypesSelectorProps extends FormControlProps {
    control: Control<FieldValues>;
    name: string;
}

export const TaskTypesSelector = ({ name, control, ...props }: TaskTypesSelectorProps) => {
    const dispatch = useDispatch();

    const { types } = useSelector((state: any) => state.taskTypes as TaskTypesState);

    useEffect(() => {
        loadTaskTypes().then(taskTypes => {
            dispatch(finishLoadTaskTypes({ taskTypes }));
        });
    }, []);

    return (
        <FormSelect control={control}
                    name={name}
                    defaultValue=""
                    label="Type"
                    {...props}>
            <MenuItem value="">
                <em>None</em>
            </MenuItem>
            {
                types.map(taskType => (
                    <MenuItem key={taskType.id} value={taskType.id}>
                        { taskType.name }
                    </MenuItem>
                ))
            }
        </FormSelect>
    )
}
