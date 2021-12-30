import { useState } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { FaBars, FaTimes } from 'react-icons/fa'
import Link from 'next/link'
import styles from '../styles/components/Header.module.scss'

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
                        {nav ? <FaTimes/> : <FaBars/>}
                    </div>
                    <Navbar.Collapse className={styles.collapse} onClick={toggleNav}>
                        <Nav>
                            <Link href="/"><a className={`${styles.nav_link} nav-link`}>Home</a></Link>
                            <Link href="/"><a className={`${styles.nav_link} nav-link`}>Search</a></Link>
                            <Link href="/"><a className={`${styles.nav_link} nav-link`}>Post</a></Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}