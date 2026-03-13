import React from 'react';
import './UserProfileDrawer.css';

const UserProfileDrawer = ({ isOpen, onClose, user, orders, onLogout }) => {
    return (
        <div className={`profile-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}>
            <div
                className={`profile-drawer ${isOpen ? 'open' : ''}`}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="profile-header">
                    <div className="profile-info-header">
                        <div className="profile-avatar">{user?.avatar || '👤'}</div>
                        <div className="profile-meta">
                            <h2>Mi Cuenta</h2>
                            <p>{user?.name || 'Invitado'}</p>
                        </div>
                    </div>
                    <button className="profile-close-btn" onClick={onClose}>✕</button>
                </div>

                <div className="profile-content">
                    <section className="profile-section">
                        <h3>Historial de Pedidos</h3>
                        <div className="orders-list">
                            {!orders || orders.length === 0 ? (
                                <p className="no-orders title-script">Aún no ha realizado ningún pedido.</p>
                            ) : (
                                orders.map(order => (
                                    <div key={order.id} className="order-card">
                                        <div className="order-header">
                                            <span className="order-id">Pedido #{order.id.slice(-6)}</span>
                                            <span className={`order-status status-${order.status.toLowerCase().replace(' ', '-')}`}>
                                                {order.status}
                                            </span>
                                        </div>
                                        <div className="order-details">
                                            <p>{order.date}</p>
                                            <p className="order-total">{order.total.toFixed(2)} €</p>
                                        </div>
                                        <div className="order-items-detail">
                                            {order.items.map(item => (
                                                <div key={item.id} className="order-item-row">
                                                    <div className="order-item-main">
                                                        <img src={item.image} alt={item.name} className="order-item-thumb" />
                                                        <span className="item-name">{item.name}</span>
                                                    </div>
                                                    <span className="item-qty">x{item.quantity}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </section>

                    <section className="profile-section">
                        <h3>Mis Datos</h3>
                        <div className="user-details-card">
                            <p><strong>Email:</strong> {user?.email}</p>
                            <p><strong>Socio Manero desde:</strong> {new Date().getFullYear()}</p>
                        </div>
                    </section>
                </div>

                <div className="profile-footer">
                    <button className="btn-secondary logout-btn" onClick={onLogout}>
                        Cerrar Sesión
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserProfileDrawer;
