import React, { useState, useEffect } from 'react';
import styles from './FilterView.module.css';

const FilterView = ({ onFilterChange, initialFilters }) => {
  const [filters, setFilters] = useState(initialFilters);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const handleFilterSubmit = (e) => {
    e.preventDefault();
    onFilterChange(filters); // Enviar filtros hacia el componente Sale
  };

  useEffect(() => {
    setFilters(initialFilters); // Actualizar si initialFilters cambia
  }, [initialFilters]);

  return (
    <form className={styles.searchBarContainer} onSubmit={handleFilterSubmit}>
      <select 
        name="departments" 
        className={styles.dropdown} 
        onChange={handleChange} 
        value={filters.departments}
      >
        <option value="">Selecciona un departamento</option>
        {/* Opciones de departamentos */}
        <option value="Capital">Capital</option>
        {/* Más opciones aquí */}
      </select>

      {/* Nuevo select para propertyType */}
      <select 
        name="propertyType" 
        className={styles.dropdown} 
        onChange={handleChange} 
        value={filters.propertyType}
      >
        <option value="">Selecciona un tipo de propiedad</option>
        {/* Opciones de tipo de propiedad */}
        <option value="departamento">Departamento</option>
        {/* Más opciones aquí */}
      </select>

      <input
        type="text"
        name="minPrice"
        placeholder="Precio Mínimo"
        className={styles.inputField}
        value={filters.minPrice}
        onChange={handleChange}
      />
      <input
        type="text"
        name="maxPrice"
        placeholder="Precio Máximo"
        className={styles.inputField}
        value={filters.maxPrice}
        onChange={handleChange}
      />

      <button type="submit" className={styles.filterButton}>Filtrar</button>
    </form>
  );
};

export default FilterView;
