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

  // Guardar posición del scroll al salir
  useEffect(() => {
    const saveScrollPosition = () => {
      sessionStorage.setItem("scrollPosition", window.scrollY);
    };
    window.addEventListener("beforeunload", saveScrollPosition);
    return () => {
      window.removeEventListener("beforeunload", saveScrollPosition);
    };
  }, []);

  // Restaurar posición del scroll al cargar
  useEffect(() => {
    const savedScrollPosition = sessionStorage.getItem("scrollPosition");
    if (savedScrollPosition) {
      window.scrollTo(0, parseInt(savedScrollPosition, 10));
    }
  }, []);

  const handleFilterChange = (filters) => {
    const queryParams = new URLSearchParams(filters).toString();
    window.history.pushState(null, "", `?${queryParams}`);
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
