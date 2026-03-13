import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ExperiencePage from './components/ExperiencePage';
import ShopPage from './components/ShopPage';
import CartDrawer from './components/CartDrawer';
import CheckoutModal from './components/CheckoutModal';
import SuccessView from './components/SuccessView';
import LoginModal from './components/LoginModal';
import UserProfileDrawer from './components/UserProfileDrawer';
import './index.css';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [currentView, setCurrentView] = useState('experience');
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  // New user & profile states
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [orders, setOrders] = useState([]);

  // Load state from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('manero_user');
    const savedOrders = localStorage.getItem('manero_orders');

    if (savedUser && savedUser !== "undefined") {
      try {
        setCurrentUser(JSON.parse(savedUser));
      } catch (e) {
        console.error("Error parsing user", e);
      }
    }

    if (savedOrders && savedOrders !== "undefined") {
      try {
        setOrders(JSON.parse(savedOrders));
      } catch (e) {
        console.error("Error parsing orders", e);
      }
    }
  }, []);

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleAddToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
    // Removed setIsCartOpen(true) to allow buying more things without interruption
  };

  const handleUpdateQuantity = (productId, delta) => {
    setCartItems(prevItems => {
      return prevItems.map(item => {
        if (item.id === productId) {
          const newQty = Math.max(0, item.quantity + delta);
          return { ...item, quantity: newQty };
        }
        return item;
      }).filter(item => item.quantity > 0);
    });
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const handleProceedToCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleConfirmCheckout = () => {
    const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    // Create new order
    const newOrder = {
      id: Math.random().toString(36).substr(2, 9).toUpperCase(),
      date: new Date().toLocaleDateString('es-ES', { day: '2-digit', month: 'long', year: 'numeric' }),
      total: total,
      items: [...cartItems],
      status: "En preparación"
    };

    const updatedOrders = [newOrder, ...orders];
    setOrders(updatedOrders);

    // Persist orders
    localStorage.setItem('manero_orders', JSON.stringify(updatedOrders));

    setIsCheckoutOpen(false);
    setIsSuccessOpen(true);
    setCartItems([]);
  };

  const handleLogin = (userData) => {
    setCurrentUser(userData);
    localStorage.setItem('manero_user', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('manero_user');
    setOrders([]);
    localStorage.removeItem('manero_orders');
    setIsProfileOpen(false);
  };

  const handleCloseSuccess = () => {
    setIsSuccessOpen(false);
  };

  return (
    <div className="app">
      <Navbar
        cartCount={cartCount}
        onOpenCart={() => setIsCartOpen(true)}
        user={currentUser}
        onOpenLogin={() => setIsLoginOpen(true)}
        onOpenProfile={() => setIsProfileOpen(true)}
        currentView={currentView}
        onSetView={setCurrentView}
      />

      <main>
        {currentView === 'experience' ? (
          <ExperiencePage />
        ) : (
          <ShopPage onAddToCart={handleAddToCart} />
        )}
      </main>

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onRemoveFromCart={handleRemoveFromCart}
        onUpdateQuantity={handleUpdateQuantity}
        onProceedToCheckout={handleProceedToCheckout}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        onConfirm={handleConfirmCheckout}
      />

      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onLogin={handleLogin}
      />

      <UserProfileDrawer
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
        user={currentUser}
        orders={orders}
        onLogout={handleLogout}
      />

      {isSuccessOpen && (
        <SuccessView
          isOpen={isSuccessOpen}
          onClose={handleCloseSuccess}
        />
      )}
    </div>
  );
}

export default App;
