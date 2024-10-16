'use client'

import React, { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-t from-green-600 to-green-0 p-4">
      <div className="w-full max-w-4xl bg-black bg-opacity-80 text-white p-8 rounded-lg shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">Contact</h2>
            <p className="mb-4">Most of our client relationships are measured in years, not months. Learn more about how we can improve your ecommerce generated from, and within, social media.</p>
            <div className="mb-4">
              <p>hello@example.com</p>
              <p>123 Main Street</p>
              <p>Second Floor</p>
              <p>Charleston, SC 29403</p>
            </div>
            <div className="flex space-x-4">
              {/* Social icons */}
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="NAME"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-white focus:border-green-300 outline-none px-0 py-2 text-white placeholder-gray-400"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="EMAIL"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-white focus:border-green-300 outline-none px-0 py-2 text-white placeholder-gray-400"
              required
            />
            <textarea
              name="message"
              placeholder="MESSAGE"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-white focus:border-green-300 outline-none px-0 py-2 h-32 resize-none text-white placeholder-gray-400"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-white text-black hover:bg-green-300 transition-colors py-2 px-4 text-lg font-semibold"
            >
              SEND
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
