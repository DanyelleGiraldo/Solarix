import React from 'react';
import panelimage from './images/panelmain.jpeg';

const MainContent = () => {
  return (
    <div className="w-full px-4 py-8" style={{ background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%)' }}>
      <div className="flex flex-wrap -mx-4 items-center">
        <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
          <h2 className="text-2xl font-bold mb-4 text-green-800">Tu aliado en energía fotovoltaica</h2>
          <p className="mb-4 text-lg text-gray-600">
            Transformamos la energia solar en soluciones eficientes y sostenibles para todo tipo de proyectos energeticos. Desde dimesionamiento hasta montaje, te ofrecemos energía limpia y confiable.
          </p>
          <p className="text-lg text-gray-600">
            Nuestro equipo experto se especializa en instalaciones solares tanto para el sector público como privado, garantizando calidad y rendimiento en cada proyecto.
          </p>
        </div>
        <div className="w-full md:w-1/2 px-4">
          <img src={panelimage} alt="Solar Panels" className="w-full h-auto rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
