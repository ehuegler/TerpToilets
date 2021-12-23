import { useState } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import Link from 'next/link'
import styles from '../styles/Header.module.css'

export default function Header() {
    const [nav, setNav] = useState(false)

    const toggleNav = () => {
        setNav(!nav)
    }

    return (
        <header>
            <Navbar expand="lg" expanded={nav}>
                <Container>
                    <Navbar.Brand>
                        Brand
                    </Navbar.Brand>
                    <div className={nav ? styles.menu_toggle : styles.menu_toggle} onClick={toggleNav}>
                        <i className={nav ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                    <Navbar.Collapse onClick={toggleNav}>
                        <Nav>
                            <Link href="/"><a className='nav-link'>Home</a></Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}