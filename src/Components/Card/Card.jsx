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
import title from '../../Assets/titulo.png'

const Card = (props) => {
  const [contact, setContact] = useState(null);
  const [isMartiller, setIsMartiller] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false); // Estado para manejar la carga de imágenes
  const [loadedImages, setLoadedImages] = useState(0); // Contador de imágenes cargadas
  const [agentPhotoLoaded, setAgentPhotoLoaded] = useState(false); // Estado para manejar la carga de la foto del agente

  const formatPrice = (price) => {
    if (price) {
      let cleanedPrice = price.toString().replace(/\./g, '');
      return cleanedPrice.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }
    return price;
  };

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
      } catch (error) {
        console.error('Error al obtener los datos de contacto:', error);
      }
    };

    fetchContact();
  }, [props.martillerId, props.sellerId]);

  const photos = props.photo;

  // Maneja cuando todas las imágenes del carrusel están cargadas
  const handleImageLoad = () => {
    setLoadedImages((prev) => prev + 1); // Aumentar el contador de imágenes cargadas
    if (loadedImages + 1 === photos.length) {
      setImagesLoaded(true); // Todas las imágenes están cargadas
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        {Array.isArray(photos) && photos.length > 0 ? (
          <Swiper
            modules={[Autoplay]}
            autoplay={imagesLoaded ? {  // Solo si las imágenes están cargadas
              delay: 3000,
              disableOnInteraction: false,
            } : false} // Si las imágenes no están cargadas, desactiva autoplay
            loop={true}
            allowTouchMove={false}
          >
            {photos.map((image, index) => (
              <SwiperSlide key={index}>
                <div className={styles.imageContainer}>
                  <img
                    src={image}
                    className={styles['carousel-img']}
                    alt={`Slide ${index}`}
                    onLoad={handleImageLoad}  // Marca la imagen como cargada
                    onError={() => setImagesLoaded(false)} // En caso de error, desactiva autoplay
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
  {props.totalSquareMeters > 0 && (
    <>
      <img className={styles.baño} src={m2} alt="" />
      <p>{props.totalSquareMeters} m² totales</p>
    </>
  )}

  {props.coveredSquareMeters > 0 && (
    <>
      <img className={styles.baño} src={m2Casa} alt="" />
      <p>{props.coveredSquareMeters} m² cubiertos</p>
    </>
  )}

  {props.environments > 0 && (
    <>
      <img className={styles.baño} src={m2Casa} alt="" />
      <p>{props.environments} ambientes</p>
    </>
  )}

  {props.bathrooms > 0 && (
    <>
      <img className={styles.baño} src={baño} alt="" />
      <p>{props.bathrooms} baños</p>
    </>
  )}
</div>
          <div className={styles.tituloContainer}>
            <p className={styles.titulo}>{props.title}</p>
          </div>
        </Link>
        {contact && (
          <div className={styles.sellerContainer}>
            {/* Foto del agente con un fallback a la imagen 'title' mientras carga */}
            <img
              src={agentPhotoLoaded && contact.photo ? contact.photo : title}
              alt={title}
              className={styles.sellerimg}
              onLoad={() => setAgentPhotoLoaded(true)}
              onError={() => setAgentPhotoLoaded(false)}
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
                  <img className={styles.email} src={Mail} alt="" />
                </a>
                <a
                  href={`https://wa.me/${contact.phone_number}`}
                  className={styles.whatsappButton}
                >
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