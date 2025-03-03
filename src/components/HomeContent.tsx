"use client";

import React from 'react';
import Slider from './Slider';

export default function HomeContent() {
  return (
    <div>
      {/* Hero Section avec Slider */}
      <section className="relative">
        <Slider />
      </section>

      {/* Section Statistiques */}
      <section className="section bg-green-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-white rounded-lg shadow-lg animate-fade-in">
              <h3 className="text-2xl font-bold text-green-600 mb-2">1000+</h3>
              <p className="text-gray-600">Clients Satisfaits</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg animate-fade-in">
              <h3 className="text-2xl font-bold text-green-600 mb-2">100%</h3>
              <p className="text-gray-600">Produits Naturels</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg animate-fade-in">
              <h3 className="text-2xl font-bold text-green-600 mb-2">10+</h3>
              <p className="text-gray-600">Années d'Expérience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Services */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Nos Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-lg animate-fade-in-up">
              <h3 className="text-xl font-bold text-green-600 mb-4">Consultation</h3>
              <p className="text-gray-600">Consultations personnalisées pour évaluer vos besoins en santé</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg animate-fade-in-up">
              <h3 className="text-xl font-bold text-green-600 mb-4">Produits Naturels</h3>
              <p className="text-gray-600">Large gamme de produits naturels pour votre bien-être</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg animate-fade-in-up">
              <h3 className="text-xl font-bold text-green-600 mb-4">Suivi</h3>
              <p className="text-gray-600">Suivi personnalisé de votre progression</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Témoignages */}
      <section className="section bg-green-50">
        <div className="container">
          <h2 className="section-title">Témoignages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-lg animate-fade-in">
              <p className="text-gray-600 mb-4">"Excellent service et produits de qualité. Je recommande vivement!"</p>
              <p className="font-bold text-green-600">- Marie D.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg animate-fade-in">
              <p className="text-gray-600 mb-4">"Les produits naturels ont vraiment fait la différence pour ma santé."</p>
              <p className="font-bold text-green-600">- Jean P.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="section bg-green-600 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Prêt à améliorer votre santé ?</h2>
          <p className="mb-8">Contactez-nous dès aujourd'hui pour une consultation gratuite</p>
          <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
            Prendre Rendez-vous
          </button>
        </div>
      </section>
    </div>
  );
}
