import {
    Card,
    CardHeader,
    Divider,
    makeStyles,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from "@material-ui/core";
import {useEffect} from "react";
import {loadTasks} from "../task/loadTasks";
import {Task} from "../task/task";
import {tasksLoaded, loadTasks as startLoadTasks, State as UserTasksState} from "./userTaskSlise";
import {useDispatch, useSelector} from "react-redux";

export interface UserTasksTableProps {
    userId: string;
}

const useClasses = makeStyles((theme) => ({
    userTableContainer: {
        margin: theme.spacing(2)
    },
}));

export const UserTasksTable = () => {
    const dispatch = useDispatch();

    const { isLoading, tasks } = useSelector((state: any) => state.userTasks as UserTasksState);

    useEffect(() => {
        dispatch(startLoadTasks());
        loadTasks({}).then((data: Task[]) => tasksLoaded({ tasks: data }))
    });

    const classes = useClasses();

    return (
        <Card className={classes.userTableContainer}>
            <CardHeader title="Current tasks" />
            <Divider />
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            ID
                        </TableCell>
                        <TableCell>
                            TITLE
                        </TableCell>
                        <TableCell>
                            STATUS
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        tasks.map((task) => (
                            <TableRow key={task.id}>
                                <TableCell> { task.id }</TableCell>
                                <TableCell> { task.title }</TableCell>
                                <TableCell> { task.status.name }</TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </Card>
    )
}
