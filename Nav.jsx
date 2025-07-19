// src/components/Navbar.jsx
import React, { useState } from 'react';
import { NavLink ,useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Optional: install `lucide-react` or use SVGs
import { assets } from '../assets/assets';

const Nav = () => {
    const Navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    const [token, setToken] = useState(true);

    return (
        <header className="w-full">
            {/* Top Navbar */}
            <div className="flex items-center justify-between px-4 py-6 bg-primary-dull ">
                <div className="flex items-center space-x-3">
                    <img src={assets.logo_header} alt="Cupcake Logo" className="h-20 w-20" />
                    <h1 className="text-3xl font-bold text-primary">The <br />Cupcake <br /> Maker</h1>
                </div>
                <ul className="hidden md:flex space-x-6 text-white font-medium text-lg">
                    <li><NavLink to="/Contact">Contact</NavLink></li>
                    <li><NavLink to="/Cart">Cart(0)</NavLink></li>
                    <li>
                        <div className="flex items-center space-x-2">
                            {
                                token
                                    ? <div className="flex items-center gap-2 cursor-pointer group relative">
                            <img className='w-8 rounded-full' src={assets.profile_pic} alt="" />
                            <img className='w-2.5' src={assets.dropdown_icon} alt="" />
                            <div className="absolute top-0 right-0 pt-14 text-black font-medium  z-20 hidden group-hover:block">
                                <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                                    <p onClick={() => Navigate('/MyProfile')} className=" cursor-pointer">My Profile</p>
                                    <p onClick={() => setToken(false)} className=" cursor-pointer">Logout</p>
                                </div>
                            </div>
                        </div>
                                    : <button className='bg-gray-200 text-pink-700 px-4 py-2 rounded font-light hidden md:block hover:bg-primary hover:text-white transition duration-300' onClick={() => Navigate('/Login')}>Login</button>
                            }
                        </div>
                    </li>
                </ul>
            </div>

            {/* Main Navbar */}
            <nav className="bg-primary text-white px-4 py-3 mt-3 md:flex md:items-center md:justify-between">
                <div className="flex justify-between items-center w-full md:w-auto">
                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-7 font-mono  text-xl md:text-base font-mono">
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
                    <div className="md:hidden mt-3 space-y-2 hover:border-white">
                        <div className="flex flex-col space-y-2 font-semibold ">
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
                            className="mt-3 px-1 py-1 rounded text-black w-half sm:block bg-gray-200 rounded px-3 py-1 mt-3 md:mt-0"
                        />

                        {/* Utility Links on Mobile */}
                        <div className="flex flex-col space-y-1 mt-4 text-white font-medium">
                            <NavLink to="/Contact">Contact</NavLink>
                            <NavLink to="/Cart">Cart(0)</NavLink>
                            <NavLink to="/Login" className=' w-1/2 px-4 py-2 bg-gray-200 text-pink-700 rounded hover:bg-primary hover:text-white transition duration-300'>Login</NavLink>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Nav;