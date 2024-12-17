import React from 'react'
import logosolarix from './images/LogoSolarixPNG.png'

export default function Hero() {
  return (
    <section className="py-20 bg-gradient-to-br from-green-900 to-white-100 text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Tu aliado en energía y seguridad
            </h2>
            <p className="text-xl mb-8 text-green-100">
              Soluciones integrales en energía solar, redes eléctricas, seguridad y comunicaciones.
            </p>
            <a
              href="#servicios"
              className="bg-white text-green-700 px-6 py-3 rounded-full font-semibold hover:bg-green-100 transition-colors duration-200 inline-flex items-center"
            >
              Conoce nuestros servicios
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
          <div className="md:w-1/2">
            <img
              src={logosolarix}
              alt="Servicios Solarix"
              className="rounded-lg "
              width={600}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
