import React from 'react'

export default function FeatureCard({ title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4 text-green-700">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
