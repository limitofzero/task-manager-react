import {
    NavLink as RouterLink,
} from 'react-router-dom';
import { Button, ListItem } from '@material-ui/core';
import {ElementType} from "react";

export interface NavItemProps {
    href: string;
    icon: ElementType,
    title: string,
    iconName: string
}

export const NavItem = ({
    href,
    icon: Icon,
    title,
    iconName,
    ...rest
}: NavItemProps) => {

    return (
        <ListItem
            disableGutters
            {...rest}
        >
            <Button
                component={RouterLink}
                to={href}>
                {Icon && (
                    <Icon size="20">{{ iconName }}</Icon>
                )}
                <span>
          {title}
        </span>
            </Button>
        </ListItem>
    );
};
