import React from 'react';
import './Navbar.css';

const Navbar = ({ cartCount, onOpenCart, user, onOpenLogin, onOpenProfile, currentView, onSetView }) => {
  const [isAnimating, setIsAnimating] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  React.useEffect(() => {
    if (cartCount > 0) {
      setIsAnimating(true);
      const timer = setTimeout(() => setIsAnimating(false), 500);
      return () => clearTimeout(timer);
    }
  }, [cartCount]);

  const handleNavClick = (view) => {
    onSetView(view);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container container">
        <div className="navbar-logo" onClick={() => handleNavClick('experience')}>
          <span className="logo-text">MANERO</span>
          <span className="logo-subtext">Delicatessen</span>
        </div>

        <div className="navbar-links-desktop">
          <button
            className={`nav-link-desktop ${currentView === 'experience' ? 'active' : ''}`}
            onClick={() => handleNavClick('experience')}
          >
            LA EXPERIENCIA
          </button>
          <button
            className={`nav-link-desktop ${currentView === 'shop' ? 'active' : ''}`}
            onClick={() => handleNavClick('shop')}
          >
            TIENDA
          </button>
          <a href="https://barmanero.es" target="_blank" rel="noopener noreferrer" className="nav-link-desktop ext-link">
            WEB OFICIAL ↗
          </a>
        </div>

        <div className="navbar-actions">
          {user ? (
            <button className="profile-btn" onClick={onOpenProfile}>
              <span className="profile-icon">👤</span>
              <span className="profile-name">{user.name.split(' ')[0]}</span>
            </button>
          ) : (
            <button className="login-link-btn" onClick={onOpenLogin}>
              Acceder
            </button>
          )}

          <button
            className={`cart-btn ${isAnimating ? 'cart-bump' : ''}`}
            onClick={onOpenCart}
          >
            <span className="cart-icon">🛒</span>
            <span className="cart-text">Carrito</span>
            {cartCount > 0 && (
              <span className="cart-badge">{cartCount}</span>
            )}
          </button>

          <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          <div className="mobile-main-links">
            <button onClick={() => handleNavClick('experience')} className={currentView === 'experience' ? 'active' : ''}>LA EXPERIENCIA</button>
            <button onClick={() => handleNavClick('shop')} className={currentView === 'shop' ? 'active' : ''}>TIENDA</button>
            <a href="https://barmanero.es" target="_blank" rel="noopener noreferrer">WEB OFICIAL</a>
          </div>

          <div className="mobile-menu-footer">
            {user ? (
              <button className="btn-secondary" onClick={() => { onOpenProfile(); setIsMenuOpen(false); }}>Mi Cuenta</button>
            ) : (
              <button className="btn-primary" onClick={() => { onOpenLogin(); setIsMenuOpen(false); }}>Acceder</button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
