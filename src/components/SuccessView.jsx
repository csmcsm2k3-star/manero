import React, { useEffect } from 'react';
import './SuccessView.css';

const SuccessView = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="success-overlay fade-in">
            <div className="success-content">
                <div className="success-icon-container">
                    <div className="success-icon">✓</div>
                </div>

                <h2 className="success-title">Compra Realizada con Éxito</h2>
                <p className="success-message title-script">Bienvenido a la experiencia Manero</p>

                <div className="success-details">
                    <p>Le hemos enviado un correo de confirmación con los detalles de su exclusivo pedido.</p>
                </div>

                <button className="btn-secondary success-btn" onClick={onClose}>
                    Volver a la tienda
                </button>
            </div>
        </div>
    );
};

export default SuccessView;
