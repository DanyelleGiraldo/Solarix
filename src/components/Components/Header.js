import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Servicios = [
  { name: "Energía Solar", href: "/paneles" },
  { name: "Redes Eléctricas", href: "/RedesElectricas" },
  { name: "Movilidad Eléctrica", href: "/MovilidadElectrica" },
  { name: "Redes de Comunicación", href: "/Comunicacion" },
  { name: "Sistemas de Vigilancia", href: "/Vigilancia" },
  { name: "Sistemas de Alarmas", href: "/Alarmas" }
];


const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleServicesMenu = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  };

  return (
    <header className="bg-white/80 backdrop-blur-md text-gray-800 py-4 fixed w-full z-10 shadow-sm">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold tracking-tight text-green-700">Solarix</h1>

        {/* Navegación en pantallas grandes */}
        <nav className="hidden md:flex space-x-6 relative">
          <Link to="/" className="text-gray-800 hover:text-green-700">Inicio</Link>
          <div className="relative">
            <button
              onClick={toggleServicesMenu}
              className="focus:outline-none flex items-center"
            >
              Servicios
              <svg
                className={`w-4 h-4 ml-2 transition-transform duration-300 ${isServicesOpen ? 'transform rotate-90' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
            {isServicesOpen && (
              <div className="absolute bg-white shadow-lg mt-2 rounded-md z-20">
                {Servicios.map((servicio, index) => (
                  <Link
                    key={index}
                    to={servicio.href}
                    className="block text-gray-800 hover:bg-gray-100 px-4 py-2"
                    onClick={closeMobileMenu}
                  >
                    {servicio.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        <button onClick={toggleMobileMenu} className="md:hidden p-2">
          <span className="sr-only">Abrir menú</span>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Menú móvil */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white w-full py-4 space-y-4">
          <Link to="/" className="block text-gray-800 hover:text-green-700 px-4" onClick={closeMobileMenu}>
            Inicio
          </Link>
          {Servicios.map((servicio, index) => (
            <Link
              key={index}
              to={servicio.href}
              className="block text-gray-800 hover:bg-gray-100 px-4 py-2"
              onClick={closeMobileMenu}
            >
              {servicio.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
