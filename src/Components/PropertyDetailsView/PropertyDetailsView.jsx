import React, { useState, useEffect } from 'react';
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





const renderDetails = (details) => {
  // Mapea las características verdaderas a su representación en texto
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
  .filter(([key, value]) => value)
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
  // Mapea las amenidades verdaderas a su representación en texto
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

  // Filtra las amenidades que son true y obtiene su representación en texto
  const trueAmenities = Object.entries(details)
    .filter(([key, value]) => value)
    .map(([key]) => amenityText[key]);

  // Si no hay amenidades verdaderas, no renderiza nada
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

const renderDetailsAmbientes = (details) => {
  // Mapea las opciones de entornos verdaderas a su representación en texto
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

  // Filtra las opciones de entornos que son true y obtiene su representación en texto
  const trueEnvironmentOptions = Object.entries(details)
    .filter(([key, value]) => value)
    .map(([key]) => environmentOptionText[key]);

  // Si no hay opciones de entornos verdaderas, no renderiza nada
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
 
  // Mapea las opciones de servicios verdaderas a su representación en texto
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

  // Filtra las opciones de servicios que son true y obtiene su representación en texto
  const trueServices = Object.entries(details)
    .filter(([key, value]) => value)
    .map(([key]) => serviceText[key]);

  // Si no hay opciones de servicios verdaderas, no renderiza nada
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



  return (
    <div>
      <div>
      <Row>
  <Col sm={9} className="mx-auto">
    <div className={style.carouselContainer}>
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
    >
            {property.photo.map((image, index) => (
              <SwiperSlide key={index}>
                <div className={style.imageContainer}>
                  <img
                    src={image}
                    className={style['carousel-img']}
                    alt={`Slide ${index}`}
                  />
                </div>
              </SwiperSlide>
            ))}
             {/* Botones de navegación personalizados */}
      <div
        className="swiper-button-prev"
        style={{
          color: '#3e2f877c', // Color personalizado
          cursor: 'pointer', // Cambia el cursor al pasar por encima
          userSelect: 'none', // Previene la selección de texto
          left: '10px', // Posición personalizada
          zIndex: 10, // Asegura que esté encima de las imágenes
        }}
      ></div>

      <div
        className="swiper-button-next"
        style={{
          color: '#3e2f877c', // Color personalizado
          cursor: 'pointer', // Cambia el cursor al pasar por encima
          userSelect: 'none', // Previene la selección de texto
          right: '10px', // Posición personalizada
          zIndex: 10, // Asegura que esté encima de las imágenes
        }}
      ></div>
          </Swiper>
        </>
      ) : (
        <p>No hay imágenes disponibles.</p>
      )}
    </div>
  </Col>
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
            <p> {property.price} {property.currency}</p>
          </div>
          <div className={style.ContainerPrincipalData}>
            <p>{property.totalSquareMeters} m² totales</p>
            <p>{property.coveredSquareMeters} m² cubiertos </p>
            <p>{property.environments} ambientes</p>
            <p>{property.rooms} dormitorios</p>
            <p>{property.bathrooms} baños</p>
            <p>{property.garages} cochera</p>
            <p>{displayAge(property.age)} Años de antiguedad</p>
          </div>
        </div>
        <div className={style.descriptionContainer}>
          <h2>Descripción</h2>
          <div className={style.description}>
            <p>{property.description}</p>
          </div>

          <div className={style.otherDataContainer}>
  <div className={style.otherData}>
    <div className={style.pairContainer}>
      {property.propertyType && <p>Tipo de propiedad: {property.propertyType}</p>}
      {property.totalSquareMeters && <p>Superficie total: {property.totalSquareMeters} m²</p>}
    </div>
    <div className={style.pairContainer}>
      {property.land && <p>Superficie terreno: {property.land} m²</p>}
      {property.semiCoveredSquareMeters && <p>Superficie semicubierta: {property.semiCoveredSquareMeters} m²</p>}
    </div>
    <div className={style.pairContainer}>
      {property.age && <p>Años de antiguedad: {displayAge(property.age)}</p>}
      {property.rooms && <p>Dormitorios: {property.rooms}</p>}
    </div>
    <div className={style.pairContainer}>
      {property.bathrooms && <p>Baños: {property.bathrooms}</p>}
      {property.toilettes && <p>Toilets: {property.toilettes}</p>}
    </div>
    <div className={style.pairContainer}>
      {property.garages && <p>Cocheras: {property.garages}</p>}
      {property.floorPlans && <p>Pisos de la propiedad: {property.floorPlans}</p>}
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
                  to={property.martillerId !== null ? `/martiller/${seller.id}` : `/seller/${seller.id}`}
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
