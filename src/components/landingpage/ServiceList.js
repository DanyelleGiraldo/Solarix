import React from 'react'
import services from './services'

export default function ServiceList({ selectedService, setSelectedService }) {
  return (
    <section id="servicios" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Nuestros Servicios</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-8">
          {services.map((service) => (
            <button
              key={service.id}
              className="h-auto py-4 flex flex-col items-center justify-center text-center hover:bg-green-50 transition-colors duration-300 border border-gray-200 rounded-lg"
              onClick={() => setSelectedService(service)}
            >
              <span className="w-8 h-8 mb-2 text-green-600">{service.icon}</span>
              <span className="text-sm">{service.title}</span>
            </button>
          ))}
        </div>
        {selectedService && (
          <div className="mt-8 bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative">
              <button
                className="absolute top-2 right-2 z-10 p-2 bg-white rounded-full shadow-md"
                onClick={() => setSelectedService(null)}
              >
                <span className="sr-only">Cerrar</span>
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="grid md:grid-cols-2">
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-4 text-green-700">{selectedService.title}</h3>
                  <div className="h-[200px] md:h-[300px] mb-4 overflow-auto">
                    <p className="text-gray-600">{selectedService.description}</p>
                  </div>
                  <a
                    href={`/servicios/${selectedService.id}`}
                    className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors duration-200"
                  >
                    Ver más
                  </a>
                </div>
                <div className="relative h-[200px] md:h-auto">
                  <img
                    src={selectedService.image}
                    alt={selectedService.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}