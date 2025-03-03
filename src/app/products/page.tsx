'use client';

import React from 'react';
import { FaLeaf } from 'react-icons/fa';

const Products = () => {
  const products = {
    boissons: [
      {
        name: "Orange + Betterave + Gingembre",
        description: "Un mélange revitalisant et énergisant",
        image: "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?q=80&w=1364&auto=format&fit=crop",
        price: 4500
      },
      {
        name: "Ananas + Pastèque + Pamplemousse",
        description: "Une combinaison rafraîchissante et détoxifiante",
        image: "https://images.unsplash.com/photo-1497534446932-c925b458314e?q=80&w=1364&auto=format&fit=crop",
        price: 4500
      },
      {
        name: "Persil + Pomme de France + Concombre",
        description: "Un cocktail vert riche en nutriments",
        image: "https://images.unsplash.com/photo-1589733955941-5eeaf752f6dd?q=80&w=1364&auto=format&fit=crop",
        price: 4500
      },
      {
        name: "Betterave + Pastèque + Carotte",
        description: "Un mélange antioxydant et fortifiant",
        image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?q=80&w=1364&auto=format&fit=crop",
        price: 4500
      }
    ],
    thes: [
      {
        name: "Ail + Citron + Clou de Girofle",
        description: "Une infusion pour renforcer l'immunité",
        image: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?q=80&w=1364&auto=format&fit=crop",
        price: 4000
      },
      {
        name: "Concombre + Feuille de Corossole + Clou de Girofle",
        description: "Un thé apaisant et détoxifiant",
        image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?q=80&w=1364&auto=format&fit=crop",
        price: 4000
      },
      {
        name: "Cannelle + Menthe + Gingembre",
        description: "Une infusion digestive et réchauffante",
        image: "https://images.unsplash.com/photo-1576867757603-05b134ebc379?q=80&w=1364&auto=format&fit=crop",
        price: 4000
      },
      {
        name: "Citronnelle + Peau d'Ananas + Miel",
        description: "Un thé relaxant aux propriétés anti-inflammatoires",
        image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=1364&auto=format&fit=crop",
        price: 4000
      },
      {
        name: "Écorce NFOL + Whisky ou Eau",
        description: "Une infusion traditionnelle revigorante",
        image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=1364&auto=format&fit=crop",
        price: 4500
      }
    ],
    plats: [
      {
        name: "Okok + Banane Cochon",
        description: "Un plat traditionnel riche en fibres",
        image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=1364&auto=format&fit=crop",
        price: 8000
      },
      {
        name: "Zome + Melong + D'anas",
        description: "Une combinaison savoureuse et nutritive",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1364&auto=format&fit=crop",
        price: 8000
      },
      {
        name: "Salade Composée",
        description: "Laitue, choux, œuf, carotte, avocat, pain sésame",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1364&auto=format&fit=crop",
        price: 6000
      }
    ],
    desserts: [
      {
        name: "Raisin",
        description: "Riche en antioxydants",
        image: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?q=80&w=1364&auto=format&fit=crop",
        price: 3000
      },
      {
        name: "Kiwi",
        description: "Source de vitamine C",
        image: "https://images.unsplash.com/photo-1585059895524-72359e06133a?q=80&w=1364&auto=format&fit=crop",
        price: 3000
      }
    ]
  };

  const ProductSection = ({ title, items }) => (
    <div className="mb-16">
      <div className="flex items-center justify-center mb-8">
        <FaLeaf className="text-green-600 mr-3" size={24} />
        <h2 className="text-3xl font-bold text-green-800">{title}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
            <div className="relative h-48 overflow-hidden">
              <img 
                src={item.image} 
                alt={item.name}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-opacity duration-300"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-green-700 mb-2 group-hover:text-green-600 transition-colors">
                {item.name}
              </h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <div className="space-y-4">
                <div className="flex justify-center">
                  <span className="text-2xl font-bold text-green-600">{item.price.toLocaleString()} FCFA</span>
                </div>
                <div className="flex justify-between space-x-2">
                  <a 
                    href={`/products/${item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                    className="flex-1 bg-white border-2 border-green-600 text-green-600 px-3 py-2 rounded-lg hover:bg-green-50 transition-colors text-center"
                  >
                    Détails
                  </a>
                  <button className="flex-1 bg-green-600 text-white px-3 py-2 rounded-lg hover:bg-green-700 transition-colors text-center">
                    Commander
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
            Nos Produits Naturels
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez notre sélection de produits naturels et sains, préparés avec soin pour votre bien-être
          </p>
        </div>

        <ProductSection title="Boissons Naturelles" items={products.boissons} />
        <ProductSection title="Thés Naturels" items={products.thes} />
        <ProductSection title="Plats de Résistance" items={products.plats} />
        <ProductSection title="Desserts" items={products.desserts} />
      </div>
    </div>
  );
};

export default Products;
