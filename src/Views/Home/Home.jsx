import React, { useState } from "react";
import style from './Home.module.css';
import Lupa from '../../Assets/lupa.png';
import LuxuryCard from "../../Components/LuxuryCard/LuxuryCard";
import CardsInformacion from "../../Components/CardsInformacion/CardsInformacion";
import CardDesarrollo from "../../Components/CardDesarollo/CardDesarrollo";
import ContactUs from "../../Components/ContactUs/ContactUs";
import WorkUs from '../../Components/WorkUs/WorkUs';
import YouTubeVideo from "../../Components/YoutubeVideo/YoutubeVideo";

const Home = () => {
    const [searchParams, setSearchParams] = useState({
        departments: "",      // Cambiado a 'departments' para la URL correcta
        propertyType: ""
    });
    
    const handleSearch = () => {
        const queryString = new URLSearchParams(searchParams).toString();
        window.location.href = `/sale?${queryString}`;
    };
    
    const handleSelectChange = (e) => {
        setSearchParams({
          ...searchParams,
          [e.target.name]: e.target.value
        });
    };

    return (
        <div className={style.container}>
            <div className={style.intro}>
                <h1 className={style.title}>MUCHO MÁS QUE MUDARTE</h1>
                <div className={style.buttonsContainer}>
                    <button className={style.button} onClick={() => window.location.href='/sale'}>Quiero comprar</button>
                    <button className={style.button} onClick={() => window.location.href='/rent'}>Quiero alquilar</button>
                    <button className={style.button} onClick={() => window.location.href='/sell'}>Quiero vender</button>
                    <button className={style.button} onClick={() => window.location.href='/desarrollo'}>Desarrollo</button>
                </div>
                
                <div className={style.searchContainer}>
                    {/* <select 
                        name="departments"                  // Mantener 'departments' para reflejarlo en la URL
                        className={style.searchInput}
                        value={searchParams.departments}    // Asegurarse de usar 'departments' en el estado
                        onChange={handleSelectChange}
                    >
                        <option value="">Selecciona un departamento</option>
                        <option value="Capital">Capital</option>
                        <option value="Godoy Cruz">Godoy Cruz</option>
                        <option value="Guaymallén">Guaymallén</option>
                        <option value="Las Heras">Las Heras</option>
                        <option value="Lavalle">Lavalle</option>
                        <option value="Luján de Cuyo">Luján de Cuyo</option>
                        <option value="Maipú">Maipú</option>
                        <option value="San Martín">San Martín</option>
                        <option value="Rivadavia">Rivadavia</option>
                        <option value="Junín">Junín</option>
                        <option value="Santa Rosa">Santa Rosa</option>
                        <option value="La Paz">La Paz</option>
                        <option value="San Carlos">San Carlos</option>
                        <option value="Tunuyán">Tunuyán</option>
                        <option value="Tupungato">Tupungato</option>
                        <option value="San Rafael">San Rafael</option>
                        <option value="General Alvear">General Alvear</option>
                        <option value="Malargüe">Malargüe</option>
                    </select> */}
                  
                    <div className={style.division}>
                        <select
                            name="propertyType"
                            className={style.propertyTypeDropdown}
                            value={searchParams.propertyType} // Asegurar que el valor del estado se refleje
                            onChange={handleSelectChange}
                        >
                            <option value="">Selecciona tu tipo de propiedad</option>
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
                        </select>
                        
                        <button className={style.searchButton} onClick={handleSearch}>
                            <img src={Lupa} alt="Buscar" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Otros componentes en el Home */}
            <CardDesarrollo/>
            <LuxuryCard/>
            <ContactUs/>
            <WorkUs/>
            {/* <CardsInformacion/> */}
            <p className={style.declaracion}>
                By Raices (bajo la sociedad Ditova SAS) NO ejerce el corretaje inmobiliario. Cada oficina es de propiedad y gestión independiente...
            </p>
        </div>
    );
};

export default Home;
