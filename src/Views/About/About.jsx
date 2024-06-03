import React from 'react';
import logo from '../../Assets/titulo.png'
import styles from "./About.module.css"

const About = () => {
  return (
    <div className={styles.container}>
        <div className={styles.imgContainer}>
        <img className={styles.img}  src={logo} alt="" />
        </div>
    <p className={styles.text}>
      Somos una empresa familiar en pleno crecimiento, con más de 4 años de experiencia, fortaleciendo nuestra profesionalidad y emergiendo en esta propuesta nueva en el mercado bajo la marca By Raíces. Una marca propia y con fuertes desarrollos tecnológicos, buscando insertarnos en los próximos años en toda Argentina y posteriormente en América, por canales de Franquicias bajo nuestra marca, con bróker y corredores especializados.
    </p>
  </div>
  );
};

export default About;
