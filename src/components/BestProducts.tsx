'use client';

import { useState } from 'react';
import { FaStar, FaShoppingCart, FaHeart } from 'react-icons/fa';

const products = [
  {
    id: 1,
    name: 'Orange + Betterave + Gingembre',
    description: 'Un mélange revitalisant et énergisant, parfait pour commencer la journée.',
    price: 4500,
    rating: 4.8,
    reviews: 128,
    image: 'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?q=80&w=1364&auto=format&fit=crop',
    category: 'Boissons Naturelles',
    bestseller: true
  },
  {
    id: 2,
    name: 'Ail + Citron + Clou de Girofle',
    description: 'Une infusion puissante pour renforcer l\'immunité et la vitalité.',
    price: 4000,
    rating: 4.9,
    reviews: 95,
    image: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?q=80&w=1364&auto=format&fit=crop',
    category: 'Thés Naturels',
    bestseller: true
  },
  {
    id: 3,
    name: 'Okok + Banane Cochon',
    description: 'Un plat traditionnel riche en fibres, préparé avec des ingrédients frais.',
    price: 8000,
    rating: 4.7,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=1364&auto=format&fit=crop',
    category: 'Plats de Résistance',
    bestseller: true
  },
  {
    id: 4,
    name: 'Salade Composée',
    description: 'Une salade fraîche et équilibrée avec laitue, choux, œuf, carotte, avocat et pain sésame.',
    price: 6000,
    rating: 4.9,
    reviews: 112,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1364&auto=format&fit=crop',
    category: 'Plats de Résistance',
    bestseller: true
  }
];

export default function BestProducts() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  return (
    <section className="py-16 bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Nos Meilleurs Produits
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez notre sélection de produits naturels les plus appréciés par nos clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="relative">
                <div className="aspect-w-4 aspect-h-3">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                </div>
                {hoveredProduct === product.id && (
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center space-x-4">
                    <button className="bg-white p-3 rounded-full text-green-600 hover:bg-green-50 transition-colors">
                      <FaShoppingCart size={20} />
                    </button>
                    <button className="bg-white p-3 rounded-full text-green-600 hover:bg-green-50 transition-colors">
                      <FaHeart size={20} />
                    </button>
                  </div>
                )}
                <div className="absolute top-4 left-4 bg-green-500 text-white text-sm px-3 py-1 rounded-full">
                  Bestseller
                </div>
              </div>

              <div className="p-6">
                <div className="text-sm text-green-600 font-medium mb-2">
                  {product.category}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {product.description}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="flex items-center text-yellow-400">
                      <FaStar size={16} />
                      <span className="ml-1 text-gray-600">
                        {product.rating}
                      </span>
                    </div>
                    <span className="text-gray-400 text-sm ml-2">
                      ({product.reviews} avis)
                    </span>
                  </div>
                  <span className="text-xl font-bold text-gray-800">
                    {product.price.toLocaleString()} FCFA
                  </span>
                </div>
                <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors">
                  Ajouter au panier
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
