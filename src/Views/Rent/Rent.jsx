import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import RentCardContainer from '../../Components/CardContainerForRent/CardContainerForRent';
import FilterView from "../../Components/FilterView/FilterView";
import { fetchActivePropertiesForRent } from '../../Redux/Actions/actions';
import styles from "./Rent.module.css"

const Rent = () => {

  const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();
  
    // Extraer filtros y página de la URL
    const getFiltersFromURL = () => {
      return {
        departments: searchParams.get("departments") || "",
        propertyType: searchParams.get("propertyType") || "",
        minPrice: searchParams.get("minPrice") || "",
        maxPrice: searchParams.get("maxPrice") || "",
        page: parseInt(searchParams.get("page"), 10) || 1,
      };
    };
  
    const filtersFromURL = getFiltersFromURL();
  
    useEffect(() => {
      dispatch(fetchActivePropertiesForRent(filtersFromURL, filtersFromURL.page));
    }, [dispatch, filtersFromURL]);
  
    // Manejar cambio de filtros sin afectar la página
    const handleFilterChange = (filters) => {
      setSearchParams({ ...filters, page: 1 }); // Reinicia la paginación al aplicar filtros
      dispatch(fetchActivePropertiesForRent(filters, 1));
    };
  

  return (
    <div className={styles.container}>
       <FilterView onFilterChange={handleFilterChange} initialFilters={filtersFromURL} />
      <RentCardContainer />
    </div>
  );
};

export default Rent;
