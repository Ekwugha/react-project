// import React from 'react';

import React, { Component } from 'react'
import { Container, NavDropdown, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// import React, { Component } from 'react'

export default class CustomNavbar extends Component {
    render() {
        return (
            <Navbar bg="secondary" expand="md" sticky="top">
                <Container>
                    <Navbar.Brand as={Link} to="/" className='text-light'>React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Link as={Link} to="/" className='text-light'>Home</Nav.Link>
                        <Nav.Link as={Link} to="/about" className='text-light'>About</Nav.Link>
                        <Nav.Link as={Link} to="/news" className='text-light'>News</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}
