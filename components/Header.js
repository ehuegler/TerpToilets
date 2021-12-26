import { useState } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import Link from 'next/link'
import styles from '../styles/Header.module.scss'

export default function Header() {
    const [nav, setNav] = useState(false)

    const toggleNav = () => {
        setNav(!nav)
    }

    return (
        <header>
            <Navbar expand="lg" expanded={nav} className={styles.header}>
                <Container>
                    <Navbar.Brand className={styles.brand}>
                        Toilet UMD
                    </Navbar.Brand>
                    <div className={nav ? styles.menu_toggle : styles.menu_toggle} onClick={toggleNav}>
                        <i className={nav ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                    <Navbar.Collapse className={styles.collapse} onClick={toggleNav}>
                        <Nav>
                            <Link href="/"><a className='nav-link'>Home</a></Link>
                            <Link href="/"><a className='nav-link'>Search</a></Link>
                            <Link href="/"><a className='nav-link'>Post</a></Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}