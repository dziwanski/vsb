import {Route, Redirect, RouteProps} from "react-router";
import React from "react";

export type ProtectedRouteProps = {
    isAuthenticated: boolean;
    authenticationPath: string;
} & RouteProps;

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({isAuthenticated, authenticationPath, ...routeProps}) => {
    // const currentUser = 'userName'; // TODO: Pobrać użytkownika ze store.user
    if (isAuthenticated) {
        return <Route {...routeProps} />
    } else {
        return <Redirect to={{pathname: authenticationPath}}/>
    }
    // return (
    //     <Route
    //         {...rest}
    //         render={props => {
    //             return currentUser ? <Component {...props} /> : <Redirect to="/login"/>
    //         }}/>
    // )
}

export default ProtectedRoute;