'use client';

import { useState } from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: 'Marie Dubois',
    role: 'Cliente depuis 2 ans',
    avatar: 'M',
    quote: 'Excellent service et produits de qualité. L\'approche personnalisée m\'a vraiment aidé à atteindre mes objectifs de santé. Je recommande vivement!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1470&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Jean Pierre',
    role: 'Client depuis 1 an',
    avatar: 'J',
    quote: 'Les produits naturels ont vraiment fait la différence pour ma santé. L\'équipe est professionnelle et à l\'écoute de nos besoins.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1586473219010-2ffc57b0d282?q=80&w=1364&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Sophie Martin',
    role: 'Cliente depuis 6 mois',
    avatar: 'S',
    quote: 'Une expérience exceptionnelle ! Le suivi personnalisé et les conseils adaptés ont transformé ma routine bien-être.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1470&auto=format&fit=crop'
  }
];

export default function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
          Témoignages
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Découvrez ce que nos clients disent de leur expérience avec Good Health Center
        </p>

        <div className="relative max-w-6xl mx-auto">
          {/* Background Pattern */}
          <div className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20">
            <div className="blur-[106px] h-56 bg-gradient-to-br from-green-100 to-green-200"></div>
            <div className="blur-[106px] h-32 bg-gradient-to-r from-green-200 to-green-300"></div>
          </div>

          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`transition-all duration-500 ${
                  index === activeTestimonial
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 absolute top-0 left-0 translate-x-full'
                }`}
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Image */}
                  <div className="relative h-[400px] rounded-2xl overflow-hidden">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="bg-white rounded-2xl p-8 shadow-xl relative">
                    <div className="absolute -top-4 -left-4 bg-green-600 rounded-full p-3">
                      <FaQuoteLeft className="text-white" size={24} />
                    </div>

                    <div className="mb-6 flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400" size={20} />
                      ))}
                    </div>

                    <p className="text-gray-600 text-lg mb-8 italic leading-relaxed">
                      "{testimonial.quote}"
                    </p>

                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-green-600 font-bold text-xl">
                          {testimonial.avatar}
                        </span>
                      </div>
                      <div className="ml-4">
                        <p className="font-bold text-gray-800">{testimonial.name}</p>
                        <p className="text-green-600 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Navigation Buttons */}
            <div className="flex justify-center mt-8 space-x-4">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-green-50 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6 text-green-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-green-50 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6 text-green-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center mt-4 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === activeTestimonial
                      ? 'bg-green-600 scale-125'
                      : 'bg-gray-300 hover:bg-green-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
