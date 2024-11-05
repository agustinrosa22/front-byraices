import React, { useState, useEffect } from 'react';
import axios from 'axios';
import whatsappIcon from '../../Assets/whatsapp.png';  // Icono de WhatsApp
import emailIcon from '../../Assets/email.png';  // Icono de correo electrónico
import isologo from '../../Assets/logocompleto.png';  // Logo como banner de fondo
import style from './Franquicia.module.css';  // Reemplaza con tu archivo de estilos

const SellerCard = () => {
  const [seller, setSeller] = useState(null);

  // Obtener datos del vendedor con id 10 (CEO)
  useEffect(() => {
    const fetchSeller = async () => {
      try {
        const response = await axios.get('/seller/10');  // Endpoint para obtener el seller con ID 10 (CEO)
        setSeller(response.data.data);  // Guardar los datos del vendedor (CEO)
      } catch (error) {
        console.error('Error al obtener el vendedor:', error);
      }
    };
    fetchSeller();
  }, []);

  if (!seller) {
    return <p>Cargando datos del CEO...</p>;
  }

  return (
    <div className={style.franquiciaContainer}>
      {/* Banner con logo como fondo */}
      <div className={style.bannerContainer}>
        <img src={isologo} alt="Logo By Raices" className={style.banner} />
        <div className={style.overlayText}>
          <h1>COMIENZA TU NUEVA EMPRESA</h1>
        </div>
      </div>

      {/* Texto llamativo y centrado */}
      <h2>Únete a By Raices</h2>
      <p className={style.presentationText}>
        ¡Únete a la red de franquicias By Raices y forma parte de una comunidad de éxito en el sector inmobiliario! 
        Nuestra franquicia te ofrece la oportunidad de aprovechar un modelo de negocio probado y respaldado por una 
        marca de confianza. Con By Raices, tendrás acceso a herramientas innovadoras, capacitación continua y un 
        soporte integral que te ayudará a alcanzar tus metas empresariales. No pierdas la oportunidad de crecer con 
        nosotros y transformar tu futuro. ¡Empieza tu viaje con By Raices hoy mismo!
      </p>
      
      {/* Carta de contacto con el CEO */}
      <div className={style.sellerCard}>
        <h2>Contacta con {`${seller.name} ${seller.last_name}`}</h2>
        <img src={seller.photo} alt={`${seller.name} ${seller.last_name}`} className={style.sellerPhoto} />

        <div className={style.contactIcons}>
          {/* Enlace a WhatsApp */}
          <a href={`https://wa.me/${seller.phone_number}`} target="_blank" rel="noopener noreferrer">
            <img src={whatsappIcon} alt="Contactar por WhatsApp" className={style.contactIcon} />
          </a>

          {/* Enlace para enviar correo */}
          <a href={`mailto:${seller.mail}`} target="_blank" rel="noopener noreferrer">
            <img src={emailIcon} alt="Contactar por Correo" className={style.contactIcon} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SellerCard;
