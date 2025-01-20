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
        <option value="General Alvear">General Alvear</option>
        <option value="Godoy Cruz">Godoy Cruz</option>
        <option value="Guaymallén">Guaymallén</option>
        <option value="Junín">Junín</option>
        <option value="La Paz">La Paz</option>
        <option value="Las Heras">Las Heras</option>
        <option value="Lavalle">Lavalle</option>
        <option value="Luján de Cuyo">Luján de Cuyo</option>
        <option value="Maipú">Maipú</option>
        <option value="Malargüe">Malargüe</option>
        <option value="Rivadavia">Rivadavia</option>
        <option value="San Carlos">San Carlos</option>
        <option value="San Martín">San Martín</option>
        <option value="San Rafael">San Rafael</option>
        <option value="Santa Rosa">Santa Rosa</option>
        <option value="Tunuyán">Tunuyán</option>
        <option value="Tupungato">Tupungato</option>

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
    <option value="casa">Casa</option>
    <option value="ph">PH</option>
    <option value="local">Local</option>
    <option value="terrenos y lotes">Terrenos y lotes</option>
    <option value="campos y chacras">Campos y chacras</option>
    <option value="fondo de comercio">Fondo de comercio</option>
    <option value="cochera">Cochera</option>
    <option value="oficina">Oficina</option>
    <option value="galpon">Galpón</option>
    <option value="quinta">Quinta</option>
    <option value="otros">Otros</option>
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
