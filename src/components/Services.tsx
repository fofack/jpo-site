'use client';

import React from 'react';

const services = [
  {
    title: 'Consultation',
    description: 'Consultations personnalisées pour évaluer vos besoins en santé'
  },
  {
    title: 'Produits Naturels',
    description: 'Large gamme de produits naturels pour votre bien-être'
  },
  {
    title: 'Suivi',
    description: 'Suivi personnalisé de votre progression'
  }
];

export default function Services() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Nos Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold text-green-600 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
