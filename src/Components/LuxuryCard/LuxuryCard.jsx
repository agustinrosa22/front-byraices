import React from 'react';
import { Card, Button } from 'react-bootstrap';
import luxuryimage from '../../Assets/luxury.jpeg';
import tituloLuxury from '../../Assets/tituloluxury.png';
import style from './LuxuryCard.module.css';

import logoByraices from '../../Assets/titulo.png';

const LuxuryCard = () => {
  return (
    <div className={style.carddesarrollo}>
    <img src={luxuryimage} alt="Background" className={style.backgroundimage} />
    <div className={style.overlay}>
      <img src={logoByraices} alt="Isologo" className={style.isologo} />
      <img src={tituloLuxury} alt="Título" className={style.titulo}/>
      <button className={style.verdesarrollosbtn} onClick={() => window.location.href='/luxury'}>VER DESARROLLOS</button>
    </div>
  </div>
  
  );
}

export default LuxuryCard;
