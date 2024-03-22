import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Card.module.css';
import { Link } from 'react-router-dom';
import WhatsApp from '../../Assets/whatsapp.png'
import Mail from '../../Assets/email.png'
import baño from '../../Assets/banera.png'
import m2Casa from '../../Assets/metro-cuadrado.png'
import m2 from '../../Assets/metro.png';

const Card = (props) => {
    const [seller, setSeller] = useState(null);

    useEffect(() => {
      const fetchSeller = async () => {
        try {
          // Obtener los datos del usuario vendedor asociado al sellerId
          const response = await axios.get(`http://localhost:3001/seller/${props.sellerId}`);
          setSeller(response.data.data);
        } catch (error) {
          console.error('Error al obtener los datos del vendedor:', error);
        }
      };
  
      fetchSeller();
    }, [props.sellerId]);
  
    return(
        <div  className={styles.card}>      
            <Link to={`/detail/${props.id}`} className={styles.link}>
            {props.photo && props.photo.length > 0 && (
              <img src={props.photo[0]} alt={props.nombreProducto} className={styles.image} />
              )}
              </Link>
<div className={styles.detailsCardContainer}>
              <Link to={`/detail/${props.id}`} className={styles.link}>
                <p className={styles.price}>{props.price} {props.currency}</p>
             <p className={styles.street}>{props.street} {props.number} </p>
             <p className={styles.locality}>{props.locality}, {props.departments}, {props.province}</p>
<div className={styles.datos}>
              <img className={styles.baño}  src={m2} alt="" />
              <p> {props.totalSquareMeters} m² totales </p> 

              <img className={styles.baño} src={m2Casa} alt="" />
              <p>{props.coveredSquareMeters} m² cubiertos </p>

              <img className={styles.baño} src={m2Casa} alt="" />
              <p>{props.enviroments} ambientes  </p>

              <img className={styles.baño} src={baño} alt="" /><p> {props.bathrooms} baños</p>
              </div>
              <p>{props.title}</p>
             
              </Link>
              {seller && (
                <div className={styles.sellerContainer}>
            <img src={seller.photo} alt="" className={styles.sellerimg}/>
            <div className={styles.sellerDetails}>
            <p className={styles.vendedorName}> {seller.name} {seller.last_name}</p>
            <div className={styles.comunication}>

            <a href={`mailto:${seller.mail}`} target="_blank" rel="noopener noreferrer">
                <img className={styles.email} src={Mail} alt="" />
            </a>
            <a href={`https://wa.me/${seller.phone_number}`} className={styles.whatsappButton}>
            {/* Otros detalles del vendedor */}
            <img className={styles.WhatsApp} src={WhatsApp} alt="" />
    </a>
            </div>
                  
          </div>
          </div>
        )}
        </div>
        </div>
    )
}

export default Card;