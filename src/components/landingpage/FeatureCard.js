import React from 'react';

export default function FeatureCard({ title, description, icon }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      {icon && <div>{icon}</div>}
      <h3 className="text-xl font-semibold mb-4 text-gray-700">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
