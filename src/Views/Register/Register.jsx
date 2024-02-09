import React, { useState } from "react";
import styles from './Register.module.css';
import axios from 'axios';

const Register = () => {
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [prefix, setPrefix] = useState('');
    const [mailError, setMailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [nameError, setNameError] = useState(false);
    const [lastNameError, setLastNameError] = useState(false);
    const [phoneNumberError, setPhoneNumberError] = useState(false);

    const handleMailChange = (e) => {
        setMail(e.target.value);
        setMailError(!isValidEmail(e.target.value));
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!mail || !password || !name || !lastName || !phoneNumber || !prefix) {
            // Mostrar mensaje de error indicando que faltan datos
            return;
        }
        try {
            const userData = { mail, password, name, last_name: lastName, phone_number: prefix + phoneNumber,  };
            const response = await axios.post('/user', userData);
            // Manejar la respuesta del backend según sea necesario
        } catch (error) {
            // Manejar el error de la llamada al backend
        }
    };

    const isValidEmail = (mail) => {
        return /\S+@\S+\.\S+/.test(mail);
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

    const isFormValid = mail && password && name && lastName && phoneNumber && prefix && 
                        !mailError && !passwordError && !nameError && !lastNameError && !phoneNumberError;

    return (
        <div className={styles.registerContainer}>
            <div className={styles.card}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Ingresa tus datos para crear tu cuenta</h1>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={`${styles.formGroup} ${mailError ? styles.invalidInput : ''}`}>
                            <input
                                placeholder="Email"
                                type="email"
                                value={mail}
                                onChange={handleMailChange}
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
                                <option value="+54">+54 (Argentina)</option>
                                <option value="+591">+591 (Bolivia)</option>
                                <option value="+55">+55 (Brasil)</option>
                                <option value="+501">+501 (Belice)</option>
                                <option value="+56">+56 (Chile)</option>
                                <option value="+57">+57 (Colombia)</option>
                                <option value="+506">+506 (Costa Rica)</option>
                                <option value="+53">+53 (Cuba)</option>
                                <option value="+599">+599 (Curazao)</option>
                                <option value="+593">+593 (Ecuador)</option>
                                <option value="+503">+503 (El Salvador)</option>
                                <option value="+502">+502 (Guatemala)</option>
                                <option value="+592">+592 (Guyana)</option>
                                <option value="+509">+509 (Haití)</option>
                                <option value="+504">+504 (Honduras)</option>
                                <option value="+52">+52 (México)</option>
                                <option value="+505">+505 (Nicaragua)</option>
                                <option value="+507">+507 (Panamá)</option>
                                <option value="+595">+595 (Paraguay)</option>
                                <option value="+51">+51 (Perú)</option>
                                <option value="+597">+597 (Surinam)</option>
                                <option value="+598">+598 (Uruguay)</option>
                                <option value="+1">+1 (Canadá)</option>
                                <option value="+1">+1 (Estados Unidos)</option>
                                <option value="+58">+58 (Venezuela)</option>
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
