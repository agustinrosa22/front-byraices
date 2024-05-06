import React from 'react';
import RentCardContainer from '../../Components/CardContainerForRent/CardContainerForRent';
import styles from "./Rent.module.css"

const Rent = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.titulo}>Alquileres</h2>
      <RentCardContainer />
    </div>
  );
};

export default Rent;
