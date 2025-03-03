import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Service à la personne et emploi à domicile",
      description: "Nous proposons un accompagnement personnalisé à domicile pour vous aider à maintenir une alimentation saine et équilibrée.",
      features: [
        "Préparation de repas équilibrés",
        "Conseils nutritionnels personnalisés",
        "Suivi régulier de vos objectifs",
        "Adaptation des menus selon vos besoins"
      ]
    },
    {
      title: "Diagnostique et conseils",
      description: "Notre équipe d'experts analyse vos besoins et vous propose des solutions adaptées à votre mode de vie.",
      features: [
        "Évaluation de vos habitudes alimentaires",
        "Analyse de vos besoins nutritionnels",
        "Recommandations personnalisées",
        "Plan alimentaire sur mesure"
      ]
    },
    {
      title: "Caractéristiques des produits",
      description: "Nous sélectionnons soigneusement nos produits pour vous garantir une qualité optimale.",
      features: [
        "Produits 100% naturels",
        "Ingrédients frais et de saison",
        "Préparations artisanales",
        "Respect des normes d'hygiène"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-green-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-green-800 mb-4">
            Nos Services
          </h1>
          <p className="text-lg text-gray-600">
            Des solutions personnalisées pour votre bien-être
          </p>
        </div>

        <div className="space-y-12">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-green-700 mb-4">
                  {service.title}
                </h2>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-green-800 mb-4">
            Prêt à commencer votre voyage vers une meilleure santé ?
          </h3>
          <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors">
            Contactez-nous
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
