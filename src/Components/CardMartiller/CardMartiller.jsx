import React from 'react';
import styles from './CardMartiller.module.css';
import { Link } from 'react-router-dom';

const CardMartiller = ({ martiller }) => {
  const { name, last_name, img, id } = martiller;

  return (
    <Link
                  to={`/martiller/${martiller.id}`}
                  className={styles.link}
                  >
    <div className={styles.card}>
      <div className={styles.header}>
        <img 
          src={img || '/default-avatar.png'} // Usar una imagen por defecto si no hay foto
          alt={`${name} ${last_name}`} 
          className={styles.photo}
        />
        <div className={styles.name}>
          <h3>{name} {last_name}</h3>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default CardMartiller;
