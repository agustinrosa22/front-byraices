import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import style from "./DetailSeller.module.css";
import banner from '../../Assets/houseSeller.jpg'

const DetailSeller = () => {
  const { id } = useParams();
  const [seller, setSeller] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSeller = async () => {
      try {
        const response = await axios.get(`/seller/${id}`);
        setSeller(response.data.data);
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
            <img className={style.banner} src={banner} alt="" />
        </div>
      {seller ? (
        <div className={style.detail}>
          <h1>{seller.name} {seller.last_name}</h1>
          <img src={seller.photo} alt={`${seller.name} ${seller.last_name}`} className={style.photo} />
          <p>Email: {seller.mail}</p>
          <p>Phone Number: {seller.phone_number}</p>
          <p>Type: {seller.type}</p>
          <p>Status: {seller.status ? 'Active' : 'Inactive'}</p>
          {seller.officeId && <p>Office ID: {seller.officeId}</p>}
          {seller.franquiciaId && <p>Franquicia ID: {seller.franquiciaId}</p>}
          {seller.martillerId && <p>Martiller ID: {seller.martillerId}</p>}
        </div>
      ) : (
        <p>Seller not found</p>
      )}
    </div>
  );
};

export default DetailSeller;
