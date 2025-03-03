import React from 'react';

const Indications = () => {
  const recommendations = [
    {
      time: "Petit déjeuner",
      description: "Commencez la journée avec un jus naturel selon le besoin et le conseil donné par l'entité",
      icon: "🌅"
    },
    {
      time: "Déjeuner",
      description: "Un plat léger de résistance recommandé",
      icon: "🍽️"
    },
    {
      time: "Dîner",
      description: "Une infusion au thé naturel pour faciliter la digestion",
      icon: "🌙"
    }
  ];

  return (
    <div className="min-h-screen bg-green-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-green-800 mb-4">
            Guide Nutritionnel Quotidien
          </h1>
          <p className="text-lg text-gray-600">
            Pour optimiser votre bien-être, suivez nos recommandations quotidiennes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recommendations.map((rec, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4 text-center">
                {rec.icon}
              </div>
              <h2 className="text-xl font-bold text-green-700 mb-3 text-center">
                {rec.time}
              </h2>
              <p className="text-gray-600 text-center">
                {rec.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-800 mb-6">
            Conseils Supplémentaires
          </h2>
          <ul className="space-y-4 text-gray-600">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              Écoutez votre corps et adaptez les portions selon vos besoins
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              Buvez suffisamment d'eau tout au long de la journée
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              Privilégiez des repas à heures régulières
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              Consultez nos experts pour un programme personnalisé
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Indications;
