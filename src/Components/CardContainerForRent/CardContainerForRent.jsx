import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from "react-router-dom";
import { fetchActivePropertiesForRent } from '../../Redux/Actions/actions';
import Card from '../Card/Card';
import style from './CardContainerForRent.module.css'
import title from '../../Assets/titulo.png'
import carga from '../../Assets/carga.gif'

const RentCardContainer = ({ filters }) => {
  const dispatch = useDispatch();
  const {propertiesForRent, totalPages } = useSelector((state) => state);
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = parseInt(searchParams.get("page"), 10) || 1;

  const loading = useSelector(state => state.loading);
  const error = useSelector(state => state.error);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    dispatch(fetchActivePropertiesForRent(filters, currentPage)).then(() => {
      setIsLoading(false);
    });
  
    // 🔍 Verificar qué datos llegan al estado global
    setTimeout(() => {
      console.log("🚀 Estado Global (Redux) - propertiesForRent:", propertiesForRent);
    }, 2000);
  }, [dispatch, filters, currentPage]);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setSearchParams({ ...filters, page }); // Mantiene los filtros al cambiar de página
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  if (loading || isLoading) {
    return (
      <div className={style.containerCarga}>
        <img className={style.carga} src={carga} alt="Cargando..." />
      </div>
    );
  }


  if (error || propertiesForRent?.length === 0) {
    return <div className={style.containerError}>
      <img className={style.img} src={title} alt="byraices" />
      <p className={style.errorMessage}>
        NO SE ENCONTRARON
        <span className={style.highlight}> PROPIEDADES </span>
        DISPONIBLES
      </p>
    </div>;
  }
const propiedades = propertiesForRent?.length

console.log("🛠️ Propiedades que se renderizan en Cards:", propertiesForRent);

  return (
    <div>
     <div className={style.cardsContainer}>
      {propertiesForRent.map(property => (
        <Card
        key={property.id}
          id={property.id}
          photo={property.photo}
          price={property.price}
          currency={property.currency}
          totalSquareMeters={property.totalSquareMeters}
          coveredSquareMeters={property.coveredSquareMeters}
          environments={property.environments}
          bathrooms={property.bathrooms}
          title={property.title}
          sellerId={property.sellerId}
          martillerId={property.martillerId}
          street={property.street}
          number={property.number}
          country={property.country}
          province={property.province}
          departments={property.departments}
          locality={property.locality}
        />
      ))}
</div>

{/* PAGINACIÓN */}
<div className={style.pagination}>
 <button className={style.arrowButton} onClick={() => handlePageChange(currentPage - 3)} disabled={currentPage <= 3}>⫷</button>
 <button className={style.arrowButton} onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>⪡</button>

 {currentPage > 1 && (
   <button className={style.pageButton} onClick={() => handlePageChange(currentPage - 1)}>
     {currentPage - 1}
   </button>
 )}

 <button className={style.activePage}>{currentPage}</button>

 {currentPage < totalPages && (
   <button className={style.pageButton} onClick={() => handlePageChange(currentPage + 1)}>
     {currentPage + 1}
   </button>
 )}

 <button className={style.arrowButton} onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>⪢</button>
 <button className={style.arrowButton} onClick={() => handlePageChange(currentPage + 3)} disabled={currentPage > totalPages - 3}>⫸</button>
</div>
</div>

    
  );
};

export default RentCardContainer;
