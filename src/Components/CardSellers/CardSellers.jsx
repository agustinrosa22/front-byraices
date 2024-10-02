import React from 'react';
import styles from './CardSellers.module.css';
import { Link } from 'react-router-dom';

const CardSellers = ({ seller }) => {
  const { name, last_name, photo, id } = seller;
  
  // Formatear el nombre y apellido para crear una URL amigable
  const formatSellerName = (name, last_name) => {
    const formattedName = name.trim().toLowerCase().replace(/\s+/g, '-');
    const formattedLastName = last_name.trim().toLowerCase().replace(/\s+/g, '-');
    return `${formattedName}-${formattedLastName}`;
  };

  return (
    <div className={styles.card}>
      {/* El enlace envuelve el contenido sin romper el diseño CSS */}
      <Link to={`/vendedor/${formatSellerName(name, last_name)}/${id}`} className={styles.link}>
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
