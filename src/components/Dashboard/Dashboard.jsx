import {NavLink, Link, Route, Switch, useRouteMatch} from "react-router-dom";
import RepairHistory from "../RepairHistory/RepairHistory";
// Styles
import './Dashboards.styles.scss';
import {Navbar, Nav} from 'react-bootstrap';

const Dashboard = () => {
    const {path, url} = useRouteMatch();
    console.log(path);
    console.log(url);

    return (
        <>
            {/*<nav className='navigation-panel'>*/}
            {/*    <NavLink to={`${url}`}>Informations</NavLink>*/}
            {/*    <NavLink to={`${url}/repair-history`}>Repair history</NavLink>*/}
            {/*    <NavLink to={`${url}/scheduled-list`}>Scheduled works</NavLink>*/}
            {/*</nav>*/}

            <Navbar sticky="top" bg="dark" variant="dark">
                <Navbar.Brand href="#home">Service Book</Navbar.Brand>
                <Nav className="ml-auto mr-auto">
                    <Nav.Link as={Link} to={`${url}`}>Information</Nav.Link>
                    <Nav.Link as={Link} to={`${url}/repair-history`}>Repair history</Nav.Link>
                    <Nav.Link as={Link} to={`${url}/scheduled-list`}>Scheduled works</Nav.Link>
                </Nav>
            </Navbar>

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