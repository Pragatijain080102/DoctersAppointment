// src/components/Navbar.jsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Optional: install `lucide-react` or use SVGs
import logo from '../assets/logo.png'; // Update the path to your logo image

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="w-full">
      {/* Top Navbar */}
      <div className="flex items-center justify-between px-4 py-2 bg-gradient-to-r from-pink-200 to-pink-400">
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Cupcake Logo" className="h-12 w-12" />
          <h1 className="text-xl font-bold text-pink-900">The Cupcake Maker</h1>
        </div>
        <ul className="hidden md:flex space-x-6 text-pink-900 font-medium">
          <li><NavLink to="/contact">Contact</NavLink></li>
          <li><NavLink to="/cart">Cart(0)</NavLink></li>
          <li><NavLink to="/login">Login</NavLink></li>
        </ul>
      </div>

      {/* Main Navbar */}
      <nav className="bg-pink-500 text-white px-4 py-3 md:flex md:items-center md:justify-between">
        <div className="flex justify-between items-center w-full md:w-auto">
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4 font-semibold text-sm md:text-base">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/new-products">New Products</NavLink>
            <NavLink to="/specials">Specials</NavLink>
            <NavLink to="/account">My Account</NavLink>
            <NavLink to="/sitemap">Sitemap</NavLink>
            <NavLink to="/contacts">Contacts</NavLink>
            <NavLink to="/blog">Blog</NavLink>
          </div>

          {/* Mobile Toggle Button */}
          <button className="md:hidden text-white" onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Search */}
        <div className="hidden md:block">
          <input
            type="text"
            placeholder="🔍 Search"
            className="px-2 py-1 rounded text-black"
          />
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-3 space-y-2">
            <div className="flex flex-col space-y-2 font-semibold">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/new-products">New Products</NavLink>
              <NavLink to="/specials">Specials</NavLink>
              <NavLink to="/account">My Account</NavLink>
              <NavLink to="/sitemap">Sitemap</NavLink>
              <NavLink to="/contacts">Contacts</NavLink>
              <NavLink to="/blog">Blog</NavLink>
            </div>

            {/* Search Bar on Mobile */}
            <input
              type="text"
              placeholder="🔍 Search"
              className="mt-3 px-2 py-1 rounded text-black w-full"
            />

            {/* Utility Links on Mobile */}
            <div className="flex flex-col space-y-1 mt-4 text-white font-medium">
              <NavLink to="/contact">Contact</NavLink>
              <NavLink to="/cart">Cart(0)</NavLink>
              <NavLink to="/login">Login</NavLink>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
