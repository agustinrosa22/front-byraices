import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchActivePropertiesForRent } from '../../Redux/Actions/actions';
import Card from '../Card/Card';
import style from './CardContainerForRent.module.css'
import title from '../../Assets/titulo.png'
import carga from '../../Assets/carga.gif'

const RentCardContainer = () => {
  const dispatch = useDispatch();
  const propertiesForRent = useSelector(state => state.propertiesForRent);
  const loading = useSelector(state => state.loading);
  const error = useSelector(state => state.error);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchActivePropertiesForRent());

    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // Cambia el tiempo de espera según sea necesario (en milisegundos)

    return () => clearTimeout(timeoutId);
  }, [dispatch]);

  if (loading || isLoading) {
    return (
      <div className={style.containerCarga}>
        <img className={style.carga} src={carga} alt="Cargando..." />
      </div>
    );
  }


  if (error || propertiesForRent.length === 0) {
    return <div className={style.containerError}>
      <img className={style.img} src={title} alt="byraices" />
      <p className={style.errorMessage}>
        NO SE ENCONTRARON
        <span className={style.highlight}> PROPIEDADES </span>
        DISPONIBLES
      </p>
    </div>;
  }
const propiedades = propertiesForRent.length
  return (
    <div>
     <p className={style.countPorperties}>Cantidad de propiedades: {propiedades}</p>
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
  );
};

export default RentCardContainer;
