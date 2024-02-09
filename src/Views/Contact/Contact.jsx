import React from 'react';
import styles from './Contact.module.css'
const Contact = () => {
    return (
        <div className={styles.formContent}>

             <h2 className={styles.title} >Contáctenos</h2>

             <form className={styles.mailForm} action="https://formsubmit.co/agustinrosa1234@gmail.com" method="POST" >
                <label className={styles.mailLabel} htmlFor="name">Nombre</label>
                <input className={styles.inputText} type="text" name='name' id='name'/>

                <label className={styles.mailLabel} htmlFor="email">Correo electronico</label>
                <input className={styles.inputText} type="email" name='email' id='email' />

                <label className={styles.mailLabel} htmlFor="subject">Asunto</label>
                <input className={styles.inputText} type="text" name="subject" id="subject" />

                <label className={styles.mailLabel} htmlFor="coments">Comentarios</label>
                <textarea className={styles.inputText} name="coments" id="coments" cols="30" rows="5"></textarea>

                <input className={styles.btn} type="submit" value="Enviar"/>
                <input type="hidden" name="_next" value="http://localhost:3000/"/>
                <input type="hidden" name="_captcha" value="false"/>
                {/* poner la url correcta */}
             </form>
        </div>
    );
};

export default Contact;