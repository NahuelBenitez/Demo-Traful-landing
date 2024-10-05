import React, { useState } from 'react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-bluefb border-b border-gray-200 z-50">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        {/* Logo y nombre de la empresa */}
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/path/to/logo.png" className="h-8" alt="Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Nombre de la Empresa</span>
        </a>

        {/* Botón de menú hamburguesa */}
        <button 
          onClick={toggleMenu} 
          type="button" 
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="mobile-menu"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>

        {/* Opciones de navegación (desktop) */}
        <div className="hidden md:flex md:w-auto">
          <ul className="flex space-x-8">
            <li className="relative group">
              <a href="#home" className="block py-2 px-3 text-gray-200 rounded hover:bg-gray-600">
                Home
              </a>
              <span className="absolute left-0 w-full h-1 bg-white transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
            </li>
            <li className="relative group">
              <a href="#about" className="block py-2 px-3 text-gray-200 rounded hover:bg-gray-600">
                About
              </a>
              <span className="absolute left-0 w-full h-1 bg-white transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
            </li>
            <li className="relative group">
              <a href="#contact" className="block py-2 px-3 text-gray-200 rounded hover:bg-gray-600">
                Contact
              </a>
              <span className="absolute left-0 w-full h-1 bg-white transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
            </li>
          </ul>
        </div>
      </div>

      {/* Menú móvil */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`} id="mobile-menu">
        <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50">
          <li>
            <a href="#home" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100">Home</a>
          </li>
          <li>
            <a href="#about" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100">About</a>
          </li>
          <li>
            <a href="#contact" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
