import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

// Navbar: logo, page links and the cart counter (received as a prop)
function Navbar({ cartCount }) {
  // Controls whether the mobile menu is open
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="logo" onClick={closeMenu}>
          Book <span>Haven</span>
        </Link>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <NavLink to="/" end onClick={closeMenu}>Home</NavLink>
          <NavLink to="/shop" onClick={closeMenu}>Shop</NavLink>
          <NavLink to="/about" onClick={closeMenu}>About</NavLink>
          <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
          <NavLink to="/cart" className="cart-link" onClick={closeMenu}>
            Cart <span className="cart-badge">{cartCount}</span>
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
