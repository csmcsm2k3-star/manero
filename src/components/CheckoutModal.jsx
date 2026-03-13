import React from 'react';
import './CheckoutModal.css';

const CheckoutModal = ({ isOpen, onClose, onConfirm }) => {
    if (!isOpen) return null;

    return (
        <div className="checkout-overlay">
            <div className="checkout-modal fadeIn">
                <button className="checkout-close" onClick={onClose}>✕</button>

                <h2 className="checkout-title">Finalizar Pedido</h2>
                <p className="checkout-subtitle title-script">Complete sus datos de envío y pago</p>

                <div className="checkout-form">
                    <div className="form-section">
                        <h3>Datos de Envío</h3>
                        <div className="form-row">
                            <input type="text" placeholder="Nombre completo" className="form-input" />
                            <input type="email" placeholder="Correo electrónico" className="form-input" />
                        </div>
                        <div className="form-row">
                            <input type="text" placeholder="Dirección de envío" className="form-input full-width" />
                        </div>
                        <div className="form-row">
                            <input type="text" placeholder="Ciudad" className="form-input" />
                            <input type="text" placeholder="Código Postal" className="form-input" />
                        </div>
                    </div>

                    <div className="form-section">
                        <h3>Pago (Modo Demo)</h3>
                        <div className="form-row">
                            <input type="text" placeholder="Número de tarjeta" className="form-input full-width" />
                        </div>
                        <div className="form-row">
                            <input type="text" placeholder="MM/AA" className="form-input half" />
                            <input type="text" placeholder="CVC" className="form-input half" />
                        </div>
                        <p className="demo-notice">
                            * Esta es una demo visual. No se procesarán pagos reales.
                            Puede hacer clic en confirmar sin rellenar datos.
                        </p>
                    </div>

                    <button className="btn-primary checkout-submit-btn" onClick={onConfirm}>
                        Confirmar Pago
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CheckoutModal;
