import React from 'react';
import styles from './QuienesSomos.module.css';

const QuienesSomos = () => {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <div className={styles.title}>¿QUIÉNES SOMOS?</div>
        <p className={styles.text}>
          Somos una empresa en pleno desarrollo y crecimiento, con más de cinco años de experiencia.
          Buscamos brindar un profesional y excelente servicio a nuestros clientes a través de
          nuestros agentes inmobiliarios y nuestros fuertes desarrollos tecnológicos.
        </p>
      </div>
      <div className={styles.section}>
        <div className={styles.title}>¿CÓMO TRABAJAMOS?</div>
        <p className={styles.text}>
          Bajo la marca By Raics traemos una propuesta nueva en el mercado a través de nuestro trabajo
          en red el cual nos permite compartir y concretar negocios a nivel local y nacional. Todas las
          operaciones son realizadas y supervisadas por nuestros corredores públicos matriculados.
        </p>
      </div>
    </div>
  );
}

export default QuienesSomos;
