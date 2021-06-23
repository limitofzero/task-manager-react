import {TextFieldProps} from "@material-ui/core/TextField/TextField";
import {Control, Controller, FieldValues} from "react-hook-form";
import {TextField} from "@material-ui/core";
import React from "react";

interface ControlProps {
    control: Control<FieldValues>;
    label: string;
    name: string;
}

export type FormTextFieldProps = ControlProps & TextFieldProps;

export const FormTextField = ({ control, name, label,  ...props }: FormTextFieldProps) => {
    return (
        <Controller name={name}
                    control={control}
                    render={({ field }) => <TextField {...field}
                                                      label={label}
                                                      { ...props }
                    />}
        />
    )
}
