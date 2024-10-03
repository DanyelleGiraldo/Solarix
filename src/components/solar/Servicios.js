import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Servicios = () => {
  const servicios = [
    { 
      nombre: 'Redes Eléctricas – Baja y Media Tensión', 
      descripcion: 'Instalamos redes eléctricas de baja y media tensión para garantizar la correcta distribución de la energía en cualquier tipo de instalación.', 
      imagen: '/images/service-4.jpg' 
    },
    { 
      nombre: 'Sistemas de Seguridad Perimetral - Cercas Eléctricas', 
      descripcion: 'Proveemos cercas eléctricas para la protección perimetral, diseñadas para ofrecer máxima seguridad en cualquier proyecto.', 
      imagen: '/images/service-5.jpg' 
    },
    { 
      nombre: 'Redes de Comunicación – Cableado Estructurado', 
      descripcion: 'Instalamos redes de comunicación mediante cableado estructurado para optimizar las comunicaciones internas y externas.', 
      imagen: '/images/service-6.jpg' 
    },
    { 
      nombre: 'Vigilancia Electrónica - Cámaras de Seguridad', 
      descripcion: 'Implementamos sistemas de cámaras de seguridad con la última tecnología para monitorear y proteger tus espacios.', 
      imagen: '/images/service-7.jpg' 
    },
    { 
      nombre: 'Sistemas de Alarmas – Alambricos e Inalámbricos', 
      descripcion: 'Ofrecemos sistemas de alarma con tecnologías avanzadas para la protección de tu hogar o negocio.', 
      imagen: '/images/service-8.jpg' 
    },
    { 
      nombre: 'Sistemas Biométricos - Control de Acceso Vehicular', 
      descripcion: 'Instalamos sistemas biométricos para la identificación y control de acceso, proporcionando mayor seguridad.', 
      imagen: '/images/service-9.jpg' 
    }
  ];

  const [servicioSeleccionado, setServicioSeleccionado] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const handleOpenModal = (index) => {
    setServicioSeleccionado(index);
  };

  const handleCloseModal = () => {
    setServicioSeleccionado(null);
  };

  const handleWhatsAppClick = (serviceName) => {
    const message = encodeURIComponent(`Hola, me gustaría recibir más información sobre el servicio de ${serviceName}`);
    window.open(`https://wa.me/573202086659?text=${message}`, '_blank'); 
  };

  return (
    <div className="bg-green-800 text-white py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">SERVICIOS</h2>
        <Slider {...settings}>
          {servicios.map((service, index) => (
            <div key={index} className="px-4">
              <div 
                className="bg-green-700 p-4 rounded-lg flex flex-col justify-between h-full"
                style={{ maxHeight: '400px', overflow: 'hidden' }} // Altura máxima y ocultar contenido excedente
              >
                <div>
                  <img src={service.imagen} alt={service.nombre} className="w-full h-48 object-cover mb-4 rounded" />
                  <h3 className="text-xl font-bold mb-2">{service.nombre}</h3>
                </div>
                <div>
                  <button
                    className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 mb-2 w-full"
                    onClick={() => handleOpenModal(index)}
                  >
                    Ver más
                  </button>
                  
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {servicioSeleccionado !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white w-full md:w-2/3 lg:w-1/2 rounded-lg p-6 relative">
              <button
                className="absolute top-2 right-2 text-black hover:text-red-600"
                onClick={handleCloseModal}
              >
                &times;
              </button>
              <div className="flex flex-col md:flex-row">
                <img 
                  src={servicios[servicioSeleccionado].imagen} 
                  alt={servicios[servicioSeleccionado].nombre} 
                  className="w-full md:w-1/2 h-auto rounded-lg mb-4 md:mb-0"
                />
                <div className="md:ml-6 flex-grow">
                  <h3 className="text-2xl font-bold mb-4">{servicios[servicioSeleccionado].nombre}</h3>
                  <p className="text-gray-700 mb-4">{servicios[servicioSeleccionado].descripcion}</p>
                  <button
                    onClick={() => handleWhatsAppClick(servicios[servicioSeleccionado].nombre)}
                    className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
                  >
                    Contactar por WhatsApp
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

export default Servicios;
