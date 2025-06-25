// src/components/Navbar.js
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white px-6 py-4 md:px-10 md:py-6 flex items-center justify-between relative shadow-md rounded-none md:rounded-2xl z-50">
      {/* Logo */}
      <h1 className="text-3xl md:text-4xl font-bold font-['Tw_Cen_MT'] text-blue-700">
        Oral<span className="text-black/80">Nexa</span>
      </h1>

      {/* Desktop Nav */}
      <nav className="hidden lg:flex space-x-6 xl:space-x-10 text-xl xl:text-2xl font-['Tw_Cen_MT'] text-black">
        <a href="#services" className="hover:text-blue-700">Services</a>
        <a href="#" className="hover:text-blue-700">Pricing</a>
        <a href="#about" className="hover:text-blue-700">About</a>
        <a href="#" className="hover:text-blue-700">Contact</a>
        <a href="#" className="hover:text-blue-700">Sign In</a>
      </nav>

      {/* Register Button (Desktop only) */}
      <button className="hidden lg:block bg-blue-700 text-white text-xl xl:text-2xl font-bold rounded-[10px] px-4 py-1 hover:bg-blue-800 transition duration-200">
        Register
      </button>

      {/* Mobile Menu Icon */}
      <button
        className="lg:hidden text-blue-700"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t z-50 flex flex-col items-start p-6 space-y-4 lg:hidden text-lg font-['Tw_Cen_MT']">
          <a href="#services" className="hover:text-blue-700">Services</a>
          <a href="#" className="hover:text-blue-700">Pricing</a>
          <a href="#about" className="hover:text-blue-700">About</a>
          <a href="#" className="hover:text-blue-700">Contact</a>
          <a href="#" className="hover:text-blue-700">Sign In</a>
          <button className="bg-blue-700 text-white px-4 py-2 rounded-md text-base w-full text-center">
            Register
          </button>
        </div>
      )}
    </header>
  );
}
