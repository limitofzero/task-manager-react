import { useState } from 'react';
import {Navbar} from "./Navbar";
import {styled} from "@material-ui/core";
import {UserTasksTable} from "./user-task-table/UserTasksTable";

const LayoutRoot = styled('div')(
    ({ theme }) => ({
        backgroundColor: theme.palette.background.default,
        display: 'flex',
        height: '100%',
        overflow: 'hidden',
        width: '100%'
    })
);

const LayoutWrapper = styled('div')(
    ({ theme }) => ({
        display: 'flex',
        flex: '1 1 auto',
        overflow: 'hidden',
        paddingTop: 64,
        [theme.breakpoints.up('lg')]: {
            paddingLeft: 256
        }
    })
);

const LayoutContainer = styled('div')({
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden'
});

const LayoutContent = styled('div')({
    flex: '1 1 auto',
    height: '100%',
    overflow: 'auto'
});

export const MainLayout = () => {
    const [isMobileNavOpen, setMobileNavOpen] = useState(false);

    return (
        <LayoutRoot>
            <Navbar onMobileNavOpen={() => setMobileNavOpen(true)} />
            <LayoutWrapper>
                <LayoutContainer>
                    <LayoutContent>
                        <UserTasksTable/>
                    </LayoutContent>
                </LayoutContainer>
            </LayoutWrapper>
        </LayoutRoot>
    );
};
