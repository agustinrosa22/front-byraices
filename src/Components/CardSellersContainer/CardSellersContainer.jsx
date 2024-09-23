import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllSellers } from '../../Redux/Actions/actions';
import CardSellers from '../CardSellers/CardSellers';
import styles from './CardSellersContainer.module.css';

const CardSellersContainer = () => {
  const dispatch = useDispatch();
  const sellers = useSelector((state) => state.sellers.data);
  const error = useSelector((state) => state.error);

  const [currentPage, setCurrentPage] = useState(0);

  // Número de cartas visibles por página (inicialmente 4)
  const cardsPerPage = 4;

  useEffect(() => {
    dispatch(getAllSellers());
  }, [dispatch]);

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!Array.isArray(sellers)) {
    console.error('sellers no es un array:', sellers);
    return <p>Hubo un problema al cargar los vendedores.</p>;
  }

  if (sellers.length === 0) {
    return <p>No hay vendedores disponibles.</p>;
  }

  // Calcular el índice de inicio y final de los vendedores a mostrar
  const startIndex = currentPage * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const currentSellers = sellers.slice(startIndex, endIndex);

  // Función para manejar el cambio de página
  const handleNext = () => {
    if (endIndex < sellers.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className={styles.containerWrapper}>
      <h1>Equipo</h1>

      <div className={styles.cardContainer}>
        {currentSellers.map((seller) => (
          <CardSellers key={seller.id} seller={seller} />
        ))}
      </div>

      <div className={styles.navigationButtons}>
        <button onClick={handlePrev} disabled={currentPage === 0}>
          ←
        </button>
        <button onClick={handleNext} disabled={endIndex >= sellers.length}>
          →
        </button>
      </div>
    </div>
  );
};

export default CardSellersContainer;

