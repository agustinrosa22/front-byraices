import React, { useState, useEffect, useCallback } from 'react';
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
import title from '../../Assets/titulo.png'

// Componente de spinner
const Spinner = () => <div className={styles.spinner}>Cargando...</div>;

const Card = React.memo((props) => {
  const [contact, setContact] = useState(null);
  const [isMartiller, setIsMartiller] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadedImages, setLoadedImages] = useState(0);
  const [agentPhotoLoaded, setAgentPhotoLoaded] = useState(false);
  const [imageError, setImageError] = useState(false); // Nuevo estado para manejar errores en la imagen [0]

  // Formateador de precios
  const formatPrice = useCallback((price) => {
    if (price) {
      let cleanedPrice = price.toString().replace(/\./g, '');
      return cleanedPrice.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }
    return price;
  }, []);

  // Fetch de los datos de contacto
  const fetchContact = useCallback(async () => {
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
    } catch (error) {
      console.error('Error al obtener los datos de contacto:', error);
    }
  }, [props.martillerId, props.sellerId]);

  useEffect(() => {
    fetchContact();
  }, [fetchContact]);

  // Manejador para detectar cuando una imagen se ha cargado
  const handleImageLoad = useCallback(() => {
    setLoadedImages((prev) => prev + 1);
    if (loadedImages + 1 === props.photo.length) {
      setImagesLoaded(true);
    }
  }, [loadedImages, props.photo.length]);

  // Manejador para errores en la imagen [0]
  const handleImageError = useCallback(() => {
    setImageError(true);  // Si la imagen [0] falla, se muestra el spinner
  }, []);

  const photos = props.photo || [];

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        {photos.length > 0 ? (
          <Swiper
            modules={[Autoplay]}
            autoplay={imagesLoaded ? {
              delay: 3000,
              disableOnInteraction: false,
            } : false}
            loop={true}
            allowTouchMove={false}
          >
            {photos.map((image, index) => (
              <SwiperSlide key={index}>
                <div className={styles.imageContainer}>
                  {/* Solo muestra el spinner si la imagen [0] no está disponible */}
                  {index === 0 && imageError ? (
                    <Spinner />
                  ) : (
                    <img
                      src={image}
                      className={styles['carousel-img']}
                      alt={`Slide ${index}`}
                      onLoad={handleImageLoad}
                      onError={index === 0 ? handleImageError : null}  // Solo maneja error en la imagen [0]
                      loading="lazy" // Lazy loading para mejorar el rendimiento
                    />
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <p>No hay imágenes disponibles.</p>
        )}
      </div>
      <div className={styles.detailsCardContainer}>
  <a href={`/detail/${props.id}`} className={styles.link} target="_blank" rel="noopener noreferrer">
    <p className={styles.price}>
      {formatPrice(props.price)} {props.currency}
    </p>
    <p className={styles.street}>
      {props.street} {props.number}
    </p>
    <p className={styles.locality}>
      {props.locality}, {props.departments}, {props.province}
    </p>
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
  </a>
        {contact && (
          <div className={styles.sellerContainer}>
            <img
              src={agentPhotoLoaded && contact.photo ? contact.photo : title}
              alt="Agente"
              className={styles.sellerimg}
              onLoad={() => setAgentPhotoLoaded(true)}
              onError={() => setAgentPhotoLoaded(false)}
              loading="lazy" // Lazy load para optimizar imagen del agente
            />
            <div className={styles.sellerDetails}>
              <p className={styles.vendedorName}>
                {contact.name} {contact.last_name}
              </p>
              {isMartiller && contact.matricula && (
                <p className={styles.vendedorName}>{contact.matricula}</p>
              )}
              <div className={styles.comunication}>
                <a
                  href={`mailto:${contact.mail}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className={styles.email} src={Mail} alt="Email" />
                </a>
                <a
                  href={`https://wa.me/${contact.phone_number}`}
                  className={styles.whatsappButton}
                >
                  <img className={styles.WhatsApp} src={WhatsApp} alt="WhatsApp" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
});

export default Card;