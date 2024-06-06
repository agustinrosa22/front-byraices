import React, { useState } from "react";
import styles from './Login.module.css';
import iconGoogle from '../../Assets/google.png'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes manejar la lógica de inicio de sesión
    };

    return (
        <div className={styles.loginContainer}>
            <div className={styles.card}>
                <div className={styles.content}>
                    <form className={styles.form} onSubmit={handleSubmit}>
                    <h1 className={styles.title}>Ingresa tu email</h1>
                        <div className={styles.formGroup}>
                            <input
                                placeholder="Email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className={styles.inputForm}
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <input
                                placeholder="Contraseña"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className={styles.inputForm}
                            />
                        </div>
                        <button className={styles.buttonSubmit} type="submit">Continuar</button>
                    </form>
                    <p className={styles.forgotPassword}>
                        <a className={styles.forgotPasswordLink} href="/recuperar-contraseña">Olvidé mi contraseña</a>
                    </p>
                </div>
                <div className={styles.googleButton}>
                    <button type="button">
                        <img src={iconGoogle} alt="Google Icon" />
                        Ingresar con Google
                    </button>
                </div>
                <p className={styles.registerLink}>¿No tienes cuenta? <a href="/register">Regístrate aquí</a></p>
            </div>
        </div>
    );
};

export default Login;