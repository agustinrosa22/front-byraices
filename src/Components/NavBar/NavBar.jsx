import React from "react";
import styles from './NavBar.module.css'
import { NavLink } from "react-router-dom";
import logo from '../../Assets/titulo.png'

const NavBar = ()=> {
    return(
        <div className={styles.navContainer}>
            <nav className={styles.navbar}>
                <div className={styles.leftSection}>
                  <img src={logo} alt="" className={styles.img}/>
                </div>
                <div className={styles.navLinks}>
                    <NavLink to='/' activeClassName={styles.activeLink} exact>
                        Home
                    </NavLink>
                    <NavLink to='/comprar' activeClassName={styles.activeLink}>
                        Comprar
                    </NavLink>
                    <NavLink to='/vender' activeClassName={styles.activeLink}>
                        Vender
                    </NavLink>
                    <NavLink to='/alquilar' activeClassName={styles.activeLink}>
                        Alquilar
                    </NavLink>
                    <NavLink to='/contacto' activeClassName={styles.activeLink}>
                        Contacto
                    </NavLink>
                </div>
                <div className={styles.rightSection}>
                    <NavLink to='/inicio-sesion' activeClassName={styles.loginbuton} className={styles.butonexit}>
                        Iniciar Sesión
                    </NavLink>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;
