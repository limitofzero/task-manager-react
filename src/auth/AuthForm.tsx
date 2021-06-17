import {
    Avatar,
    Container,
    CssBaseline,
    makeStyles,
    Typography
} from "@material-ui/core";
import React, {ReactNode} from "react";

export interface Props {
    title: string;
    children: ReactNode;
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
}));


export function AuthForm({ children, title }: Props) {
    const classes = useStyles();

    return (
       <>
           <Container component="main" maxWidth="xs">
               <CssBaseline />
               <div className={classes.paper}>
                   <Avatar className={classes.avatar}>
                       {/*<LockOutlinedIcon />*/}
                   </Avatar>
                   <Typography component="h1" variant="h5">
                       { title }
                   </Typography>
                   { children }
               </div>
           </Container>
       </>
    );
}
