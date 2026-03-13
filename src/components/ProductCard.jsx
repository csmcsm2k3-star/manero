import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product, onAddToCart }) => {
    return (
        <div className="product-card fade-in">
            <div className="product-image-container">
                <img src={product.image} alt={product.name} className="product-image" />
            </div>
            <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-type title-script">{product.type}</p>
                <p className="product-price">{product.price.toFixed(2)} €</p>
                <button
                    className="btn-secondary add-to-cart-btn"
                    onClick={() => onAddToCart(product)}
                >
                    Añadir al carrito
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
