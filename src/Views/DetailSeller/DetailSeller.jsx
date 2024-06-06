import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import style from "./DetailSeller.module.css";
import banner from '../../Assets/houseSeller.jpg';
import { Carousel } from 'react-bootstrap';

const PropertyCard = ({ property }) => {
  return (
    <div className={style.propertyCard}>
      <Carousel>
        {property.photo &&
          property.photo.map((image, index) => (
            <Carousel.Item key={index}>
              <img src={image} alt={`Slide ${index}`} className={style.image} />
            </Carousel.Item>
          ))}
      </Carousel>
      <div className={style.propertyInfo}>
        <h3>{property.title}</h3>
        <p>{property.price} {property.currency}</p>
      </div>
    </div>
  );
};

const DetailSeller = () => {
  const { id } = useParams();
  const [seller, setSeller] = useState(null);
  const [office, setOffice] = useState(null);
  const [martiller, setMartiller] = useState(null); // New state for martiller
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const cantidad = properties.length


  useEffect(() => {
    const fetchSeller = async () => {
      try {
        const response = await axios.get(`/seller/${id}`);
        const sellerData = response.data.data;
        setSeller(sellerData);

        // Fetch office details if officeId exists
        if (sellerData.officeId) {
          const officeResponse = await axios.get(`/offices/${sellerData.officeId}`);
          setOffice(officeResponse.data);
        }

        // Fetch properties related to the seller
        const propertiesResponse = await axios.get(`/properties/seller/${id}`);
        setProperties(propertiesResponse.data.data);

        // Fetch martiller details if martillerId exists
        if (sellerData.martillerId) {
          const martillerResponse = await axios.get(`/martiller/seller/${sellerData.id}`);
          setMartiller(martillerResponse.data);
        }

        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchSeller();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading seller: {error.message}</p>;

  return (
    <div className={style.container}>
      <div className={style.containerBanner}>
        <img className={style.banner} src={banner} alt="Banner" />
      </div>
      <div className={style.detailSeller}>
        <div className={style.dataContainer}>
          {seller ? (
            <div className={style.detail}>
              <img src={seller.photo} alt={`${seller.name} ${seller.last_name}`} className={style.photo} />
              <h1>{seller.name} {seller.last_name}</h1>
              <p>{office?.name}</p>
              <p>Email: {seller.mail}</p>
              <p>Phone Number: {seller.phone_number}</p>
            </div>
          ) : (
            <p>Seller not found</p>
          )}
          {martiller && (
            <div className={style.officeDetail}>
              <h2>Martillero</h2>
              <p>Nombre: {martiller.name} {martiller.last_name}</p>
              <p>Email: {martiller.mail}</p>
              <p>Teléfono: {martiller.phone_number}</p>
              <img src={martiller.img} alt={`${martiller.name} ${martiller.last_name}`} className={style.photo} />
            </div>
          )}

          {office && (
            <div className={style.officeDetail}>
              <p>{office.name}</p>
              <p>{office.street} {office.number}, {office.locality}, {office.departments}, {office.province}, {office.country}</p>
              <p>{office.phone_number}</p>
            </div>
          )}

          
        </div>

        <div className={style.propertiesContainer}>
          <h2>Propiedades</h2>
          <p>Total de propiedades: {cantidad}</p>
          <div className={style.properties}>
            {properties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailSeller;

