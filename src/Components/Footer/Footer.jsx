import React from "react";
import styles from './Footer.module.css'
// import twitter from '../../Assets/gorjeo.png'
import facebook from '../../Assets/facebook.png'
import instagram from '../../Assets/instagram.png'
import linkedin from '../../Assets/linkedin.png'

const Footer = () => {
    return (
        <div className={styles.footerContainer}>
        <div className={styles.socialMedia}>
            <a href="https://www.facebook.com/" className={styles.socialIcon}>
                <img src={facebook} alt="Facebook" className={styles.socialImage} />
            </a>
            <a href="https://www.instagram.com/byraicesoficial/" className={styles.socialIcon}>
                <img src={instagram} alt="Instagram" className={styles.socialImage} />
            </a>
            {/* <a href="https://twitter.com/" className={styles.socialIcon}>
                <img src={twitter} alt="Twitter" className={styles.socialImage} />
            </a> */}
            <a href="https://www.linkedin.com/company/byraices/mycompany/" className={styles.socialIcon}>
                <img src={linkedin} alt="LinkedIn" className={styles.socialImage} />
            </a>
        </div>
    </div>
    )
}

export default Footer;