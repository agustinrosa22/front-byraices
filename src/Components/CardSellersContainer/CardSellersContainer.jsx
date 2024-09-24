import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllSellers } from '../../Redux/Actions/actions';
import CardSellers from '../CardSellers/CardSellers';
import styles from './CardSellersContainer.module.css';
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'; // Importamos el carrusel

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  const windowWidth = window.innerWidth;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#3D2F87", // Color de fondo
        color: "blue", // Color del símbolo de la flecha
        fontSize: "30px", // Tamaño de la flecha
        border: "none", // Sin bordes
        borderRadius: "50%", // Bordes redondeados
        width: "40px", // Ancho del botón
        height: "40px", // Alto del botón
        display: "flex", // Para centrar el contenido
        justifyContent: "center", // Centrar horizontalmente
        alignItems: "center", // Centrar verticalmente
        position: "absolute",
        right: "10px",
        zIndex: 1, // Asegura que esté por encima del contenido
        right: windowWidth < 600 ? "0px" : windowWidth < 400 ? "0px" : "0px",
       
      }}
      onClick={onClick}
    >
    
    </div>
  );
}
// Flecha anterior personalizada
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  const windowWidth = window.innerWidth;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#3D2F87", // Color de fondo
        color: "blue", // Color del símbolo de la flecha
        fontSize: "30px", // Tamaño de la flecha
        border: "none", // Sin bordes
        borderRadius: "50%", // Bordes redondeados
        width: "40px", // Ancho del botón
        height: "40px", // Alto del botón
        display: "flex", // Para centrar el contenido
        justifyContent: "center", // Centrar horizontalmente
        alignItems: "center", // Centrar verticalmente
        position: "absolute",
        left: "40px",
        zIndex: 1, // Asegura que esté por encima del contenido
        left: windowWidth < 600 ? "0px" : windowWidth < 400 ? "0px" : "0px",
      }}
      onClick={onClick}
    >
   
    </div>
  );
}

const CardSellersContainer = () => {
  const dispatch = useDispatch();
  const sellers = useSelector((state) => state.sellers);
  const error = useSelector((state) => state.error);
console.log(sellers)
  useEffect(() => {
    dispatch(getAllSellers());
  }, [dispatch]);

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!Array.isArray(sellers)) {
    console.error('sellers no es un array:', sellers);
    return <p>Hubo un problema al cargar los vendedores.</p>;
  }

  if (sellers.length === 0) {
    return <p>No hay vendedores disponibles.</p>;
  }

  // Configuración del carrusel
  const settings = {
    dots: false, // Muestra los indicadores de deslizamiento
    infinite: true, // Cicla infinitamente
    speed: 500,
    slidesToShow: 2, // Mostrar 2 columnas en pantallas grandes
    slidesToScroll: 1, // Mover de a 2 vendedores
    rows: 2,
    arrows: true,
    autoplay: true,
    centerMode: true, // Esto centra los elementos en el slider
    autoplaySpeed: 5000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 900, // Para pantallas menores a 900px
        settings: {
          slidesToShow: 1, // Mostrar 1 columna
          slidesToScroll: 1, // Deslizar de 1 en 1
          rows: 1,
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <div className={styles.containerWrapper}>
      <h1>Equipo</h1>
      <Slider {...settings} className={styles.slider}>
        {sellers.map((seller) => (
          <div key={seller.id} className={styles.cardWrapper}>
            <CardSellers seller={seller} className={styles.card}/>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default CardSellersContainer;