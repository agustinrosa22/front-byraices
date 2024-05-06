import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchActivePropertiesForSale } from '../../Redux/Actions/actions';
import Card from '../Card/Card';

const CardContainer = () => {
  const dispatch = useDispatch();
  const properties = useSelector(state => state.properties);
  const loading = useSelector(state => state.loading);
  const error = useSelector(state => state.error);

  useEffect(() => {
    dispatch(fetchActivePropertiesForSale());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      {properties.map(property => (
        <Card
          key={property.id}
          id={property.id}
          photo={property.photo}
          price={property.price}
          currency={property.currency}
          totalSquareMeters={property.totalSquareMeters}
          coveredSquareMeters={property.coveredSquareMeters}
          enviroments={property.enviroments}
          bathrooms={property.bathrooms}
          title={property.title}
          sellerId={property.sellerId}
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

export default CardContainer;
