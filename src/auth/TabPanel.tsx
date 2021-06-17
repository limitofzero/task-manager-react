import { Box, Typography } from "@material-ui/core";
import { ReactNode } from "react";

export interface Props {
    children: ReactNode;
    index: number;
    value: number;
}

export function TabPanel(props: Props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography component={'span'}>{children}</Typography>
                </Box>
            )}
        </div>
    );
}
