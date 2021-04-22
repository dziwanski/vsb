import React from "react";
import {Nav, Navbar} from "react-bootstrap";
import {Link, useRouteMatch} from "react-router-dom";

const NavigationBar = () => {
    const {url} = useRouteMatch();

    return (
        // <nav className='navigation-panel'>
        //     <NavLink to={`${url}`}>Informations</NavLink>
        //     <NavLink to={`${url}/repair-history`}>Repair history</NavLink>
        //     <NavLink to={`${url}/scheduled-list`}>Scheduled works</NavLink>
        // </nav>
        <Navbar sticky="top" bg="dark" variant="dark">
            <Navbar.Brand href="#home">Service Book</Navbar.Brand>
            <Nav className="ml-auto mr-auto">
                <Nav.Link as={Link} to={`${url}`}>Information</Nav.Link>
                <Nav.Link as={Link} to={`${url}/repair-history`}>Repair history</Nav.Link>
                <Nav.Link as={Link} to={`${url}/scheduled-list`}>Scheduled works</Nav.Link>
            </Nav>
        </Navbar>
    );
}

export default NavigationBar;