import React, { useState } from "react";
import styles from './Register.module.css';
import iconGoogle from '../../Assets/google.png';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [prefix, setPrefix] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [nameError, setNameError] = useState(false);
    const [lastNameError, setLastNameError] = useState(false);
    const [phoneNumberError, setPhoneNumberError] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setEmailError(!isValidEmail(e.target.value));
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setPasswordError(!isValidPassword(e.target.value));
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
        setNameError(!isValidName(e.target.value));
    };

    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
        setLastNameError(!isValidName(e.target.value));
    };

    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value);
        setPhoneNumberError(!isValidPhoneNumber(e.target.value));
    };

    const handlePrefixChange = (e) => {
        setPrefix(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password || !name || !lastName || !phoneNumber || !prefix) {
            // Aquí puedes mostrar un mensaje de error indicando que faltan datos
            return;
        }
        // Aquí puedes enviar los datos al backend para el registro
    };

    const isValidEmail = (email) => {
        return /\S+@\S+\.\S+/.test(email);
    };

    const isValidPassword = (password) => {
        return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
    };

    const isValidName = (name) => {
        return /^[a-zA-Z]+$/.test(name);
    };

    const isValidPhoneNumber = (phoneNumber) => {
        return /^\d+$/.test(phoneNumber);
    };

    const isFormValid = email && password && name && lastName && phoneNumber && prefix && 
                        !emailError && !passwordError && !nameError && !lastNameError && !phoneNumberError;

    return (
        <div className={styles.registerContainer}>
            <div className={styles.card}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Ingresa tus datos para crear tu cuenta</h1>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={`${styles.formGroup} ${emailError ? styles.invalidInput : ''}`}>
                            <input
                                placeholder="Email"
                                type="email"
                                value={email}
                                onChange={handleEmailChange}
                                required
                                className={styles.inputForm}
                            />
                        </div>
                        <div className={`${styles.formGroup} ${passwordError ? styles.invalidInput : ''}`}>
                            <input
                                placeholder="Contraseña"
                                type="password"
                                value={password}
                                onChange={handlePasswordChange}
                                required
                                className={styles.inputForm}
                            />
                        </div>
                        <h2 className={styles.subtitle}>Datos</h2>
                        <div className={`${styles.formGroup} ${nameError ? styles.invalidInput : ''}`}>
                            <input
                                placeholder="Nombre"
                                type="text"
                                value={name}
                                onChange={handleNameChange}
                                required
                                className={styles.inputForm}
                            />
                        </div>
                        <div className={`${styles.formGroup} ${lastNameError ? styles.invalidInput : ''}`}>
                            <input
                                placeholder="Apellido"
                                type="text"
                                value={lastName}
                                onChange={handleLastNameChange}
                                required
                                className={styles.inputForm}
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <select
                                value={prefix}
                                onChange={handlePrefixChange}
                                required
                                className={styles.prefixDropdown}
                            >
                                <option value="">Prefijo</option>
                                <option value="+1">+1</option>
                                <option value="+52">+52</option>
                                {/* Agrega más opciones según sea necesario */}
                            </select>
                            <input
                                placeholder="Número de Celular"
                                type="text"
                                value={phoneNumber}
                                onChange={handlePhoneNumberChange}
                                required
                                className={styles.inputForm}
                            />
                        </div>
                        <button className={styles.buttonSubmit} type="submit" disabled={!isFormValid}>Registrarme</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
