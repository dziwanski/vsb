import {Route, Redirect} from "react-router";

const PrivateRoute = ({component: Component, ...rest}) => {
    const currentUser = 'userName'; // TODO: Pobrać użytkownika ze store.user

    return (
        <Route
            {...rest}
            render={props => {
                return currentUser ? <Component {...props} /> : <Redirect to="/login"/>
            }}/>
    )
}

export default PrivateRoute;