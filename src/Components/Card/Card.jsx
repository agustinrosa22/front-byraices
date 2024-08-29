import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Card.module.css';
import { Link } from 'react-router-dom';
import WhatsApp from '../../Assets/whatsapp.png';
import Mail from '../../Assets/email.png';
import baño from '../../Assets/banera.png';
import m2Casa from '../../Assets/metro-cuadrado.png';
import m2 from '../../Assets/metro.png';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

const Card = (props) => {
  const [contact, setContact] = useState(null);
  const [isMartiller, setIsMartiller] = useState(false);

  useEffect(() => {
    const fetchContact = async () => {
      try {
        let response;
        if (props.martillerId !== null) {
          response = await axios.get(`/martiller/${props.martillerId}`);
          setIsMartiller(true);
        } else if (props.sellerId !== null) {
          response = await axios.get(`/seller/${props.sellerId}`);
          setIsMartiller(false);
        }
        if (response) {
          setContact(response.data.data);
        }
        // console.log(response);
      } catch (error) {
        console.error('Error al obtener los datos de contacto:', error);
      }
    };

    fetchContact();
  }, [props.martillerId, props.sellerId]);


  const photos = props.photo
  console.log(photos);
  

  return (
    <div className={styles.card}>
     <div className={styles.imageContainer}>

    {Array.isArray(photos) && photos.length > 0 ? (
      <Swiper
      modules={[Autoplay]}
      autoplay={{
        delay: 3000, // 3 segundos de retraso entre diapositivas
        disableOnInteraction: false, // El autoplay no se detiene al interactuar
      }}
      loop={true} // Permite que el carrusel se repita en bucle
      allowTouchMove={false} // Desactiva el arrastre manual
    >
        {photos.map((image, index) => (
          <SwiperSlide key={index}>
            <div className={styles.imageContainer}>
              <img
                src={image}
                className={styles['carousel-img']}
                alt={`Slide ${index}`}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    ) : (
      <p>No hay imágenes disponibles.</p>
    )}
  
</div>
      <div className={styles.detailsCardContainer}>
        <Link to={`/detail/${props.id}`} className={styles.link}>
          <p className={styles.price}>{props.price} {props.currency}</p>
          <p className={styles.street}>{props.street} {props.number}</p>
          <p className={styles.locality}>{props.locality}, {props.departments}, {props.province}</p>
          <div className={styles.datos}>
            <img className={styles.baño} src={m2} alt="" />
            <p>{props.totalSquareMeters} m² totales</p>
            <img className={styles.baño} src={m2Casa} alt="" />
            <p>{props.coveredSquareMeters} m² cubiertos</p>
            <img className={styles.baño} src={m2Casa} alt="" />
            <p>{props.environments} ambientes</p>
            <img className={styles.baño} src={baño} alt="" />
            <p>{props.bathrooms} baños</p>
          </div>
          <div className={styles.tituloContainer}>
    <p className={styles.titulo}>{props.title}</p>
  </div>
        </Link>
        {contact && (
          <div className={styles.sellerContainer}>
            {contact.photo && <img src={contact.photo} alt="" className={styles.sellerimg}/>}
            {contact.img && <img src={contact.img} alt="" className={styles.sellerimg}/>}
            <div className={styles.sellerDetails}>
              <p className={styles.vendedorName}>{contact.name} {contact.last_name}</p>
              {isMartiller && contact.matricula && <p  className={styles.vendedorName}>{contact.matricula}</p>}
              <div className={styles.comunication}>
                <a href={`mailto:${contact.mail}`} target="_blank" rel="noopener noreferrer">
                  <img className={styles.email} src={Mail} alt="" />
                </a>
                <a href={`https://wa.me/${contact.phone_number}`} className={styles.whatsappButton}>
                  <img className={styles.WhatsApp} src={WhatsApp} alt="" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
