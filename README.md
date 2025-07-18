import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "NEW PRODUCTS", path: "/new-products" },
    { name: "SPECIALS", path: "/specials" },
    { name: "MY ACCOUNT", path: "/account" },
    { name: "SITEMAP", path: "/sitemap" },
    { name: "CONTACTS", path: "/contact" },
    { name: "BLOG", path: "/blog" },
  ];

  return (
    <nav className="bg-[#5d0d1f] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Cupcake Logo" className="h-10 w-10 rounded-full" />
          <span className="text-xl font-bold text-pink-200">The Cupcake Maker</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-5 text-sm font-medium">
          {navLinks.map((link, i) => (
            <li key={i}>
              <Link to={link.path} className="hover:text-pink-300 transition">{link.name}</Link>
            </li>
          ))}
        </ul>

        {/* Right Items */}
        <div className="hidden md:flex space-x-4 text-sm">
          <Link to="/contact" className="hover:text-pink-300">Contact</Link>
          <Link to="/cart" className="hover:text-pink-300">Cart(0)</Link>
          <Link to="/login" className="hover:text-pink-300">Login</Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-[#5d0d1f] text-sm">
          {navLinks.map((link, i) => (
            <Link
              key={i}
              to={link.path}
              className="block py-1 border-b border-pink-200 hover:text-pink-300"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2 border-t border-pink-200">
            <Link to="/contact" className="block py-1 hover:text-pink-300">Contact</Link>
            <Link to="/cart" className="block py-1 hover:text-pink-300">Cart(0)</Link>
            <Link to="/login" className="block py-1 hover:text-pink-300">Login</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
