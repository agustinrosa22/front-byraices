import React from 'react';
import style from './Contact.module.css'
const Contact = () => {
    return (
        <div className={style.formContent}>
             <div className={style.card}>
        <h2 className={style.title} >Envíenos un mensaje</h2>
        <p className={style.text}>Completá el formulario para contactarnos sobre cualquier pregunta o comentario que tengas y nos contactaremos a la brevedad.</p>

        <form className={style.mailForm} action="https://formsubmit.co/agustinrosa1234@gmail.com" method="POST" >
           <label className={style.mailLabel} htmlFor="name">Nombre</label>
           <input className={style.inputText} type="text" name='name' id='name'/>

           <label className={style.mailLabel} htmlFor="email">Correo electronico</label>
           <input className={style.inputText} type="email" name='email' id='email' />

           <label className={style.mailLabel} htmlFor="email">Telefono</label>
           <input className={style.inputText} type="Text" name='Phone' id='Phone' />

           <label className={style.mailLabel} htmlFor="email">Direccion</label>
           <input className={style.inputText} type="Text" name='direction' id='direction' />

           <label className={style.mailLabel} htmlFor="subject">Asunto</label>
                <input className={style.inputText} type="text" name="subject" id="subject" />

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

export default Contact;