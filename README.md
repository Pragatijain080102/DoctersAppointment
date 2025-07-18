// src/components/Navbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png'; // Make sure this path matches your project

const Navbar = () => {
  return (
    <header className="w-full">
      {/* Top Navbar */}
      <div className="flex items-center justify-between px-4 py-2 bg-gradient-to-r from-pink-200 to-pink-400">
        {/* Left: Logo and Site Name */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Cupcake Logo" className="h-12 w-12" />
          <h1 className="text-xl font-bold text-pink-900">The Cupcake Maker</h1>
        </div>

        {/* Right: Utility Links */}
        <ul className="flex space-x-6 text-pink-900 font-medium">
          <li><NavLink to="/contact">Contact</NavLink></li>
          <li><NavLink to="/cart">Cart(0)</NavLink></li>
          <li><NavLink to="/login">Login</NavLink></li>
        </ul>
      </div>

      {/* Main Navigation Bar */}
      <nav className="flex flex-wrap items-center justify-between px-4 py-3 bg-pink-500 text-white">
        <ul className="flex flex-wrap space-x-4 font-semibold text-sm md:text-base">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/new-products">New Products</NavLink></li>
          <li><NavLink to="/specials">Specials</NavLink></li>
          <li><NavLink to="/account">My Account</NavLink></li>
          <li><NavLink to="/sitemap">Sitemap</NavLink></li>
          <li><NavLink to="/contacts">Contacts</NavLink></li>
          <li><NavLink to="/blog">Blog</NavLink></li>
        </ul>

        {/* Search Bar */}
        <div className="mt-2 md:mt-0">
          <input
            type="text"
            placeholder="🔍 Search"
            className="px-2 py-1 rounded text-black"
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
