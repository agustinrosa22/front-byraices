import React from "react";
import style from './Home.module.css'

const Home = ()=>{
    return(
        <div className={style.container}>
        <div className={style.intro}>

        <h1 className={style.title}>Mucho más que mudarte</h1>
        <div className={style.buttonsContainer}>
            <button className={style.button} onClick={() => window.location.href='/buy'}>Quiero comprar</button>
            <button className={style.button} onClick={() => window.location.href='/alquilar'}>Quiero alquilar</button>
            <button className={style.button} onClick={() => window.location.href='/sell'}>Quiero vender</button>
            <button className={style.button} onClick={() => window.location.href='/emprendimientos'}>Emprendimientos</button>
        </div>
        <div className={style.searchContainer}>
            <input type="text" className={style.searchInput} placeholder="¿Dónde quieres mudarte?" />
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
            <button className={style.searchButton}>Buscar</button>
        </div>
        </div>
    </div>
    );
};

export default Home;