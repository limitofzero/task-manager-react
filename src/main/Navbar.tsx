import {MouseEventHandler, useState} from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
    AppBar,
    Badge,
    Box,
    IconButton,
    Toolbar,
    Hidden
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';
import Logo from "../Logo";
import {CreateTaskModal} from "./create-task-window/CreateTaskModal";

export interface NavbarProps {
    onMobileNavOpen: MouseEventHandler,
};


export const Navbar = ({ onMobileNavOpen, ...rest }: NavbarProps) => {
    const [notifications] = useState([]);

    return (
        <AppBar
            elevation={0}
            {...rest}
        >
            <Toolbar>
                <RouterLink to="/">
                    <Logo />
                </RouterLink>
                <Box flexGrow={1}/>
                <CreateTaskModal/>
                <Hidden mdDown={true}>
                    <IconButton color="inherit">
                        <Badge
                            badgeContent={notifications.length}
                            color="primary"
                            variant="dot"
                        >
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                    <IconButton color="inherit">
                        <InputIcon />
                    </IconButton>
                </Hidden>
                <Hidden lgUp={true}>
                    <IconButton
                        color="inherit"
                        onClick={onMobileNavOpen}
                    >
                        <MenuIcon />
                    </IconButton>
                </Hidden>
            </Toolbar>
        </AppBar>
    );
};
