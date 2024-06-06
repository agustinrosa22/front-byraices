import React from "react";
import styles from './CardsInformacion.module.css'
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import imagen from '../../Assets/4.svg'
import imagen1 from '../../Assets/5.svg'
import imagen2 from '../../Assets/6.svg'

const CardsInformacion = () => {
    return (
        <div className={styles.cardContainer}>
          <Card className={styles.customCard}>
            <Card.Img variant="top" src={imagen} alt="Imagen" className={styles.cardImage} />
            <Card.Body className={styles.customCardBody}>
              <h1 className={styles.cardTitle}>SE PARTE DE BYRAICES</h1>
              <h3 className={styles.cardSubtitle}>Forma parte de nuestra familia y crece con Byraices</h3>
              <Button style={{ backgroundColor: '#3D2F87', borderColor: '#3D2F87', color: 'white' }} variant="primary">Conocer más</Button>
            </Card.Body>
          </Card>
          <Card className={styles.customCard}>
            <Card.Img variant="top" src={imagen1} alt="Imagen" className={styles.cardImage} />
            <Card.Body className={styles.customCardBody}>
              <h1 className={styles.cardTitle}>DEPARTAMENTOS</h1>
              <h3 className={styles.cardSubtitle}>Nuestros departamentos de Arquitectura, Agrimensura y Escribanía en Byraices</h3>
              <Button style={{ backgroundColor: '#3D2F87', borderColor: '#3D2F87', color: 'white' }} variant="primary">Conocer más</Button>
            </Card.Body>
          </Card>
          <Card className={styles.customCard}>
            <Card.Img variant="top" src={imagen2} alt="Imagen" className={styles.cardImage} />
            <Card.Body className={styles.customCardBody}>
              <h1 className={styles.cardTitle}>QUIENES SOMOS</h1>
              <h3 className={styles.cardSubtitle}>Descubre mas sobre nosotros</h3>
              <Link to="/about">
          <Button style={{ backgroundColor: '#3D2F87', borderColor: '#3D2F87', color: 'white' }} variant="primary">Conocer más</Button>
        </Link>
            </Card.Body>
          </Card>
        </div>
      );
}

export default CardsInformacion;