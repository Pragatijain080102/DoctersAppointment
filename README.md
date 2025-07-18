// src/components/Navbar.jsx
import React, { useState } from 'react';
import assets from '../assets/assets';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-pink-200 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        
        {/* Logo and Site Title */}
        <div className="flex items-center space-x-3">
          <img src={assets.logo_header} alt="Logo" className="w-12 h-12" />
          <h1 className="text-lg font-bold text-pink-900">The Cupcake Maker</h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-pink-800 font-medium">
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/new-products">NEW PRODUCTS</NavLink>
          <NavLink to="/specials">SPECIALS</NavLink>
          <NavLink to="/account">MY ACCOUNT</NavLink>
          <NavLink to="/sitemap">SITEMAP</NavLink>
          <NavLink to="/contact">CONTACTS</NavLink>
          <NavLink to="/blog">BLOG</NavLink>
        </div>

        {/* Account Actions */}
        <div className="hidden md:flex space-x-4 text-pink-900">
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/cart">Cart(0)</NavLink>
          <NavLink to="/login">Login</NavLink>
        </div>

        {/* Mobile Hamburger Button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-pink-900">
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-pink-100 px-4 py-2 space-y-2 text-pink-900">
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/new-products">NEW PRODUCTS</NavLink>
          <NavLink to="/specials">SPECIALS</NavLink>
          <NavLink to="/account">MY ACCOUNT</NavLink>
          <NavLink to="/sitemap">SITEMAP</NavLink>
          <NavLink to="/contact">CONTACTS</NavLink>
          <NavLink to="/blog">BLOG</NavLink>
          <div className="pt-2 border-t">
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/cart">Cart(0)</NavLink>
            <NavLink to="/login">Login</NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
