import React from 'react';
import './CartDrawer.css';

const CartDrawer = ({ isOpen, onClose, cartItems, onRemoveFromCart, onUpdateQuantity, onProceedToCheckout }) => {
    const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    return (
        <div className={`cart-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}>
            <div
                className={`cart-drawer ${isOpen ? 'open' : ''}`}
                onClick={(e) => e.stopPropagation()} // Prevent clicking inside drawer from closing it
            >
                <div className="cart-header">
                    <h2>Tu Carrito</h2>
                    <button className="cart-close-btn" onClick={onClose}>✕</button>
                </div>

                <div className="cart-items">
                    {cartItems.length === 0 ? (
                        <div className="cart-empty">
                            <p className="title-script">Tu carrito está vacío</p>
                            <p>Descubre nuestra selección delicatessen.</p>
                        </div>
                    ) : (
                        cartItems.map(item => (
                            <div key={item.id} className="cart-item">
                                <img src={item.image} alt={item.name} className="cart-item-img" />
                                <div className="cart-item-details">
                                    <h4>{item.name}</h4>
                                    <p className="cart-item-price">{item.price.toFixed(2)} €</p>
                                    <div className="cart-item-actions">
                                        <div className="qty-controls">
                                            <button
                                                className="qty-btn"
                                                onClick={() => onUpdateQuantity(item.id, -1)}
                                            >
                                                −
                                            </button>
                                            <span className="cart-item-qty">{item.quantity}</span>
                                            <button
                                                className="qty-btn"
                                                onClick={() => onUpdateQuantity(item.id, 1)}
                                            >
                                                +
                                            </button>
                                        </div>
                                        <button
                                            className="cart-item-remove"
                                            onClick={() => onRemoveFromCart(item.id)}
                                        >
                                            Eliminar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {cartItems.length > 0 && (
                    <div className="cart-footer">
                        <div className="cart-total">
                            <span>Total</span>
                            <span>{total.toFixed(2)} €</span>
                        </div>
                        <p className="cart-tax-notice">Impuestos incluidos</p>
                        <button className="btn-primary cart-checkout-btn" onClick={onProceedToCheckout}>
                            Pagar
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartDrawer;
