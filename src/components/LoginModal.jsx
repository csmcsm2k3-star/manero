import React, { useState } from 'react';
import './LoginModal.css';

const LoginModal = ({ isOpen, onClose, onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simple mock login - any email works
        const userData = {
            name: email.split('@')[0],
            email: email,
            avatar: "👤"
        };
        onLogin(userData);
        onClose();
    };

    return (
        <div className="login-overlay" onClick={onClose}>
            <div className="login-modal fadeIn" onClick={(e) => e.stopPropagation()}>
                <button className="login-close" onClick={onClose}>✕</button>
                <h2 className="login-title">Bienvenido a Manero</h2>
                <p className="login-subtitle title-script">Acceda a su experiencia exclusiva</p>

                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Correo Electrónico</label>
                        <input
                            type="email"
                            className="form-input"
                            placeholder="ejemplo@manero.es"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Contraseña</label>
                        <input
                            type="password"
                            className="form-input"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn-primary login-btn">Iniciar Sesión</button>
                </form>

                <p className="login-footer">
                    ¿No tiene cuenta? <span className="gold-link">Regístrese ahora</span>
                </p>
            </div>
        </div>
    );
};

export default LoginModal;
