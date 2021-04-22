import {NavLink, Link, Route, Switch, useRouteMatch} from "react-router-dom";
// Components
import RepairHistory from "../RepairHistory/RepairHistory";
import NavigationBar from "./NavigationBar";
// Styles
import './Dashboards.styles.scss';
import {Navbar, Nav} from 'react-bootstrap';

const Dashboard = () => {
    const {path, url} = useRouteMatch();

    return (
        <>
            <NavigationBar />

            <Switch>
                <Route exact path={`${url}`}>
                    <div>
                        TODO: Information about car
                    </div>
                </Route>
                <Route path={`${url}/repair-history`}>
                    <RepairHistory/>
                </Route>
                <Route path={`${url}/scheduled-list`}>
                    <div>
                        TODO: List of scheduled task
                    </div>
                </Route>
            </Switch>
        </>
    )
}

export default Dashboard;