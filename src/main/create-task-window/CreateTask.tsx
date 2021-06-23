import {Button, Card, CardHeader, createStyles, makeStyles} from "@material-ui/core";
import {ProjectSelector} from "./controls/ProjectSelector";
import {useForm} from "react-hook-form";
import {TaskTypesSelector} from "./controls/TaskTypesSelector";
import {ProjectUsersSelector} from "./controls/ProjectUsersSelector";
import {FormTextField} from "../../controls/FormTextField";
import { CreateTask as CreateTaskOptions, createTask} from "../task/createTask";

const useStyles = makeStyles((theme) =>
    createStyles({
        paper: {
            backgroundColor: theme.palette.background.paper,
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
            maxWidth: '30em'
        },
        submit: {
            display: 'flex',
            justifyContent: 'flex-end',
        }
    }),
);

export interface CreateTaskProps {
    onCreateTask: () => void;
}

export const CreateTask = ({ onCreateTask }: CreateTaskProps) => {
    const classes = useStyles();
    const { control, handleSubmit, watch } = useForm();

    const projectId: string = watch('projectId')
    const userId = 'af273cc5-3960-49bf-9d63-382712280d6f'; // todo remove

    const onSubmit = async (form: Omit<CreateTaskOptions, 'statusId' | 'userId'>) => {
        try {
            await createTask({ ...form, creatorId: userId, statusId: 1 });
            onCreateTask();
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <Card className={classes.paper}>
            <CardHeader title="Create task"/>
            <form noValidate onSubmit={handleSubmit(onSubmit)}>
                <ProjectSelector control={control}
                                 name="projectId"
                                 fullWidth
                                 variant="outlined"
                                 margin="normal"
                                 required
                                 userId={userId}/>
                <TaskTypesSelector control={control}
                                   fullWidth
                                   variant="outlined"
                                   margin="normal"
                                   required
                                   name="typeId"/>
                <ProjectUsersSelector projectId={projectId}
                                      control={control}
                                      name="performerId"
                                      fullWidth
                                      margin="normal"
                                      variant="outlined"/>
                <FormTextField control={control}
                               label="Title"
                               name="title"
                               variant="outlined"
                               margin="normal"
                               defaultValue=""
                               required
                               fullWidth/>
                <FormTextField control={control}
                               label="Description"
                               multiline
                               fullWidth
                               margin="normal"
                               variant="outlined"
                               rows={5}
                               defaultValue=""
                               name="description"/>
                <div className={classes.submit}>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Create
                    </Button>
                </div>
            </form>
        </Card>
    )
}
