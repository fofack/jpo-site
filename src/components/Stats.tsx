'use client';

import React from 'react';

const stats = [
  { number: '1000+', label: 'Clients Satisfaits' },
  { number: '100%', label: 'Produits Naturels' },
  { number: '10+', label: 'Années d\'Expérience' }
];

export default function Stats() {
  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-3xl font-bold text-green-600 mb-2">
                {stat.number}
              </h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
