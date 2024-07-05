import React from 'react';
import buildingImage from '../../Assets/equipodetrabajo.jpeg'; // Reemplaza con la ruta correcta
import isologoImage from '../../Assets/logoByraices.png'; // Reemplaza con la ruta correcta
import logocompleto from '../../Assets/logocompleto.png'
import style from './ContactUs.module.css';

const ContactUs = () => {
  return (
    <div className={style.carddesarrollo}>
      <img src={buildingImage} alt="Background" className={style.backgroundimage} />
      <div className={style.overlay}>
        <h2 className={style.titulo}>¿Quiénes somos?</h2>
        <img className={style.byraicesImg} src={logocompleto} alt="" />
        <button className={style.verdesarrollosbtn} onClick={() => window.location.href='/desarrollo'} >CONOCENOS</button>
      </div>
    </div>
  );
};

export default ContactUs;
