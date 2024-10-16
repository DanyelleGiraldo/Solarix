import React, { useState } from 'react'
import Header from '../Components/Header'
import Hero from './Hero'
import ServiceList from './ServiceList'
import WhyChooseUs from './WhyChooseUs'
import ContactSection from '../Components/Contacto'

export default function LandingPage() {
  const [selectedService, setSelectedService] = useState(null)

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-16">
        <Hero />
        <ServiceList selectedService={selectedService} setSelectedService={setSelectedService} />
        <WhyChooseUs />
        <ContactSection />
      </main>
    </div>
  )
}
