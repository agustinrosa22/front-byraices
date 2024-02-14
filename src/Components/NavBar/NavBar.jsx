import React, { useState }  from "react";
import styles from './NavBar.module.css'
import { NavLink } from "react-router-dom";
import logo from '../../Assets/tituloNuevo.png'

const NavBar = ()=> {
    const [activeLink, setActiveLink] = useState(null);

    const handleNavLinkClick = (link) => {
        setActiveLink(link);
    };
    return(
        <div className={styles.navContainer}>
        <nav className={styles.navbar}>
            <div className={styles.leftSection}>
                <img src={logo} alt="" className={styles.img}/>
            </div>
            <div className={styles.navLinks}>
                <NavLink to='/' activeClassName={styles.activeLink} exact onClick={() => handleNavLinkClick('home')} className={activeLink === 'home' ? styles.active : ''}>
                    Home
                </NavLink>
                <NavLink to='/comprar' activeClassName={styles.activeLink} onClick={() => handleNavLinkClick('comprar')} className={activeLink === 'comprar' ? styles.active : ''}>
                    Comprar
                </NavLink>
                <NavLink to='/sell' activeClassName={styles.activeLink} onClick={() => handleNavLinkClick('vender')} className={activeLink === 'vender' ? styles.active : ''}>
                    Vender
                </NavLink>
                <NavLink to='/alquilar' activeClassName={styles.activeLink} onClick={() => handleNavLinkClick('alquilar')} className={activeLink === 'alquilar' ? styles.active : ''}>
                    Alquilar
                </NavLink>
                <NavLink to='/contact' activeClassName={styles.activeLink} onClick={() => handleNavLinkClick('contacto')} className={activeLink === 'contacto' ? styles.active : ''}>
                    Emprendimientos
                </NavLink>

                <NavLink to='/contact' activeClassName={styles.activeLink} onClick={() => handleNavLinkClick('contacto')} className={activeLink === 'contacto' ? styles.active : ''}>
                    Franquicias
                </NavLink>

                <NavLink to='/contact' activeClassName={styles.activeLink} onClick={() => handleNavLinkClick('contacto')} className={activeLink === 'contacto' ? styles.active : ''}>
                    Contacto
                </NavLink>
            </div>
            <div className={styles.rightSection}>
                <NavLink to='/login' activeClassName={styles.activeLink} className={styles.butonexit}>
                    Iniciar Sesión
                </NavLink>
            </div>
        </nav>
    </div>
    )
}

export default NavBar;
