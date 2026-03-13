import React, { useState } from 'react';
import ProductCard from './ProductCard';
import './ProductList.css';

// Mock product data for the visual demo
const MOCK_PRODUCTS = [
    // Caviar & Ahumados
    {
        id: 1,
        name: "Caviar Oscetra Imperial",
        category: "Caviar & Ahumados",
        type: "Selección Especial - 50g",
        price: 180.00,
        image: "https://www.arcticcrab.com/wp-content/uploads/2020/08/caviar-osetra-zar-imperial-1-600x810.jpg"
    },
    {
        id: 2,
        name: "Salmón Ahumado Salvaje",
        category: "Caviar & Ahumados",
        type: "Corte Imperial - 200g",
        price: 45.00,
        image: "https://www.alvarezseleccion.com/wp-content/uploads/2021/06/salmon-salvaje-al-corte-200-gramos-aprox.jpg"
    },

    // Vinos & Cavas
    {
        id: 3,
        name: "Vino Tinto Reserva Familia",
        category: "Vinos & Cavas",
        type: "Rioja Alta, 2017",
        price: 45.50,
        image: "https://bodegasaltanza.com/wp-content/uploads/2022/07/altanzaFamilia-horizontal.jpg"
    },
    {
        id: 4,
        name: "Champagne Grand Cru",
        category: "Vinos & Cavas",
        type: "Blanc de Blancs",
        price: 110.00,
        image: "https://d2i4pzk02r8gti.cloudfront.net/sylius_big/7f/3e/76b242cd3600dffb4254e2500b3d.jpeg"
    },
    {
        id: 5,
        name: "Vino Blanco Albariño",
        category: "Vinos & Cavas",
        type: "Rías Baixas Meninas",
        price: 28.00,
        image: "https://storage.gadisline.com/catalog/6539c4f2-650e-454a-962d-74be91c42bd5"
    },

    // Ibéricos & Quesos
    {
        id: 6,
        name: "Jamón de Bellota 100% Ibérico",
        category: "Ibéricos & Quesos",
        type: "Cortado a Cuchillo - 100g",
        price: 32.00,
        image: "https://www.gastronomicspain.com/7717-large_default/jamon-bellota-100-iberico-cortado-a-cuchillo.webp"
    },
    {
        id: 7,
        name: "Queso Trufado Curado",
        category: "Ibéricos & Quesos",
        type: "Artesanal de Oveja",
        price: 24.90,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs_PrECbWbEbAeoZ0gsdJeTJUDx_EfuCP0gg&s"
    },
    {
        id: 8,
        name: "Lomo Doblé Ibérico",
        category: "Ibéricos & Quesos",
        type: "Curación de 6 meses",
        price: 22.00,
        image: "https://jamoneverybody.com/wp-content/uploads/2020/06/JamonEverybody_LomoDobladoEmilioDiaz.jpg"
    },

    // Conservas & Encurtidos
    {
        id: 9,
        name: "Anchoas del Cantábrico",
        category: "Conservas & Encurtidos",
        type: "Costera OOO - 12 filetes",
        price: 35.00,
        image: "https://www.productosdeasturias.com/8390-large_default/anchoas-del-cantabrico-en-aceite-de-oliva-la-costera.jpg"
    },
    {
        id: 10,
        name: "Alcachofas Blancas de Tudela",
        category: "Conservas & Encurtidos",
        type: "En Aceite de Oliva Virgen",
        price: 18.50,
        image: "https://lachinata.es/wp-content/uploads/productos/alcachofas-confitadas-en-aceite-de-oliva-virgen-extra-la-chinata.jpg"
    },
    {
        id: 11,
        name: "Olivas Gordal Rellenas",
        category: "Conservas & Encurtidos",
        type: "Suaves y carnosas",
        price: 9.50,
        image: "https://aceiteolivaespaña.com/wp-content/uploads/2024/05/Aceituna-Gordal-Rellena-De-Pimiento-Rojo-300g.jpg"
    },

    // Trufas & Delicatessen
    {
        id: 12,
        name: "Trufa Negra Fresca",
        category: "Trufas & Delicatessen",
        type: "Tuber Melanosporum",
        price: 85.00,
        image: "https://www.trufadelavega.com/wp-content/uploads/2021/07/20231216_194843-scaled.jpg"
    },
    {
        id: 13,
        name: "Aceite de Oliva Virgen Extra",
        category: "Trufas & Delicatessen",
        type: "Edición Limitada Primer Día",
        price: 42.00,
        image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&q=80&w=800"
    }
];

const CATEGORIES = [
    "Todos",
    "Ibéricos & Quesos",
    "Vinos & Cavas",
    "Conservas & Encurtidos",
    "Caviar & Ahumados",
    "Trufas & Delicatessen"
];

const ProductList = ({ onAddToCart }) => {
    const [activeCategory, setActiveCategory] = useState("Todos");
    const [inputValue, setInputValue] = useState("");
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        setSearchQuery(inputValue);
    };

    const filteredProducts = MOCK_PRODUCTS.filter(product => {
        const matchesCategory = activeCategory === "Todos" || product.category === activeCategory;

        // Normalize strings to handle accents and case insensitivity
        const normalize = (str) => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

        const matchesSearch = normalize(product.name).includes(normalize(searchQuery));
        return matchesCategory && matchesSearch;
    });

    return (
        <section className="product-list-section" id="products">
            <div className="container">
                <div className="section-header fade-in">
                    <h2 className="section-title">Nuestra Selección</h2>
                    <p className="title-script">Exclusividad en cada detalle</p>

                    <form className="search-container" onSubmit={handleSearchSubmit}>
                        <input
                            type="text"
                            className="search-input"
                            placeholder="Buscar por nombre de producto... (ej. jamón, albariño)"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                        <button type="submit" className="search-submit-btn">
                            <span className="search-icon">🔍</span>
                        </button>
                    </form>

                    <div className="title-separator"></div>
                </div>

                <div className="category-nav fade-in">
                    <ul className="category-list">
                        {CATEGORIES.map(category => (
                            <li key={category} className="category-item">
                                <button
                                    className={`category-btn ${activeCategory === category ? 'active' : ''}`}
                                    onClick={() => setActiveCategory(category)}
                                >
                                    {category}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="product-grid">
                    {filteredProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onAddToCart={onAddToCart}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductList;
