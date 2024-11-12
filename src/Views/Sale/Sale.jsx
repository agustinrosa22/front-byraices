import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CardContainer from '../../Components/CardsContainerForSale/CardsContainerForSale';
import FilterView from '../../Components/FilterView/FilterView';
import { fetchActivePropertiesForSale } from '../../Redux/Actions/actions';

const Sale = () => {
  const dispatch = useDispatch();

  // Extraer filtros de la URL
  const getFiltersFromURL = () => {
    const params = new URLSearchParams(window.location.search);
    return {
      departments: params.get("departments") || "",
      propertyType: params.get("propertyType") || "",
      minPrice: params.get("minPrice") || "",
      maxPrice: params.get("maxPrice") || ""
    };
  };

  const filtersFromURL = getFiltersFromURL();

  useEffect(() => {
    dispatch(fetchActivePropertiesForSale(filtersFromURL));
  }, [dispatch, filtersFromURL]);

  const handleFilterChange = (filters) => {
    dispatch(fetchActivePropertiesForSale(filters));
  };

  return (
    <div>
      <FilterView onFilterChange={handleFilterChange} initialFilters={filtersFromURL} />
      <CardContainer />
    </div>
  );
};

export default Sale;
