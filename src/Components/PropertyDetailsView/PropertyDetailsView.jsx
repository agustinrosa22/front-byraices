import React, { useState, useEffect, useRef  } from 'react';
import axios from 'axios';
import { Carousel, Col, Row } from 'react-bootstrap';
import MapContainer from '../Maps/MapContainer';
import style from './PropertyDetailsView.module.css';
import WhatsApp from '../../Assets/whatsapp.png'
import Mail from '../../Assets/email.png'
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import youtube from '../../Assets/youtube.png'


// Helper function to convert string to boolean if necessary
const isTruthy = (value) => {
  if (typeof value === 'string') {
    return value.toLowerCase() === 'true'; // Convierte "true"/"false" strings a booleano
  }
  return Boolean(value); // Si ya es booleano, lo deja igual
};

const isValidUrl = (url) => {
  const urlPattern = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/[\w\-]+(\?[\w\-=&]+)?$/;
  return urlPattern.test(url);
};

const renderDetails = (details) => {
  const characteristicText = {
    placard: "Placard",
    parilla: "Parilla",
    desayunador: "Desayunador",
    orientacionSur: "Orientación Sur",
    orientacionOeste: "Orientación Oeste",
    orientacionNorte: "Orientación Norte",
    orientacionEste: "Orientación Este",
    accesoDeCocheraRampaFija: "Acceso de Cochera con Rampa Fija",
    accesoDeCocheraRampaMovil: "Acceso de Cochera con Rampa Móvil",
    accesoDeCocheraAscensor: "Acceso de Cochera con Ascensor",
    accesoDeCocheraHorizontal: "Acceso de Cochera Horizontal",
    disposicionContrafrente: "Disposición Contrafrente",
    disposicionFrente: "Disposición Frente",
    disposicionInterno: "Disposición Interno",
    disposicionLateral: "Disposición Lateral",
    amoblado: "Amoblado",
    orientacionNoroeste: "Orientación Noroeste",
    orientacionNoreste: "Orientación Noreste",
    orientacionSuroeste: "Orientación Suroeste",
    orientacionSureste: "Orientación Sureste",
    deck: "Deck",
    tipoDeCampoOtro: "Tipo de Campo Otro",
    tipoDeCampoFruticula: "Tipo de Campo Frutícola",
    tipoDeCampoAgricola: "Tipo de Campo Agrícola",
    tipoDeCampoChara: "Tipo de Campo Chacra",
    tipoDeCampoCriadero: "Tipo de Campo Criadero",
    tipoDeCampoTambero: "Tipo de Campo Tambo",
    tipoDeCampoFloricultura: "Tipo de Campo Floricultura",
    tipoDeCampoForestal: "Tipo de Campo Forestal",
    tipoDeCampoGanadero: "Tipo de Campo Ganadero",
    tipoDeCampoHaras: "Tipo de Campo Haras",
    bodegas: "Bodegas",
    tipoDeBodegaComercial: "Tipo de Bodega Comercial",
    tipoDeBodegaNaveIndustrial: "Tipo de Bodega Nave Industrial",
    tipoDeBodegaAlmacen: "Tipo de Bodega Almacén",
    biblioteca: "Biblioteca",
    galpon: "Galpón",
    sotano: "Sótano",
    baulera: "Baulera",
    permiteMascota: "Permite Mascota",
    aptoTuristico: "Apto Turístico"
  };

  const trueCharacteristics = Object.entries(details)
    .filter(([key, value]) => isTruthy(value)) // Aquí convertimos string "true"/"false" a booleano si es necesario
    .map(([key]) => characteristicText[key]);

  if (trueCharacteristics.length === 0) {
    return null;
  }

  return (
    <div className={style.dataContainer}>
      <h2>Características</h2>
      <div className={style.data}>
        <ul>
          {trueCharacteristics.map((characteristic, index) => (
            <li key={index}>{characteristic}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const renderDetailsAmenities = (details) => {
  const amenityText = {
    aireAcondicionado: "Aire Acondicionado",
    portonAutomatico: "Portón Automático",
    gimnasio: "Gimnasio",
    losaRadiante: "Losa Radiante",
    chimenea: "Chimenea",
    hidromasaje: "Hidromasaje",
    seguridad: "Seguridad",
    pileta: "Pileta",
    caldera: "Caldera",
    businessCenter: "Business Center",
    areaCine: "Área de Cine",
    cisterna: "Cisterna",
    laundry: "Laundry",
    estacionamientoVisitas: "Estacionamiento para Visitas",
    ascensor: "Ascensor",
    salonUsosMultiples: "Salón de Usos Múltiples",
    areaDeJuegosInfantiles: "Área de Juegos Infantiles",
    canchaTenis: "Cancha de Tenis",
    recepcion: "Recepción",
    areasVerdes: "Áreas Verdes",
    valetParking: "Valet Parking",
    canchaBasquetbol: "Cancha de Básquetbol",
    canchaFutbol: "Cancha de Fútbol",
    canchaPaddle: "Cancha de Paddle",
    solarium: "Solarium",
    jardinDeInvierno: "Jardín de Invierno",
    piletaCubierta: "Pileta Cubierta",
    piletaClimatizada: "Pileta Climatizada",
    sauna: "Sauna",
    bar: "Bar",
    calefaccion: "Calefacción"
  };

  const trueAmenities = Object.entries(details)
    .filter(([key, value]) => isTruthy(value)) // Convertir string a boolean si es necesario
    .map(([key]) => amenityText[key]);

  if (trueAmenities.length === 0) {
    return null;
  }

  return (
    <div>
      <div className={style.dataContainer}>
        <h2>Amenities</h2>
      </div>
      <div className={style.data}>
        <ul>
          {trueAmenities.map((amenity, index) => (
            <li key={index}>{amenity}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// El mismo patrón se puede seguir para las demás funciones:
const renderDetailsAmbientes = (details) => {
  const environmentOptionText = {
    dormitorio: "Dormitorio",
    comedor: "Comedor",
    vestidor: "Vestidor",
    jardin: "Jardín",
    baño: "Baño",
    patio: "Patio",
    terraza: "Terraza",
    estudio: "Estudio",
    lavadero: "Lavadero",
    altillo: "Altillo",
    playroom: "Playroom",
    lobby: "Lobby",
    quincho: "Quincho",
    salaDeReuniones: "Sala de Reuniones",
    balcon: "Balcón",
    pileta: "Pileta",
    cocina: "Cocina",
    toilette: "Toilette",
    habitacion: "Habitación",
    living: "Living",
    otro: "Otro"
  };

  const trueEnvironmentOptions = Object.entries(details)
    .filter(([key, value]) => isTruthy(value)) // Convertir string a boolean si es necesario
    .map(([key]) => environmentOptionText[key]);

  if (trueEnvironmentOptions.length === 0) {
    return null;
  }

  return (
    <div>
      <div className={style.dataContainer}>
        <h2>Ambientes</h2>
      </div>
      <div className={style.data}>
        <ul>
          {trueEnvironmentOptions.map((environmentOption, index) => (
            <li key={index}>{environmentOption}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const renderDetailsServicios = (details) => {
  const serviceText = {
    electricidad: "Electricidad",
    agua: "Agua",
    gas: "Gas",
    internet: "Internet",
    telefono: "Teléfono",
    desagueCloacal: "Desagüe Cloacal",
    televisionPorCable: "Televisión por Cable",
    alarma: "Alarma",
    televisionSatelital: "Televisión Satelital",
    aguaCorriente: "Agua Corriente"
  };

  const trueServices = Object.entries(details)
    .filter(([key, value]) => isTruthy(value)) // Convertir string a boolean si es necesario
    .map(([key]) => serviceText[key]);

  if (trueServices.length === 0) {
    return null;
  }

  return (
    <div>
      <div className={style.dataContainer}>
        <h2>Servicios</h2>
      </div>
      <div className={style.data}>
        <ul>
          {trueServices.map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};




const PropertyDetailsView = ({ property }) => {
  const carouselRef = useRef(null);
  const [isFullScreen, setIsFullScreen] = useState(false);

  let title;

  if (property.isForSale) {
    title = "Venta";
  } else if (property.isForRent) {
    title = "Alquiler";
  } else if (property.isUnderDevelopment) {
    title = "Desarrollo";
  }
  const [selectedPreview, setSelectedPreview] = useState(0);
  const [seller, setSeller] = useState(null);

  
  const formatPrice = (price) => {
    if (price) {
      // Eliminar cualquier punto ya existente
      let cleanedPrice = price.toString().replace(/\./g, '');

      // Convertir el precio en formato de miles con puntos
      return cleanedPrice.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }
    return price;
  };


  useEffect(() => {
    const fetchContact = async () => {
      try {
        let response;
        if (property.martillerId !== null) {
          // Obtener los datos del martillero si martillerId no es null
          response = await axios.get(`/martiller/${property.martillerId}`);
        } else if (property.sellerId !== null) {
          // Obtener los datos del vendedor si sellerId no es null
          response = await axios.get(`/seller/${property.sellerId}`);
        }
        if (response && response.data) {
          setSeller(response.data.data);
        }
      } catch (error) {
        console.error('Error al obtener los datos de contacto:', error);
      }
    };

    fetchContact();
  }, [property.martillerId, property.sellerId]);

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   fade: true, // Para un efecto de desvanecimiento
  // };




   // Calcula la antigüedad en años si el campo age tiene 4 dígitos
   const calculateAntiquity = (age) => {
    const currentYear = new Date().getFullYear();
    return currentYear - age;
  };

  // Verifica si la edad es un año de 4 dígitos o un valor directo
  const displayAge = (age) => {
    return age.toString().length === 4 ? calculateAntiquity(age) : age;
  };

 // Función para activar o desactivar el modo pantalla completa
 const toggleFullScreen = () => {
  if (!isFullScreen) {
    if (carouselRef.current) {
      if (carouselRef.current.requestFullscreen) {
        carouselRef.current.requestFullscreen();
      } else if (carouselRef.current.mozRequestFullScreen) { // Firefox
        carouselRef.current.mozRequestFullScreen();
      } else if (carouselRef.current.webkitRequestFullscreen) { // Chrome, Safari y Opera
        carouselRef.current.webkitRequestFullscreen();
      } else if (carouselRef.current.msRequestFullscreen) { // IE/Edge
        carouselRef.current.msRequestFullscreen();
      }
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { // Firefox
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { // Chrome, Safari y Opera
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { // IE/Edge
      document.msExitFullscreen();
    }
  }
  setIsFullScreen(!isFullScreen);  // Cambia el estado
};


const formatSellerName = (name, last_name) => {
  const formattedName = name.trim().toLowerCase().replace(/\s+/g, '-');
  const formattedLastName = last_name.trim().toLowerCase().replace(/\s+/g, '-');
  return `${formattedName}-${formattedLastName}`;
};

  return (
    <div>
      <div> 
      <Row className={isFullScreen ? '' : "mx-auto"}>
  <Col sm={isFullScreen ? 12 : 9} className={isFullScreen ? '' : "mx-auto"}>
    <div
      className={`${style.carouselContainer} ${isFullScreen ? style.fullScreen : ''}`}
      ref={carouselRef}
    >
      {Array.isArray(property.photo) && property.photo.length > 0 ? (
        <>
          <Swiper
            effect="fade"
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            loop={true}
            modules={[Navigation, Pagination, Autoplay]}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            className={isFullScreen ? style.fullScreenSwiper : ''}
          >
            {property.photo.map((image, index) => (
              <SwiperSlide key={index}>
                <div className={style.imageContainer}>
                  <img
                    src={image}
                    className={`${style['carousel-img']} ${isFullScreen ? style.fullScreenImage : ''}`}
                    alt={`Slide ${index}`}
                  />
                </div>
              </SwiperSlide>
            ))}

            <div
              className="swiper-button-prev"
              style={{
                color: '#3e2f877c',
                cursor: 'pointer',
                userSelect: 'none',
                left: '10px',
                zIndex: 10,
              }}
            ></div>

            <div
              className="swiper-button-next"
              style={{
                color: '#3e2f877c',
                cursor: 'pointer',
                userSelect: 'none',
                right: '10px',
                zIndex: 10,
              }}
            ></div>
          </Swiper>

          <button
            onClick={toggleFullScreen}
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              zIndex: 20,
              background: 'rgba(0,0,0,0.5)',
              color: '#fff',
              padding: '10px',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            {isFullScreen ? 'Salir de pantalla completa' : 'Pantalla completa'}
          </button>
        </>
      ) : (
        <p>No hay imágenes disponibles.</p>
      )}
    </div>
  </Col>
  
  {/* Centrado del botón en la mitad horizontal de la página */}
  {property.videoLink && isValidUrl(property.videoLink) && (
    
      <a
        href={property.videoLink}
        target="_blank"
        rel="noopener noreferrer"
        className={style.videoButton}
        style={{
          display: 'inline-block',
          padding: '10px',
          textDecoration: 'none',
          textAlign: 'center'
        }}
      >
        <img
          src={youtube}
          alt="Ver video en YouTube"
          style={{ width: '50px', height: '50px' }}
        />
      </a>
    
  )}
</Row>


      </div>
      
      <div className={style.container}>
    
      <div className={style.leftContent}>
        <div className={style.ContainerIntro}>
          <div className={style.ContainerSell}>
            <div className={style.SellTitle}>
            <h3>{title}</h3>
            </div>
            <h1>{property.title}</h1>
            <p> {formatPrice(property.price)}{property.currency}</p>
          </div>
          <div className={style.ContainerPrincipalData}>
            <p>{property.totalSquareMeters} m² construidos totales</p>
            {property.coveredSquareMeters > 0 && <p>{property.coveredSquareMeters} m² cubiertos</p>}
            {property.land > 0 && <p>{property.land} m² terreno</p>}
            {property.environments > 0 && <p>{property.environments} ambientes</p>}
            {property.rooms > 0 && <p>{property.rooms} dormitorios</p>}
            {property.bathrooms > 0 && <p>{property.bathrooms} baños</p>}
            {property.garages > 0 && <p>{property.garages} cochera</p>}

            <p>{property.age === 0 || displayAge(property.age) === 0 ? "A estrenar" : `${displayAge(property.age)} Años de antigüedad`}</p>

          </div>
        </div>
        <div className={style.descriptionContainer}>
          <h2>Descripción</h2>
          <div className={style.description}>
  <p style={{ whiteSpace: 'pre-line' }}>{property.description}</p>
</div>

          <div className={style.otherDataContainer}>
  <div className={style.otherData}>
    <div className={style.pairContainer}>
    {property.propertyType && property.propertyType !== 0 && <p>Tipo de propiedad: {property.propertyType}</p>}
    {property.totalSquareMeters > 0 && <p>Superficie total: {property.totalSquareMeters} m²</p>}
    </div>
    <div className={style.pairContainer}>
    {property.land > 0 && <p>Superficie terreno: {property.land} m²</p>}
      {property.semiCoveredSquareMeters > 0 && (
  <p>Superficie semicubierta: {property.semiCoveredSquareMeters} m²</p>
)}
 {property.uncovered > 0 && (
<p>Superficie descubierta: {property.uncovered} m²</p>
)}
    </div>
    <div className={style.pairContainer}>
    {property.age !== null && property.age !== undefined && (
  <p>Años de antigüedad: {property.age === 0 || displayAge(property.age) === 0 ? "A estrenar" : displayAge(property.age)}</p>

)}

      {property.rooms > 0 && <p>Dormitorios: {property.rooms}</p>}
    </div>
    <div className={style.pairContainer}>
    {property.bathrooms > 0 && <p>Baños: {property.bathrooms}</p>}
    {property.toilettes > 0 && <p>Toilets: {property.toilettes}</p>}

    </div>
    <div className={style.pairContainer}>
    {property.garages > 0 && <p>Cocheras: {property.garages}</p>}
{property.floorPlans > 0 && <p>Pisos de la propiedad: {property.floorPlans}</p>}

    </div>
  </div>
</div>


            {/* Renderiza las características */}
            {renderDetails(property.characteristics)}
            {renderDetailsAmenities(property.amenities)}
            {renderDetailsAmbientes(property.environmentsOptions)}
            {renderDetailsServicios(property.services)}
        </div>
        <div className={style.ubicationContainer}>
          <h2>Ubicación</h2>
          <div className={style.dataUbication}>
          {property.street && property.number && <p>{property.street} {property.number}, </p>}
          {property.departments && <p>{property.departments},</p>}
          {property.locality && <p>{property.locality},</p>}
          {property.province && <p>{property.province},</p>}
          {property.country && <p> {property.country}</p>}
          </div>
          <MapContainer location={property.location} />

        </div>
        </div>
        <div className={style.rightContent}>
        {seller && (
             
                <div className={style.sellerContainer}>


                  <div className={style.contacto}>
                    <h1>Contacto</h1>
                    <div className={style.redes}>
                    <a href={`mailto:${seller.mail}`} target="_blank" rel="noopener noreferrer">
                <img className={style.email} src={Mail} alt="" />
            </a>
            <a href={`https://wa.me/${seller.phone_number}`} className={style.whatsappButton}>
            {/* Otros detalles del vendedor */}
            <img className={style.WhatsApp} src={WhatsApp} alt="" />
            </a>
            </div>
                  </div> 



                  <Link
                  to={property.martillerId !== null ? `/martiller/${seller.id}` : `/vendedor/${formatSellerName(seller.name, seller.last_name)}/${seller.id}`}
                  className={style.link}
                  >
            <div className={style.sellerDetails}>
            {seller.photo && <img src={seller.photo} alt="" className={style.sellerimg}/>}
            {seller.img && <img src={seller.img} alt="" className={style.sellerimg}/>}
            <p className={style.vendedorName}> {seller.name} {seller.last_name}</p>
          </div>
          {seller.matricula && <p className={style.matricula}>{seller.matricula}</p> }
            </Link>
          <div className={style.formContent}>
             <div className={style.card}>
        <h2 className={style.title} >Envíenos un mensaje</h2>

        <form className={style.mailForm} action={`https://formsubmit.co/${seller.mail}`} method="POST" >
           <label className={style.mailLabel} htmlFor="name">Nombre</label>
           <input className={style.inputText} type="text" name='name' id='name'/>

           <label className={style.mailLabel} htmlFor="email">Correo electronico</label>
           <input className={style.inputText} type="email" name='email' id='email' />

           <label className={style.mailLabel} htmlFor="email">Telefono</label>
           <input className={style.inputText} type="Text" name='Phone' id='Phone' />

           <label className={style.mailLabel} htmlFor="email">Direccion</label>
           <input className={style.inputText} type="Text" name='direction' id='direction' />

           <label className={style.mailLabel} htmlFor="subject">Asunto</label>
                <input className={style.inputText} type="text" name="subject" id="subject" />

           <label className={style.mailLabel} htmlFor="coments">Comentarios</label>
           <textarea className={style.inputText} name="coments" id="coments" cols="30" rows="5"></textarea>

           <input className={style.btn} type="submit" value="Enviar"/>
           <input type="hidden" name="_next" value="https://byraices.com/"/>
           <input type="hidden" name="_captcha" value="false"/>
           {/* poner la url correcta */}
        </form>
   </div>
   </div>
          </div>
        )}
        </div>
        </div>
    </div>
  );
};

export default PropertyDetailsView;
