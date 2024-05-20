import React from 'react';
import RentCardContainer from '../../Components/CardContainerForRent/CardContainerForRent';
import styles from "./Rent.module.css"

const Rent = () => {
  return (
    <div className={styles.container}>
      <RentCardContainer />
    </div>
  );
};

export default Rent;
