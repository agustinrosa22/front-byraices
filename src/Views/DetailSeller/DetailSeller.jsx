import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import style from "./DetailSeller.module.css";
import banner from '../../Assets/houseSeller.jpg'


const PropertyCard = ({ property }) => {
  return (
    <div className={style.propertyCard}>
      <h3>{property.title}</h3>
      <p>Price: {property.price} {property.currency}</p>
      <p>Location: {property.location}</p>
    </div>
  );
};



const DetailSeller = () => {
  const { id } = useParams();
  const [seller, setSeller] = useState(null);
  const [office, setOffice] = useState(null);
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSeller = async () => {
      try {
        const response = await axios.get(`/seller/${id}`);
        setSeller(response.data.data);

         // If seller has an officeId, fetch the office details
         if (response.data.data.officeId) {
          const officeResponse = await axios.get(`/offices/${response.data.data.officeId}`);
          setOffice(officeResponse.data);
        }

        const propertiesResponse = await axios.get(`/properties/seller/${id}`);
        setProperties(propertiesResponse.data.data);


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
    {seller ? (
      <div className={style.detail}>
        <img src={seller.photo} alt={`${seller.name} ${seller.last_name}`} className={style.photo} />
        <h1>{seller.name} {seller.last_name}</h1>
        <p>{office.name}</p>
        <p>Email: {seller.mail}</p>
        <p>Phone Number: {seller.phone_number}</p>

        {office && (
          <div className={style.officeDetail}>
            <h2>Office Details</h2>
            <p>Name: {office.name}</p>
            <p>Location: {office.location.join(', ')}</p>
            <p>Street: {office.street}</p>
            <p>Number: {office.number}</p>
            <p>Country: {office.country}</p>
            <p>Province: {office.province}</p>
            <p>Departments: {office.departments}</p>
            <p>Locality: {office.locality}</p>
            <p>Phone Number: {office.phone_number}</p>
            <p>Disclaimer: {office.disclaimer}</p>
          </div>
        )}
      </div>
      ) : (
        <p>Seller not found</p>
      )}

<div className={style.propertiesContainer}>
            <h2>Properties</h2>
            {properties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
    </div>
  );
};

export default DetailSeller;
