import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getActiveMartiller } from '../../Redux/Actions/actions'; // Corrige el nombre de la acción
import CardMartiller from '../CardMartiller/CardMartiller';
import styles from './CardMartillerContainer.module.css';

const CardMartillerContainer = () => {
  const dispatch = useDispatch();
  const martillers = useSelector((state) => state.martillers); // Obtén la lista de martilleros del estado global
  const error = useSelector((state) => state.error); // Obtén cualquier error del estado global

  useEffect(() => {
    dispatch(getActiveMartiller()); // Despacha la acción para obtener los martilleros cuando el componente se monte
  }, [dispatch]);

  if (error) {
    return <p>Error: {error}</p>; // Muestra un mensaje de error si ocurre
  }

  if (!Array.isArray(martillers)) {
    console.error('martillers no es un array:', martillers);
    return <p>Hubo un problema al cargar los Corredores.</p>;
  }

  if (martillers.length === 0) {
    return <p>No hay Corredores disponibles.</p>; // Mensaje si no hay Corredores
  }

  return (
    <div className={styles.containerWrapper}>
      <h1>Corredores</h1>
      <div className={styles.cardContainer}>
        {martillers.map((martiller) => (
          <CardMartiller key={martiller.id} martiller={martiller} />
        ))}
      </div>
    </div>
  );
};

export default CardMartillerContainer;
