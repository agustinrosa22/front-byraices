import React from "react";
import style from './Home.module.css'
import Lupa from '../../Assets/lupa.png'
import LuxuryCard from "../../Components/LuxuryCard/LuxuryCard";
import CardsInformacion from "../../Components/CardsInformacion/CardsInformacion";
import CardDesarrollo from "../../Components/CardDesarollo/CardDesarrollo"
import ContactUs from "../../Components/ContactUs/ContactUs"
import WorkUs from '../../Components/WorkUs/WorkUs'
import YouTubeVideo from "../../Components/YoutubeVideo/YoutubeVideo";

const Home = ()=>{
    return(
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
            <input type="text" className={style.searchInput} placeholder="¿Dónde quieres mudarte?" />
            <div className={style.division}>
            <select className={style.propertyTypeDropdown}>
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
            <button className={style.searchButton}>
                        <img src={Lupa} alt="Buscar" />
                    </button>
                    </div>
        </div>
        </div>
        {/* <YouTubeVideo/> */}
        <CardDesarrollo/>
        <LuxuryCard/>
        <ContactUs/>
        <WorkUs/>
        {/* <CardsInformacion/> */}
        <p className={style.declaracion}>
            By Raices (bajo la sociedad Ditova SAS) NO ejerce el corretaje inmobiliario. Cada oficina es de propiedad y gestión independiente. En cumplimiento de las leyes vigentes que regulan el corretaje inmobiliario, Ley Nacional 25.028, Ley 22.802 de Lealtad Comercial, Ley 24.240 de Defensa al Consumidor, las normas del Código Civil y Comercial de la Nación y Constitucionales, los agentes/gestores de By Raices NO ejercen el corretaje inmobiliario. Todas las operaciones inmobiliarias son objeto de intermediación y conclusión por parte de los corredores públicos inmobiliarios colegiados, cuyos datos se exhiben en cada publicación de propiedad objeto de comercialización.
        </p>
    </div>
    );
};

export default Home;