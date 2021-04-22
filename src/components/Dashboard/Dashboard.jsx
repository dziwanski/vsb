import {NavLink, Route, Switch, useRouteMatch} from "react-router-dom";
import List from "../List/List";
// Styles
import './Dashboards.styles.scss';

const Dashboard = () => {
    const {path, url} = useRouteMatch();
    console.log(path);
    console.log(url);

    return (
        <>
            <nav className='navigation-panel'>
                <NavLink to={`${url}`}>Informations</NavLink>
                <NavLink to={`${url}/repair-history`}>Repair history</NavLink>
                <NavLink to={`${url}/scheduled-list`}>Scheduled works</NavLink>
            </nav>

            <Switch>
                <Route exact path={`${url}`}>
                    <div>
                        Informacje o samochodzie
                    </div>
                </Route>
                <Route path={`${url}/repair-history`}>
                    <List/>
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