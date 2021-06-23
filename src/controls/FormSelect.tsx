import {Control, FieldValues} from "react-hook-form";
import {FormControlProps} from "@material-ui/core/FormControl/FormControl";
import {FormControl, InputLabel, Select} from "@material-ui/core";
import { Controller } from "react-hook-form";
import {ReactNode} from "react";
import * as React from "react";

export interface HookSelectProps extends FormControlProps {
    control: Control<FieldValues>;
    name: string;
    defaultValue: any;
    label: string;
    children: ReactNode;
}

export const FormSelect = ({ control, name, defaultValue, label, children, ...props }: HookSelectProps) => {
    const labelId = `${name}-label`;

    return (
        <FormControl { ...props }>
            <InputLabel id={labelId}>{ label }</InputLabel>
            <Controller name={name}
                        defaultValue={defaultValue}
                        control={control} render={({ field }) => (
                            <Select labelId={labelId} label={label} {...field}>
                                { children }
                            </Select>
            )}/>
        </FormControl>
    );
}
