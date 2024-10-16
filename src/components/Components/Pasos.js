// Pasos.js
import React, { useState } from 'react';

const Pasos = ({ pasos, pasosTexts }) => {
  const [descripcionVisible, setDescripcionVisible] = useState(null);

  const handleStepClick = (index) => {
    setDescripcionVisible(descripcionVisible === index ? null : index);
  };

  return (
    <div className="bg-white py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-green-800 mb-4 text-center">{pasosTexts.titulo}</h2>
        <div className="relative">
          {pasos.map((step, index) => (
            <div key={index} className="mb-4">
              <div className="flex items-center cursor-pointer" onClick={() => handleStepClick(index)}>
                <div className="w-12 h-12 bg-green-800 text-white rounded-full flex items-center justify-center font-bold mr-4">
                  {index + 1}
                </div>
                <div className="bg-green-800 text-white p-4 rounded-full flex-grow flex items-center">
                  <span>{step.titulo}</span>
                  <svg
                    className={`w-6 h-6 ml-auto transition-transform duration-300 ${descripcionVisible === index ? 'transform rotate-90' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
              <div className={`overflow-hidden transition-all duration-500 ${descripcionVisible === index ? 'max-h-40' : 'max-h-0'}`}>
                <div className="bg-green-500 text-white p-4 mt-2 ml-16 rounded-full ">
                  <p>{step.descripcion}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pasos;
