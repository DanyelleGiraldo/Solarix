import React, { useState } from 'react';

const Sistemas = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedSystem, setSelectedSystem] = useState(null);

  const sistemas = [
    { 
      nombre: 'ON GRID', 
      descripcion: 'Sistemas conectados a la red eléctrica, permiten el intercambio de energía con la compañía eléctrica.',
      video: 'https://www.youtube.com/embed/tsNbXJojVOE'
    },
    { 
      nombre: 'OFF GRID', 
      descripcion: 'Sistemas independientes que funcionan sin conexión a la red eléctrica, ideales para zonas remotas.',
      video: 'https://www.youtube.com/embed/lBlGuo86f7I' 
    },
    { 
      nombre: 'HÍBRIDO', 
      descripcion: 'Sistemas que combinan energía solar con otras fuentes, proporcionando mayor flexibilidad y seguridad en el suministro.',
      video: 'https://www.youtube.com/embed/tsNbXJojVOE'
    },
    { 
      nombre: 'BOMBEO DIRECTO', 
      descripcion: 'Sistemas diseñados para bombear agua directamente con energía solar, perfectos para riego y abastecimiento.',
      video: 'https://www.youtube.com/embed/VIDEO_ID_3'
    }
    
  ];

  const handleOpenModal = (system) => {
    setSelectedSystem(system);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setSelectedSystem(null);
  };

  return (
    <div className="bg-white py-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-32 h-32 bg-green-300 transform -rotate-45"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-green-300 transform -rotate-45"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold text-green-800 mb-4 text-center">SISTEMAS SOLARES</h2>
        <p className="text-green-800 mb-8 text-center">Tenemos un sistema para cada necesidad que requieras.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sistemas.map((system, index) => (
            <div key={index} className="bg-green-700 text-white rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105 cursor-pointer" onClick={() => handleOpenModal(system)}>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-green-800 rounded-full flex items-center justify-center mb-2">
                  <img src={`/icons/${system.nombre.toLowerCase().replace(' ', '-')}.svg`} alt={system.nombre} className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold mb-2">{system.nombre}</h3>
                <p className="text-gray-200 text-center">{system.descripcion}</p>
              </div>
            </div>
          ))}
        </div>

        {modalVisible && selectedSystem && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white w-full md:w-3/4 lg:w-2/3 rounded-lg p-6 relative">
              <button
                className="absolute top-2 right-2 text-black hover:text-red-600"
                onClick={handleCloseModal}
              >
                &times;
              </button>
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 mb-4 md:mb-0">
                  <iframe
                    width="100%"
                    height="300" 
                    src={selectedSystem.video}
                    title={selectedSystem.nombre}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-lg" 
                  ></iframe>
                </div>
                <div className="md:ml-6 flex-grow">
                  <h3 className="text-2xl font-bold mb-4">{selectedSystem.nombre}</h3>
                  <p className="text-gray-700 mb-4">{selectedSystem.descripcion}</p>
                  <button
                    onClick={handleCloseModal}
                    className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sistemas;
