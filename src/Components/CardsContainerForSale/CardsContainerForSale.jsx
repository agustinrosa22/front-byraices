import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchActivePropertiesForSale } from '../../Redux/Actions/actions';
import Card from '../Card/Card';
import style from './CardsContainerForSale.module.css';
import carga from '../../Assets/carga.gif';

const CardContainer = () => {
  const dispatch = useDispatch();
  const { properties, totalPages, currentPage } = useSelector(state => state.properties);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedPage = parseInt(localStorage.getItem('currentPage'), 10) || currentPage;
    const storedScrollPosition = parseInt(localStorage.getItem('scrollPosition'), 10) || 0;

    dispatch(fetchActivePropertiesForSale({}, storedPage));

    setTimeout(() => {
      window.scrollTo({ top: storedScrollPosition, behavior: 'auto' });
    }, 100);

    const timeoutId = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timeoutId);
  }, [dispatch]);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;

    localStorage.setItem('currentPage', page);
    localStorage.setItem('scrollPosition', 0);

    dispatch(fetchActivePropertiesForSale({}, page));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCardClick = () => {
    localStorage.setItem('scrollPosition', window.scrollY);
  };

  if (isLoading) {
    return (
      <div className={style.containerCarga}>
        <img className={style.carga} src={carga} alt="Cargando..." />
      </div>
    );
  }

  if (!properties?.length) {
    return <div>No hay propiedades disponibles</div>;
  }
  return (
    <div>
      <div className={style.cardsContainer}>
        {properties.map(property => (
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
            onClick={handleCardClick} // Llama a la función al hacer clic
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

export default CardContainer;