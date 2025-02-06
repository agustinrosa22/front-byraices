import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import CardContainer from "../../Components/CardsContainerForSale/CardsContainerForSale";
import FilterView from "../../Components/FilterView/FilterView";
import { fetchActivePropertiesForSale } from "../../Redux/Actions/actions";

const Sale = () => {
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
    dispatch(fetchActivePropertiesForSale(filtersFromURL, filtersFromURL.page));
  }, [dispatch, filtersFromURL]);

  // Manejar cambio de filtros sin afectar la página
  const handleFilterChange = (filters) => {
    setSearchParams({ ...filters, page: 1 }); // Reinicia la paginación al aplicar filtros
    dispatch(fetchActivePropertiesForSale(filters, 1));
  };

  return (
    <div>
      <FilterView onFilterChange={handleFilterChange} initialFilters={filtersFromURL} />
      <CardContainer filters={filtersFromURL} />
    </div>
  );
};

export default Sale;
