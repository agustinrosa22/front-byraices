import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardSellersContainer from '../../Components/CardSellersContainer/CardSellersContainer';
import CardMartillerContainer from '../../Components/CardMartillerContainer/CardMartillerContainer';
import style from './Oficina.module.css';
import banner from '../../Assets/houseSeller.jpg';

const Oficina = () => {
  const [office, setOffice] = useState(null);   // Estado para los datos de la oficina
  const [loading, setLoading] = useState(true); // Estado para mostrar loading
  const [error, setError] = useState(null);     // Estado para manejar errores

  useEffect(() => {
    const fetchOffice = async () => {
      try {
        const response = await axios.get('/offices/1'); // Solicitud a la oficina con id 1
        setOffice(response.data);  // Almacenar los datos de la oficina en el estado
        setLoading(false);         // Dejar de mostrar el estado de carga
      } catch (err) {
        console.error('Error fetching office details:', err);
        setError('Error al cargar los datos de la oficina.');
        setLoading(false);         // Dejar de mostrar el estado de carga en caso de error
      }
    };

    fetchOffice();
  }, []);  // Este useEffect solo se ejecuta una vez, cuando el componente se monta

  if (loading) {
    return <p>Cargando oficina...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className={style.container}>
      {/* El banner siempre está arriba */}
      <div className={style.containerBanner}>
        <img className={style.banner} src={banner} alt="Banner" />
      </div>

      {/* El contenido de la oficina y las tarjetas se agrupa aquí */}
      <div className={style.containerContent}>
        <div className={style.leftContent}> 
        {office && (
          <div className={style.officeDetail}>
            <h2>{office.name}</h2>
            <p>{office.street} {office.number}, {office.locality}, {office.departments}, {office.province}, {office.country}</p>
            <p>{office.phone_number}</p>
          </div>
        )}

        {/* Aquí se muestra primero la lista de martilleros */}
        <CardMartillerContainer />
        </div>
        {/* Luego se muestra la lista de vendedores */}
        <div className={style.cardSellersContainer}>
          <CardSellersContainer />
        </div>
      </div>
    </div>
  );
};

export default Oficina;
