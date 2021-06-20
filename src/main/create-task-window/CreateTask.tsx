import {Card, CardHeader, createStyles, makeStyles} from "@material-ui/core";
import {ProjectSelector} from "./ProjectSelector";

const useStyles = makeStyles((theme) =>
    createStyles({
        paper: {
            backgroundColor: theme.palette.background.paper,
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
            minWidth: '30em'
        },
    }),
);

export const CreateTask = () => {
    const classes = useStyles();
    const userId = 'af273cc5-3960-49bf-9d63-382712280d6f'; // todo remove

    return (
        <Card className={classes.paper}>
            <CardHeader title="Create task"/>
            <ProjectSelector userId={userId}/>
        </Card>
    )
}
