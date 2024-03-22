import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchActivePropertiesForRent } from '../../Redux/Actions/actions';
import Card from '../Card/Card';

const RentCardContainer = () => {
  const dispatch = useDispatch();
  const propertiesForRent = useSelector(state => state.propertiesForRent);
  const loading = useSelector(state => state.loading);
  const error = useSelector(state => state.error);

  useEffect(() => {
    dispatch(fetchActivePropertiesForRent());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      {propertiesForRent.map(property => (
        <Card
          key={property.id}
          id={property.id}
          photo={property.photo}
          price={property.price}
          currency={property.currency}
        />
      ))}
    </div>
  );
};

export default RentCardContainer;
