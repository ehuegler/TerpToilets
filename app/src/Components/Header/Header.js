import React, { useState } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import './Header.scss'

function Header() {
    const [navActive, setNavActive] = useState(false)

    const toggleNav = () => {
        setNavActive(!navActive)
    }

    return (
        <Navbar bg="light" expand="md" expanded={navActive}>
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <div className={navActive ? "menu-toggle active" : "menu-toggle"} onClick={toggleNav}>
                    <i className={navActive ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
