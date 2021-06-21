import {Button, Card, CardHeader, createStyles, makeStyles} from "@material-ui/core";
import {ProjectSelector} from "./controls/ProjectSelector";
import {useForm} from "react-hook-form";
import React from "react";
import {TaskTypesSelector} from "./controls/TaskTypesSelector";

const useStyles = makeStyles((theme) =>
    createStyles({
        paper: {
            backgroundColor: theme.palette.background.paper,
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
            minWidth: '30em'
        },
        control: {
            marginBottom: theme.spacing(2),
        }
    }),
);

export const CreateTask = () => {
    const classes = useStyles();
    const { control, handleSubmit } = useForm();
    const userId = 'af273cc5-3960-49bf-9d63-382712280d6f'; // todo remove

    const onSubmit = (form: { projectId: string }) => {
        console.log(form);
    }

    return (
        <Card className={classes.paper}>
            <CardHeader title="Create task"/>
            <form noValidate onSubmit={handleSubmit(onSubmit)}>
                <ProjectSelector control={control}
                                 name="projectId"
                                 fullWidth
                                 variant="outlined"
                                 className={classes.control}
                                 userId={userId}/>
                <TaskTypesSelector control={control}
                                   fullWidth
                                   variant="outlined"
                                   className={classes.control}
                                   name="taskTypeId"/>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                >
                    Create
                </Button>
            </form>
        </Card>
    )
}
