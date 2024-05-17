import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './LuxuryCard.module.css';
import foto1 from '../../Assets/foto1.jpeg';
import foto2 from '../../Assets/foto2.jpeg';
import logoByraices from '../../Assets/logoByraices.png';

const LuxuryCard = () => {
  const handleButtonClick = () => {
    window.location.href = '/sale';
  };
  return (
    <div>
      <header style={{ height: '100px' }}> 
      </header>
      <div className="gray-background" style={{ position: 'absolute', top: "47%", left: "26%", width: '50%', height: '40%', backgroundColor: 'rgba(169, 169, 169, 0.5)', zIndex: 0 }}>
      </div>
      <div style={{ position: 'relative', marginBottom: '100px', overflow: 'hidden', zIndex: 1 }}>
        <div className="main-content" style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', margin: '0 auto', maxWidth: '1200px', marginBottom: '100px' }}>
          <div className="left-panel" style={{ flex: '0 0 25%', position: 'relative', zIndex: 2, marginRight: '150px' }}>
            <img src={foto1} alt="Left Image" style={{ width: '450px', height: '350px', objectFit: 'cover' }} />
          </div>
          <div className="center-panel" style={{ position: 'absolute', top: '50px', left: '50%', transform: 'translate(-50%)', zIndex: 3, width: '50%', minWidth: '600px', height: '500px' }}>
            <div style={{ padding: '10px', borderRadius: '10px' }}>
              <Card>
                <Card.Body>
                  <div className="logo" style={{ textAlign: 'left', display: 'flex', alignItems: 'center' }}>
                    <img src={logoByraices} alt="ByRaices Logo" style={{ height: '100px', width: 'auto', marginRight: '20px', marginTop: "-55px" }} />
                    <div>
                      <h3 style={{ color: 'darkblue', fontSize: '18px', marginBottom: '5px'}}>
                        <span style={{}}>DELUXE</span><br />
                        <span style={{}}>BYRAICES</span>
                      <p style={{ marginBottom: '5px', fontSize: '14px', textAlign: 'right' }}>
                        <span style={{ display: 'block', textAlign: 'left' }}>PRESTIGE PROPERTIES & EXCLUSIVE HOMES</span>
                      </p>
                      </h3>
                      <p style={{ fontSize: '10px', color:"black", textAlign: 'right' }}>
                        <span style={{ display: 'block', textAlign: 'center' }}>DESCUBRE EXCLUSIVOS INMUEBLES</span>
                        <span style={{ display: 'block', textAlign: 'center' }}>SELECCIONADOS POR BY RAÍCES, BAJO LA DIRECCIÓN Y SUPERVISIÓN DE CORREDORES PÚBLICOS MATRICULADOS ESPECIALIZADOS EN PROPIEDADES PREMIUM</span>
                      </p>
                    </div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <Button variant="primary"  onClick={handleButtonClick}>VER PROPIEDADES</Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="right-panel" style={{ flex: '0 0 25%', position: 'relative', zIndex: 2, marginLeft: '150px' }}>
            <img src={foto2} alt="Right Image" style={{ width: '450px', height: '350px', objectFit: 'cover' }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LuxuryCard;
