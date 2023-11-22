import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faKey, faKitMedical } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

function LoginPage({ onLogin }) {
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUpClick = () => {
    setIsSignUpMode(true);
  };

  const handleSignInClick = () => {
    setIsSignUpMode(false);
  };

  const handleAdminLogin = (e) => {
    e.preventDefault(); // Prevent default form submission
    // Replace this with your real authentication logic
    if (username === 'admin' && password === 'admin') {
      onLogin();
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className={`container ${isSignUpMode ? 'sign-up-mode' : ''}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form">
            <h2 className="title">Hola 👋 doctor/a</h2>
            <p className="social-text">Por favor ingresa el Token de tu paciente</p>
            <div className="input-field">
              <FontAwesomeIcon icon={faKitMedical} className="my-auto_mx-auto" />
              <input type="text" placeholder="Token" />
            </div>
            <button type="button" className="btn transparent" onClick={handleSignUpClick}>
              Iniciar Sesion
            </button>
          </form>
          <form action="#" className="sign-up-form">
            <h2 className="title">Administrador</h2>
            {error && <div className="error-message">{error}</div>}
            <div className="input-field">
              <FontAwesomeIcon icon={faUser} className="my-auto_mx-auto" />
              <input
                type="text"
                placeholder="Usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={faLock} className="my-auto_mx-auto" />
              <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="button" className="btn transparente" onClick={handleAdminLogin}>
              Iniciar Sesion
            </button>
            <p className="social-text">Inicia sesion con llave fisica</p>
            <div className="social-media">
              <button type="button" className="social-icon" aria-label="Physical Key Login">
                <FontAwesomeIcon icon={faKey} className="my-auto_mx-auto" />
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>Eres Administrador?</h3>
            <p>
              Actualmente estas en el inicio de sesion para un doctor/a
            </p>
            <button type="button" className="btn transparent" onClick={handleSignUpClick}>
              Iniciar Sesion como Administrador
            </button>
          </div>
          <img src="/img/dogLogin1.svg" className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>Eres doctor/a?</h3>
            <p>
              Por favor regresa al inicio de sesion por token
            </p>
            <button type="button" onClick={handleSignInClick} className="btn transparent" id="sign-in-btn">
              Regresar
            </button>
          </div>
          <img src="/img/dogLogin.svg" className="image" alt="" />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
