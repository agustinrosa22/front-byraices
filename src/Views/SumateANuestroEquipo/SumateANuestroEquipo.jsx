import React from 'react';
import styles from './SumateANuestroEquipo.module.css';
import logo from '../../Assets/logocompleto.png'

const SumateANuestroEquipo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>SUMATE A NUESTRO EQUIPO.</h1>
        <p className={styles.description}>
          Estamos buscando personas con perfil comercial, apasionados por la negociación y que tengan gran ambición de crecer.
        </p>
        <ul className={styles.list}>
          <li>Experiencia en ventas.</li>
          <li>Ambición personal y capacidad de autogestión.</li>
          <li>Habilidad para trabajar de manera independiente.</li>
        </ul>
        <div className={styles.contact}>
          <p>ENVIANOS TU CV A</p>
          <a href="mailto:byraices@byraices.com" className={styles.email}>byraices@byraices.com</a>
        </div>
      </div>
      <div className={styles.footer}>
  <div className={styles.logoContainer}>
    <img src={logo} alt="Logo" className={styles.logo} />
  </div>
</div>
    </div>
  );
}

export default SumateANuestroEquipo;
