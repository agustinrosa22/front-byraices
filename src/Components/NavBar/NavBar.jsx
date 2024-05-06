import React, { useState } from "react";
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../../Assets/titulo.png';
import styles from './NavBar.module.css';

const NavBar = () => {
    const [activeLink, setActiveLink] = useState(null);

    const handleNavLinkClick = (link) => {
        setActiveLink(link);
        console.log("activeLink actualizado:", link);
        setTimeout(() => {
            console.clear(); // Limpiar la consola después de 3 segundos
        }, 3000); // Tiempo en milisegundos
    };    

    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Navbar.Brand href="/">
                <img src={logo} alt="" className={styles.img} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/" onClick={() => handleNavLinkClick('home')} className={activeLink === 'home' ? styles.active : ''}>
                        Home
                    </Nav.Link>
                    <Nav.Link href="/sale" onClick={() => handleNavLinkClick('comprar')} className={activeLink === 'comprar' ? styles.active : ''}>
                        Comprar
                    </Nav.Link>
                    <Nav.Link href="/sell" onClick={() => handleNavLinkClick('vender')} className={activeLink === 'vender' ? styles.active : ''}>
                        Vender
                    </Nav.Link>
                    <Nav.Link href="/rent" onClick={() => handleNavLinkClick('alquilar')} className={activeLink === 'alquilar' ? styles.active : ''}>
                        Alquilar
                    </Nav.Link>
                    <Nav.Link href="/desarrollo" onClick={() => handleNavLinkClick('desarrollo')} className={activeLink === 'desarrollo' ? styles.active : ''}>
                        Desarrollos
                    </Nav.Link>
                    <Nav.Link href="/franquicias" onClick={() => handleNavLinkClick('franquicias')} className={activeLink === 'franquicias' ? styles.active : ''}>
                        Franquicias
                    </Nav.Link>
                    <Nav.Link href="/contact" onClick={() => handleNavLinkClick('contacto')} className={activeLink === 'contacto' ? styles.active : ''}>
                        Contacto
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;
