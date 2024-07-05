import React from 'react';
import buildingImage from '../../Assets/build.jpeg'; // Reemplaza con la ruta correcta
import isologoImage from '../../Assets/logoByraices.png'; // Reemplaza con la ruta correcta
import style from './CardDesarrollo.module.css';

const CardDesarrollo = () => {
  return (
    <div className={style.carddesarrollo}>
      <img src={buildingImage} alt="Background" className={style.backgroundimage} />
      <div className={style.overlay}>
        <img src={isologoImage} alt="Isologo" className={style.isologo} />
        <h2 className={style.titulo}>Desarrollos</h2>
        <p className={style.text}>
          En By Raices, nos especializamos en ofrecer desarrollos inmobiliarios de la más alta calidad.
          Nuestra misión es ayudarte a encontrar el hogar de tus sueños o la inversión perfecta.
          Con una amplia variedad de propiedades disponibles y desarrollos inmobiliarios,
          estamos seguros de que tenemos lo que buscas.
        </p>
        <button className={style.verdesarrollosbtn} onClick={() => window.location.href='/desarrollo'} >VER DESARROLLOS</button>
      </div>
    </div>
  );
};

export default CardDesarrollo;
