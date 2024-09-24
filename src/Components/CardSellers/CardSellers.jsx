import React from 'react';
import styles from './CardSellers.module.css';
import { Link } from 'react-router-dom';

const CardSellers = ({ seller }) => {
  const { name, last_name, mail, phone_number, photo, type, status, officeId } = seller;


//Solucionar poder poner el link arriba de los div sin que se desajuste el css 
  return (
    <div className={styles.card} >
      <Link
                  to={`/seller/${seller.id}`}
                  className={styles.link}
                  >
      <div className={styles.header}>
        <img 
          src={photo || '/default-avatar.png'} // Usar una imagen por defecto si no hay foto
          alt={`${name} ${last_name}`} 
          className={styles.photo}
        />
        <div className={styles.name}>
          <h3>{name} {last_name}</h3>
        </div>
      </div>
      
      </Link>
    </div>
  );
};

export default CardSellers;
