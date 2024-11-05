// Sale.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import CardContainer from '../../Components/CardsContainerForSale/CardsContainerForSale';
import FilterView from '../../Components/FilterView/FilterView';
import { fetchActivePropertiesForSale } from '../../Redux/Actions/actions';

const Sale = () => {
  const dispatch = useDispatch();
  
  // Función para manejar los cambios en los filtros y despachar la acción
  const handleFilterChange = (filters) => {
    dispatch(fetchActivePropertiesForSale(filters));
  };

  return (
    <div>
      <FilterView onFilterChange={handleFilterChange} />
      <CardContainer />
    </div>
  );
};

export default Sale;
