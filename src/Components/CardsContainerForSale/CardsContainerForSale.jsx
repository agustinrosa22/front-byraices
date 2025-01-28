import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchActivePropertiesForSale } from '../../Redux/Actions/actions';
import Card from '../Card/Card';
import style from './CardsContainerForSale.module.css';
import carga from '../../Assets/carga.gif';
import { useLocation } from 'react-router-dom';

const CardContainer = () => {
  const dispatch = useDispatch();
  const location = useLocation(); // Detectar el historial de navegación
  const { properties } = useSelector(state => state.properties);
  const { totalPages } = useSelector(state => state.properties);
  const { currentPage } = useSelector(state => state.properties);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Recuperar la página almacenada o usar la actual por defecto
    const storedPage = parseInt(localStorage.getItem('currentPage'), 10) || currentPage;

    // Recuperar la posición de scroll almacenada
    const storedScrollPosition = parseInt(localStorage.getItem('scrollPosition'), 10) || 0;

    // Realizar la petición con la página guardada
    dispatch(fetchActivePropertiesForSale({}, storedPage));

    // Restaurar la posición de scroll al cargar el componente
    setTimeout(() => {
      window.scrollTo({ top: storedScrollPosition, behavior: 'auto' });
    }, 100);

    // Configurar tiempo de carga inicial
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timeoutId);
  }, [dispatch]);

  const handlePageChange = (page) => {
    // Guardar la página actual en localStorage
    localStorage.setItem('currentPage', page);

    // Desplazar la pantalla hacia arriba
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Realizar la acción de cambio de página
    dispatch(fetchActivePropertiesForSale({}, page));
  };

  const handleCardClick = () => {
    // Guardar la posición actual del scroll antes de redirigir
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
      <div className={style.pagination}>
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            className={index + 1 === currentPage ? style.activePage : style.pageButton}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
