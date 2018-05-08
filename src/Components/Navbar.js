import React from "react";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

const MainNav = () => {
    return (
        <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="#home">Property Development</a>
                </Navbar.Brand>
            </Navbar.Header>
            <Nav pullRight>
                <NavItem eventKey={1} href="#">
                    Login
    </NavItem>
                <NavItem eventKey={2} href="#">
                    Sign Up
    </NavItem>
    <NavItem eventKey={4} href="#">
                    Log Out
    </NavItem>
    <NavItem eventKey={5} href="#">
                    User 1
    </NavItem>
                
            </Nav>
        </Navbar>
    );
}

export default MainNav;