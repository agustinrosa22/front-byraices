import React from 'react';
import CardContainerForLuxury from '../../Components/CardContainerForLuxury/CardContainerForLuxury';
import style from './Luxury.module.css'

const Luxury = () => {
  return (
    <div className={style.container}>
      <CardContainerForLuxury />
    </div>
  );
};

export default Luxury;
