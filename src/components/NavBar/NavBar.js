import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { LinkContainer } from 'react-router-bootstrap' 

const NavBar = (props) => {
    return (
        <div>
        <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">Town</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <LinkContainer to="/">
                <Nav.Link>Accueil</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/localisation">
                <Nav.Link>Localisation</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
                <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
        </div>
    )
}

export default NavBar
