import React from 'react'
import FeatureCard from './FeatureCard'

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-green-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12 text-gray-800">¿Por qué elegir Solarix?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            title="Experiencia Comprobada"
            description="Más de 15 años en el sector eléctrico y tecnológico."
          />
          <FeatureCard
            title="Personal Certificado"
            description="Equipo especializado con certificaciones en media y baja tensión."
          />
          <FeatureCard
            title="Soluciones Integrales"
            description="Desde energía solar hasta seguridad, cubrimos todas sus necesidades."
          />
        </div>
      </div>
    </section>
  )
}
