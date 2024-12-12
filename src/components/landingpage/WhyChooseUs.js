import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaCertificate, FaSolarPanel, FaTools, FaLightbulb, FaUserCheck, FaShieldAlt } from 'react-icons/fa';
import FeatureCard from './FeatureCard';

function Arrow({ className, style, onClick, direction }) {
  return (
    <button
      className={`${className} text-white rounded-full p-3 shadow-lg hover:bg-green-700`}
      style={{
        ...style,
        display: 'block',
        backgroundColor: '#38a169', // Código del verde característico.
        fontSize: '18px',
      }}
      onClick={onClick}
      aria-label={direction === 'prev' ? 'Anterior' : 'Siguiente'}
    >
      {direction === 'prev' ? '<' : '>'}
    </button>
  );
}

export default function WhyChooseUs() {
  const featuresData = [
    {
      title: "Experiencia Comprobada",
      description: "Más de 15 años de trayectoria en el sector eléctrico y afines, respaldados por cientos de proyectos exitosos que garantizan calidad y profesionalismo.",
      icon: <FaTools className="text-green-600 text-5xl mx-auto mb-4" />,
    },
    {
      title: "Certificación Profesional",
      description: "Equipo certificado en media y baja tensión, con permisos de ESSA para trabajos especializados en redes eléctricas.",
      icon: <FaCertificate className="text-green-600 text-5xl mx-auto mb-4" />,
    },
    {
      title: "Soluciones Integrales",
      description: "Desde energía solar hasta refrigeración, ofrecemos una gama completa de servicios adaptados a sus necesidades.",
      icon: <FaSolarPanel className="text-green-600 text-5xl mx-auto mb-4" />,
    },
    {
      title: "Innovación Tecnológica",
      description: "Implementamos tecnología de vanguardia en vigilancia, biometría y alarmas, con opciones de monitoreo remoto.",
      icon: <FaLightbulb className="text-green-600 text-5xl mx-auto mb-4" />,
    },
    {
      title: "Compromiso con la Calidad",
      description: "Cumplimos con los estándares RETIE y RETILAP, asegurando funcionalidad y estética en cada proyecto.",
      icon: <FaShieldAlt className="text-green-600 text-5xl mx-auto mb-4" />,
    },
    {
      title: "Atención Personalizada",
      description: "Entendemos sus necesidades y diseñamos soluciones con el mejor balance entre costo y beneficio.",
      icon: <FaUserCheck className="text-green-600 text-5xl mx-auto mb-4" />,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <Arrow direction="next" />,
    prevArrow: <Arrow direction="prev" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-20 bg-green-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12 text-gray-800">¿Por qué elegir Solarix?</h2>
        <Slider {...settings}>
          {featuresData.map((feature, index) => (
            <div key={index} className="px-4">
              <FeatureCard
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
