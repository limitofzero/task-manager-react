import {Route, Redirect} from "react-router-dom";
import {ReactNode} from "react";
import {RouteProps} from "react-router";

export interface GuardProps extends RouteProps {
    children: ReactNode,
    isActive: () => boolean,
    redirectTo: string;
}

export function GuardedRoute({ children, isActive, redirectTo, ...rest }: GuardProps) {
    return (
        <Route { ...rest }>
            { isActive() ? children : <Redirect to={redirectTo}/> }
        </Route>
    )
}
