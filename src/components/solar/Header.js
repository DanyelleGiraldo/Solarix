import React from 'react';


const Header = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md text-gray-800 py-4 fixed w-full z-10 shadow-sm">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold tracking-tight text-green-700">Solarix</h1>
          <nav className="hidden md:flex space-x-6">
            <a href="#">Inicio</a>
            <a href="#servicios">Servicios</a>
            <a href="#contacto">Contacto</a>
          </nav>
          <button className="md:hidden p-2">
            <span className="sr-only">Abrir menú</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>
  );
}; 


export default Header;
