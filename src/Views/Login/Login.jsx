// Login.js

import React, { useState } from "react";
import styles from './Login.module.css';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes manejar la lógica de inicio de sesión
        console.log("Email:", email);
        console.log("Contraseña:", password);
    };

    return (
        <div className={styles.loginContainer}>
            <div className={styles.card}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Ingresa tu email</h1>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.formGroup}>
                            <input
                                placeholder="Email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <input
                                placeholder="Contraseña"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button className={styles.buttonSubmit} type="submit">Continuar</button>
                    </form>
                    <p className={styles.forgotPassword}>
                        <a href="/recuperar-contraseña">Olvidé mi contraseña</a>
                    </p>
                </div>
                <div className={styles.googleButton}>
                    <button type="button">Ingresar con Google</button>
                </div>
                <p>¿No tienes cuenta? <a href="/registro">Regístrate aquí</a></p>
            </div>
        </div>
    );
};

export default Login;
