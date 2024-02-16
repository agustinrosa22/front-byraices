import React from "react";
import style from './Sell.module.css'

const Sell = () =>{
    return(
        <div className={style.formContent}>
             <div className={style.card}>
             <h2 className={style.title} >Vendé tu propiedad</h2>
             <p className={style.text}>Completá el formulario y nos pondremos contacto con vos para continuar con el proceso</p>

             <form className={style.mailForm} action="https://formsubmit.co/agustinrosa1234@gmail.com" method="POST" >
                <label className={style.mailLabel} htmlFor="name">Nombre</label>
                <input className={style.inputText} type="text" name='name' id='name'/>

                <label className={style.mailLabel} htmlFor="email">Correo electronico</label>
                <input className={style.inputText} type="email" name='email' id='email' />

                <label className={style.mailLabel} htmlFor="email">Telefono</label>
                <input className={style.inputText} type="Text" name='Phone' id='Phone' />

                <label className={style.mailLabel} htmlFor="propertyType">Tipo de propiedad</label>
    <select className={style.inputText} name="propertyType" id="propertyType">
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

                <label className={style.mailLabel} htmlFor="coments">Comentarios</label>
                <textarea className={style.inputText} name="coments" id="coments" cols="30" rows="5"></textarea>

                <input className={style.btn} type="submit" value="Enviar"/>
                <input type="hidden" name="_next" value="http://localhost:3000/"/>
                <input type="hidden" name="_captcha" value="false"/>
                {/* poner la url correcta */}
             </form>
        </div>
        </div>
    );
};

export default Sell