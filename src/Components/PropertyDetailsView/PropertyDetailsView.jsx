import React, { useState } from 'react';
import { Carousel, Col, Row } from 'react-bootstrap';
import style from './PropertyDetailsView.module.css';

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

  // Filtra las características que son true y obtiene su representación en texto
  const trueCharacteristics = Object.entries(details)
    .filter(([key, value]) => value)
    .map(([key]) => characteristicText[key]);

  // Si no hay características verdaderas, no renderiza nada
  if (trueCharacteristics.length === 0) {
    return null;
  }

  return (
    <div>
      <h2>Características</h2>
      <ul>
        {trueCharacteristics.map((characteristic, index) => (
          <p key={index}>{characteristic}</p>
        ))}
      </ul>
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
      <h2>Amenities</h2>
      <ul>
        {trueAmenities.map((amenity, index) => (
          <p key={index}>{amenity}</p>
        ))}
      </ul>
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
      <h2>Ambientes</h2>
      <ul>
        {trueEnvironmentOptions.map((environmentOption, index) => (
          <p key={index}>{environmentOption}</p>
        ))}
      </ul>
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
      <h2>Servicios</h2>
      <ul>
        {trueServices.map((service, index) => (
          <p key={index}>{service}</p>
        ))}
      </ul>
    </div>
  );
};



const PropertyDetailsView = ({ property }) => {
  const [selectedPreview, setSelectedPreview] = useState(0);

  const handlePreviewClick = (index) => {
    setSelectedPreview(index);
  };

  return (
    <div>
      <div>
        <Row>
          <Col sm={9} className="mx-auto">
            <div className={style.carouselContainer}>
              <Carousel className={style.carousel} activeIndex={selectedPreview} onSelect={(index) => setSelectedPreview(index)}>
                {property.photo.map((image, index) => (
                  <Carousel.Item key={index} className={style['carousel-item']}>
                    <img src={image} className={`d-block ${style['carousel-img']}`} alt={`Slide ${index}`} />
                    <Carousel.Caption>
                      <p>{index + 1} de {property.photo.length}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
          </Col>
        </Row>
      </div>
      <div>
        <div className={style.ContainerIntro}>
          <div className={style.ContainerSell}>
            <div className={style.SellTitle}>
              <h3>Venta</h3>
            </div>
            <h1>{property.title}</h1>
            <p> {property.price} {property.currency}</p>
          </div>
          <div className={style.ContainerPrincipalData}>
            <p>{property.totalSquareMeters} m² totales</p>
            <p>{property.coveredSquareMeters} m² cubiertos </p>
            <p>{property.semiCoveredSquareMeters} m² semi-cubiertos </p>
            <p>{property.uncovered} m² descubiertos</p>
            <p>{property.land} m² terreno</p>
            <p>{property.environments} ambientes</p>
            <p>{property.rooms} dormitorios</p>
            <p>{property.bathrooms} baños</p>
            <p>{property.garages} cochera</p>
            <p>{property.age} Año de construcción</p>
          </div>
        </div>
        <div className={style.descriptionContainer}>
          <h2>Descripción</h2>
          <div className={style.description}>
            <p>{property.description}</p>
          </div>
          <div className={style.otherData}>
            {property.propertyType && <p>Tipo de propiedad: {property.propertyType}</p>}
            {property.totalSquareMeters && <p>Superficie total: {property.totalSquareMeters} m²</p>}
            {property.land && <p>Superficie terreno: {property.land} m²</p>}
            {property.semiCoveredSquareMeters && <p>Superficie semicubierta: {property.semiCoveredSquareMeters} m²</p>}
            {property.coveredSquareMeters && <p>Superficie cubierta: {property.coveredSquareMeters} m²</p>}
            {property.environments && <p>Ambientes: {property.environments}</p>}
            {property.age && <p> Año de construcción: {property.age}</p>}
            {property.rooms && <p>Dormitorios: {property.rooms}</p>} 
            {property.bathrooms && <p>Baños: {property.bathrooms}</p>}
            {property.toilettes && <p>Toilets: {property.toilettes}</p>}
            {property.garages && <p>Cocheras: {property.garages}</p>}
            {property.floorPlans && <p>Pisos de la propiedad: {property.floorPlans}</p>}
            {/* Renderiza las características */}
            {renderDetails(property.characteristics)}
            {renderDetailsAmenities(property.amenities)}
            {renderDetailsAmbientes(property.environmentsOptions)}
            {renderDetailsServicios(property.services)}
          </div>
        </div>
        <div>
          <h2>Ubicación</h2>
          <p>País: {property.country}</p>
          <p>Provincia: {property.province}</p>
          <p>Departamento: {property.departments}</p>
          <p>Localidad: {property.locality}</p>
          <p>Dirección: {property.street} {property.number}</p>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailsView;
