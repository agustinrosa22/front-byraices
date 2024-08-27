import React from 'react';
import styles from './FilterView.module.css';  // Importar correctamente los estilos como 'styles'

const FilterView = () => {
    return (
        <div className={styles.searchBarContainer}>
          <input type="text" placeholder="¿Dónde querés mudarte?" className={styles.inputField} />
          <select className={styles.dropdown}>
            <option>Tipo de propiedad</option>
          </select>
          <select className={styles.dropdown}>
            <option>Comprar</option>
          </select>
          <select className={styles.dropdown}>
            <option>Precio</option>
          </select>
          {/* <div className={styles.filterButton}>
            <button className={styles.filterBtn}>Filtros (0)</button>
          </div> */}
        </div>
    );
};

export default FilterView;
