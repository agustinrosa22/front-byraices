import React, { useState } from 'react';
import { Carousel, Col, Row } from 'react-bootstrap';
import style from './PropertyDetailsView.module.css';

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
        <h3>Venta</h3>
      <h1>{property.title}</h1>
      <p> {property.price} {property.currency}</p>
        <p>{property.totalSquareMeters} m2 totales</p>
        <p>{property.coveredSquareMeters} m2 cubiertos </p>
        <p>{property.semiCoveredSquareMeters} m2 semi-cubiertos </p>
        <p>{property.uncovered} m2 descubiertos</p>
        <p>{property.land} terreno</p>
        <p>{property.environments} ambientes</p>
        <p>{property.rooms} dormitorios</p>
        <p>{property.bathrooms} baños</p>
      <p>{property.garages} cochera</p>
      <p>{property.age} Año de construcción</p>
        <h2>Detalles de la propiedad</h2>
        <p>Tipo de propiedad: {property.propertyType}</p>
       
        {/* Agrega más detalles según sea necesario */}
      </div>
      <div>
        <h2>Ubicación</h2>
        <p>País: {property.country}</p>
        <p>Provincia: {property.province}</p>
        <p>Departamento: {property.departments}</p>
        <p>Localidad: {property.locality}</p>
        <p>Dirección: {property.street} {property.number}</p>
        {/* Agrega más detalles de ubicación según sea necesario */}
      </div>
      <div>
        <h2>Características</h2>
        {renderDetails(property.characteristics)}
      </div>
      <div>
        <h2>Amenidades</h2>
        {renderDetails(property.amenities)}
      </div>
      <div>
        <h2>Entornos y opciones</h2>
        {renderDetails(property.environmentsOptions)}
      </div>
      <div>
        <h2>Servicios</h2>
        {renderDetails(property.services)}
      </div>
      {/* Agrega más secciones según sea necesario */}
    </div>
  );
};

const renderDetails = (details) => {
  return (
    <ul>
      {Object.entries(details).map(([key, value]) => {
        if (value) {
          return <li key={key}>{key}</li>;
        }
        return null;
      })}
    </ul>
  );
};

export default PropertyDetailsView;
