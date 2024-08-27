import React from 'react';
import buildingImage from '../../Assets/build.jpeg'; // Reemplaza con la ruta correcta
import isologoImage from '../../Assets/logoByraices.png'; // Reemplaza con la ruta correcta
import style from './Franquicia.module.css';
import ReactDOM from "react-dom";


const Franquicia = () => {

    const handleMouseOver = (e) => {
        if (e.target.classList.contains('province')) {
          e.target.style.fill = 'blue';
        }
      };
    
      const handleMouseOut = (e) => {
        if (e.target.classList.contains('province')) {
          e.target.style.fill = '';
        }
      };
    
  return (
    <div className={style.franquiciaContainer}>
    <h1>Franquicia By Raices</h1>
    <p>
        ¡Únete a la red de franquicias By Raices y forma parte de una comunidad de éxito en el sector inmobiliario! 
        Nuestra franquicia te ofrece la oportunidad de aprovechar un modelo de negocio probado y respaldado por una 
        marca de confianza. Con By Raices, tendrás acceso a herramientas innovadoras, capacitación continua y un 
        soporte integral que te ayudará a alcanzar tus metas empresariales. No pierdas la oportunidad de crecer con 
        nosotros y transformar tu futuro. ¡Empieza tu viaje con By Raices hoy mismo!
      </p>
      {/* <Map
        data={{
          map: MAP_JSON,
          width: 600,
          height: 500,
          center: [-62, -40],
          scale: 420,
          currency: "$"
        }}
      /> */}
    </div>
  );
};

export default Franquicia;
