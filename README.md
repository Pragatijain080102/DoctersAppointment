// src/components/Navbar.jsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { assets } from '../assets/assets';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="w-full overflow-x-hidden">
      {/* Top Navbar */}
      <div className="flex flex-wrap items-center justify-between px-4 py-6 bg-primary-dull">
        <div className="flex items-center space-x-3">
          <img src={assets.logo_header} alt="Cupcake Logo" className="h-20 w-20" />
          <h1 className="text-3xl font-bold text-primary leading-tight">
            The <br />Cupcake <br /> Maker
          </h1>
        </div>

        <div className="hidden md:flex items-center space-x-6 text-white font-medium text-lg">
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/cart">Cart(0)</NavLink>
        </div>

        <div className="hidden md:flex">
          <NavLink
            to="/Login"
            className="px-4 py-2 bg-gray-200 text-pink-700 rounded hover:bg-primary hover:text-white transition duration-300"
          >
            Login
          </NavLink>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-primary text-white px-4 py-3 mt-3 md:flex md:items-center md:justify-between">
        <div className="flex justify-between items-center w-full md:w-auto">
          <div className="hidden md:flex space-x-7 font-mono text-lg font-semibold">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/NewProducts">New Products</NavLink>
            <NavLink to="/Specials">Specials</NavLink>
            <NavLink to="/SiteMap">Sitemap</NavLink>
            <NavLink to="/MyProfile">My Profile</NavLink>
            <NavLink to="/Contact">Contacts</NavLink>
          </div>

          {/* Mobile Toggle Button */}
          <button className="md:hidden text-white" onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Search */}
        <div className="hidden md:block bg-gray-200 rounded px-3 py-1 mt-3 md:mt-0">
          <input
            type="text"
            placeholder="🔍 Search"
            className="px-2 py-1 rounded text-black"
          />
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4">
            {/* Nav Links */}
            <div className="flex flex-col space-y-2 font-semibold">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/NewProducts">New Products</NavLink>
              <NavLink to="/Specials">Specials</NavLink>
              <NavLink to="/SiteMap">Sitemap</NavLink>
              <NavLink to="/MyProfile">My Profile</NavLink>
              <NavLink to="/Contact">Contacts</NavLink>
            </div>

            {/* Search Bar on Mobile */}
            <input
              type="text"
              placeholder="🔍 Search"
              className="w-full px-3 py-2 rounded text-black bg-gray-200"
            />

            {/* Utility Links + Login */}
            <div className="flex flex-col space-y-3 mt-4 text-white font-medium">
              <NavLink to="/Contact">Contact</NavLink>
              <NavLink to="/Cart">Cart(0)</NavLink>
              <NavLink
                to="/Login"
                className="w-full px-4 py-2 bg-gray-200 text-pink-700 rounded hover:bg-primary-dull hover:text-white transition duration-300 text-center"
              >
                Login
              </NavLink>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Nav;
