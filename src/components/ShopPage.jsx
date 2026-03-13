import React from 'react';
import ProductList from './ProductList';

const ShopPage = ({ onAddToCart }) => {
    return (
        <div className="shop-page">
            <ProductList onAddToCart={onAddToCart} />
        </div>
    );
};

export default ShopPage;
