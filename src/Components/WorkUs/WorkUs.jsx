import React from 'react';
import luxuryimage from '../../Assets/estrecharmanos.jpeg';
import style from './WorkUs.module.css';
import logoByraices from '../../Assets/titulo.png';

const WorkUs = () => {
  return (
    <div className={style.carddesarrollo}>
    <img src={luxuryimage} alt="Background" className={style.backgroundimage} />
    <div className={style.overlay}>
      <img src={logoByraices} alt="Isologo" className={style.isologo} />
      <h2 className={style.titulo}>Trabaja con nosotros</h2>
      <p className={style.text}>Si eres una persona apasionada por los negocios y con una gran ambición de crecer escríbenos.</p>
      <button className={style.verdesarrollosbtn} onClick={() => window.location.href='/SumateANuestroEquipo'}>CONTACTANOS</button>
    </div>
  </div>
  
  );
}

export default WorkUs;
