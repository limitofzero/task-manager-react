import {Backdrop, createStyles, Fade, IconButton, makeStyles, Modal} from "@material-ui/core";
import {useState} from "react";
import {Add} from "@material-ui/icons";
import {CreateTask} from "./CreateTask";

const useStyles = makeStyles(() =>
    createStyles({
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
    }),
);

export const CreateTaskModal = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleOpen = (): void => {
        setOpen(true);
    };

    const handleClose = (): void => {
        setOpen(false);
    };

    return (
        <>
            <IconButton color="inherit" onClick={handleOpen}>
                <Add/>
            </IconButton>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <CreateTask/>
                </Fade>
            </Modal>
        </>
    )
}
