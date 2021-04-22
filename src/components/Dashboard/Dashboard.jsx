import {NavLink, Link, Route, Switch, useRouteMatch} from "react-router-dom";
// Components
import RepairHistory from "../RepairHistory/RepairHistory";
import NavigationBar from "./NavigationBar";
// Styles
import './Dashboards.styles.scss';
import {Navbar, Nav} from 'react-bootstrap';

const Dashboard = () => {
    const {path, url} = useRouteMatch();
    console.log(path);
    console.log(url);

    return (
        <>
            <NavigationBar />

            <Switch>
                <Route exact path={`${url}`}>
                    <div>
                        Informacje o samochodzie
                    </div>
                </Route>
                <Route path={`${url}/repair-history`}>
                    <RepairHistory/>
                </Route>
                <Route path={`${url}/scheduled-list`}>
                    <div>
                        Todo list
                    </div>
                </Route>
            </Switch>



        </>
    )
}

export default Dashboard;