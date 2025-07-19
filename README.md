// src/components/Navbar.jsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { assets } from '../assets/assets';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="w-full">
      {/* Top Navbar */}
      <div className="bg-primary-dull py-4 px-4">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={assets.logo_header} alt="Cupcake Logo" className="h-20 w-20" />
            <h1 className="text-3xl font-bold text-primary leading-tight">
              The <br /> Cupcake <br /> Maker
            </h1>
          </div>

          {/* Links & Login */}
          <div className="hidden md:flex items-center space-x-4 text-white text-lg">
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/cart">Cart(0)</NavLink>
            <NavLink
              to="/Login"
              className="ml-2 px-4 py-2 bg-gray-200 text-pink-700 rounded hover:bg-primary hover:text-white transition duration-300"
            >
              Login
            </NavLink>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-primary text-white mt-3 px-4">
        <div className="max-w-screen-xl mx-auto md:flex md:items-center md:justify-between py-3">
          <div className="flex justify-between items-center w-full md:w-auto">
            {/* Navigation Links (Desktop) */}
            <div className="hidden md:flex space-x-6 text-lg font-medium">
              {['/', '/NewProducts', '/Specials', '/SiteMap', '/MyProfile', '/Contact'].map((route, i) => (
                <NavLink
                  key={i}
                  to={route}
                  className="hover:border hover:border-white px-3 py-1 rounded transition-all duration-300"
                >
                  {['Home', 'New Products', 'Specials', 'Sitemap', 'My Profile', 'Contacts'][i]}
                </NavLink>
              ))}
            </div>

            {/* Hamburger Icon */}
            <button className="md:hidden text-white" onClick={toggleMenu}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Search Bar (Desktop) */}
          <div className="hidden md:block mt-3 md:mt-0 bg-gray-200 rounded px-3 py-1">
            <input
              type="text"
              placeholder="🔍 Search"
              className="px-2 py-1 rounded text-black outline-none bg-transparent"
            />
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-3 space-y-2">
            <div className="flex flex-col space-y-2 font-semibold">
              {['/', '/NewProducts', '/Specials', '/SiteMap', '/MyProfile', '/Contact'].map((route, i) => (
                <NavLink
                  key={i}
                  to={route}
                  className="px-4 py-2 hover:border hover:border-white rounded"
                >
                  {['Home', 'New Products', 'Specials', 'Sitemap', 'My Profile', 'Contacts'][i]}
                </NavLink>
              ))}
            </div>

            {/* Mobile Search */}
            <div className="mt-3 px-4">
              <input
                type="text"
                placeholder="🔍 Search"
                className="w-full px-3 py-2 rounded text-black bg-gray-200"
              />
            </div>

            {/* Mobile Utilities */}
            <div className="mt-4 flex flex-col space-y-2 px-4">
              <NavLink to="/contact">Contact</NavLink>
              <NavLink to="/cart">Cart(0)</NavLink>
              <NavLink
                to="/Login"
                className="w-full text-center px-4 py-2 bg-gray-200 text-pink-700 rounded hover:bg-primary-dull hover:text-white transition duration-300"
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
