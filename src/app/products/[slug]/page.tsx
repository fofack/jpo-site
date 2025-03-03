'use client';

import { useParams } from 'next/navigation';
import { useState } from 'react';
import { FaStar, FaLeaf, FaHeart, FaShare, FaMinus, FaPlus, FaShoppingCart } from 'react-icons/fa';
import { MdLocalShipping } from 'react-icons/md';

const generateSlug = (name: string) => name.toLowerCase().replace(/[^a-z0-9]+/g, '-');

const products = {
  [generateSlug('Orange + Betterave + Gingembre')]: {
    name: 'Orange + Betterave + Gingembre',
    category: 'Boissons Naturelles',
    price: 4500,
    description: 'Un mélange revitalisant et énergisant, parfait pour commencer la journée.',
    longDescription: `
      Cette boisson naturelle combine les bienfaits de trois ingrédients puissants :
      - L'orange : riche en vitamine C et antioxydants
      - La betterave : excellente source de nutriments et de minéraux
      - Le gingembre : propriétés anti-inflammatoires et digestives

      Idéale pour :
      • Boost d'énergie naturel
      • Renforcement du système immunitaire
      • Amélioration de la digestion
      • Détoxification de l'organisme
    `,
    image: 'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?q=80&w=1364&auto=format&fit=crop',
    rating: 4.8,
    reviews: 128,
    ingredients: ['Orange bio', 'Betterave fraîche', 'Gingembre bio'],
    benefits: [
      'Boost énergétique naturel',
      'Renforce le système immunitaire',
      'Améliore la digestion',
      'Propriétés anti-inflammatoires'
    ],
    nutritionFacts: {
      calories: '89 kcal',
      sugar: '14g',
      fiber: '3g',
      protein: '1.5g'
    },
    preparation: 'Servir frais. Peut être conservé jusqu\'à 48h au réfrigérateur.',
    additionalImages: [
      'https://images.unsplash.com/photo-1613478223719-2ab802602423?q=80&w=1364&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1589733955941-5eeaf752f6dd?q=80&w=1364&auto=format&fit=crop'
    ]
  },
  [generateSlug('Ananas + Pastèque + Pamplemousse')]: {
    name: 'Ananas + Pastèque + Pamplemousse',
    category: 'Boissons Naturelles',
    price: 4500,
    description: 'Une combinaison rafraîchissante et détoxifiante',
    longDescription: `
      Un mélange rafraîchissant qui combine :
      - L'ananas : riche en bromélaïne et antioxydants
      - La pastèque : hydratante et riche en lycopène
      - Le pamplemousse : source de vitamine C et de flavonoïdes

      Idéal pour :
      • Hydratation naturelle
      • Détoxification
      • Renforcement immunitaire
      • Bien-être digestif
    `,
    image: 'https://images.unsplash.com/photo-1497534446932-c925b458314e?q=80&w=1364&auto=format&fit=crop',
    rating: 4.7,
    reviews: 95,
    ingredients: ['Ananas frais', 'Pastèque', 'Pamplemousse bio'],
    benefits: [
      'Hydratation naturelle',
      'Propriétés détoxifiantes',
      'Renforce le système immunitaire',
      'Favorise la digestion'
    ],
    nutritionFacts: {
      calories: '75 kcal',
      sugar: '15g',
      fiber: '2g',
      protein: '1g'
    },
    preparation: 'Servir très frais. À consommer dans les 24h.',
    additionalImages: [
      'https://images.unsplash.com/photo-1528826542757-fce82c0f7683?q=80&w=1364&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1576743955747-0a1169c3a2cd?q=80&w=1364&auto=format&fit=crop'
    ]
  },
  [generateSlug('Persil + Pomme de France + Concombre')]: {
    name: 'Persil + Pomme de France + Concombre',
    category: 'Boissons Naturelles',
    price: 4500,
    description: 'Un cocktail vert riche en nutriments',
    longDescription: `
      Un jus vert détoxifiant composé de :
      - Persil : riche en chlorophylle et minéraux
      - Pomme : source de pectine et d'antioxydants
      - Concombre : hydratant et reminéralisant

      Parfait pour :
      • Détoxification
      • Hydratation cellulaire
      • Apport en minéraux
      • Purification de l'organisme
    `,
    image: 'https://images.unsplash.com/photo-1589733955941-5eeaf752f6dd?q=80&w=1364&auto=format&fit=crop',
    rating: 4.9,
    reviews: 112,
    ingredients: ['Persil frais', 'Pomme de France', 'Concombre bio'],
    benefits: [
      'Détoxification naturelle',
      'Hydratation profonde',
      'Apport en minéraux',
      'Action purifiante'
    ],
    nutritionFacts: {
      calories: '45 kcal',
      sugar: '8g',
      fiber: '2.5g',
      protein: '1g'
    },
    preparation: 'Servir frais. À consommer dans les 12h pour un maximum de bienfaits.',
    additionalImages: [
      'https://images.unsplash.com/photo-1638176066666-ffb2f013c7dd?q=80&w=1364&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1638176066989-68be7c6fd12d?q=80&w=1364&auto=format&fit=crop'
    ]
  },
  [generateSlug('Betterave + Pastèque + Carotte')]: {
    name: 'Betterave + Pastèque + Carotte',
    category: 'Boissons Naturelles',
    price: 4500,
    description: 'Un mélange antioxydant et fortifiant',
    longDescription: `
      Une combinaison puissante de :
      - Betterave : riche en nitrates et antioxydants
      - Pastèque : source de lycopène et citrulline
      - Carotte : riche en bêta-carotène

      Bénéfique pour :
      • Performance sportive
      • Santé cardiovasculaire
      • Vision
      • Énergie naturelle
    `,
    image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?q=80&w=1364&auto=format&fit=crop',
    rating: 4.7,
    reviews: 89,
    ingredients: ['Betterave fraîche', 'Pastèque', 'Carotte bio'],
    benefits: [
      'Améliore les performances',
      'Soutient la santé cardiaque',
      'Renforce la vision',
      'Boost d\'énergie naturel'
    ],
    nutritionFacts: {
      calories: '65 kcal',
      sugar: '12g',
      fiber: '2g',
      protein: '1.2g'
    },
    preparation: 'Servir frais. Conserver au réfrigérateur jusqu\'à 24h.',
    additionalImages: [
      'https://images.unsplash.com/photo-1638176066513-c48ac40c5892?q=80&w=1364&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1638176066762-41dd2f0d11c4?q=80&w=1364&auto=format&fit=crop'
    ]
  },
  [generateSlug('Ail + Citron + Clou de Girofle')]: {
    name: 'Ail + Citron + Clou de Girofle',
    category: 'Thés Naturels',
    price: 4000,
    description: 'Une infusion pour renforcer l\'immunité',
    longDescription: `
      Une infusion puissante combinant :
      - Ail : propriétés antimicrobiennes naturelles
      - Citron : riche en vitamine C
      - Clou de girofle : propriétés antiseptiques

      Idéal pour :
      • Renforcement immunitaire
      • Lutte contre les infections
      • Digestion
      • Détoxification
    `,
    image: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?q=80&w=1364&auto=format&fit=crop',
    rating: 4.8,
    reviews: 156,
    ingredients: ['Ail frais', 'Citron bio', 'Clous de girofle'],
    benefits: [
      'Renforce l\'immunité',
      'Combat les infections',
      'Aide à la digestion',
      'Action détoxifiante'
    ],
    nutritionFacts: {
      calories: '25 kcal',
      sugar: '2g',
      fiber: '0.5g',
      protein: '0.5g'
    },
    preparation: 'Infuser 5-10 minutes dans l\'eau chaude. Peut être consommé chaud ou froid.',
    additionalImages: [
      'https://images.unsplash.com/photo-1608677267510-47d1465bd9b4?q=80&w=1364&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1608677267437-e1feb1c0fcf5?q=80&w=1364&auto=format&fit=crop'
    ]
  },
  [generateSlug('Concombre + Feuille de Corossole + Clou de Girofle')]: {
    name: 'Concombre + Feuille de Corossole + Clou de Girofle',
    category: 'Thés Naturels',
    price: 4000,
    description: 'Un thé apaisant et détoxifiant',
    longDescription: `
      Une infusion apaisante qui combine :
      - Concombre : hydratant et reminéralisant
      - Feuille de Corossole : propriétés apaisantes
      - Clou de girofle : propriétés antiseptiques

      Bénéfices :
      • Détoxification naturelle
      • Apaisement du système nerveux
      • Hydratation profonde
      • Propriétés anti-inflammatoires
    `,
    image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?q=80&w=1364&auto=format&fit=crop',
    rating: 4.6,
    reviews: 78,
    ingredients: ['Concombre frais', 'Feuilles de Corossole', 'Clous de girofle'],
    benefits: [
      'Détoxification naturelle',
      'Action apaisante',
      'Hydratation optimale',
      'Effet anti-inflammatoire'
    ],
    nutritionFacts: {
      calories: '20 kcal',
      sugar: '3g',
      fiber: '1g',
      protein: '0.5g'
    },
    preparation: 'Infuser 7-10 minutes. Peut être consommé chaud ou glacé.',
    additionalImages: [
      'https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=1364&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1576092768247-a6e4555412cc?q=80&w=1364&auto=format&fit=crop'
    ]
  },
  [generateSlug('Cannelle + Menthe + Gingembre')]: {
    name: 'Cannelle + Menthe + Gingembre',
    category: 'Thés Naturels',
    price: 4000,
    description: 'Une infusion digestive et réchauffante',
    longDescription: `
      Un mélange harmonieux associant :
      - Cannelle : propriétés anti-inflammatoires
      - Menthe : action digestive et rafraîchissante
      - Gingembre : stimule la digestion

      Parfait pour :
      • Digestion
      • Circulation sanguine
      • Réchauffement du corps
      • Bien-être général
    `,
    image: 'https://images.unsplash.com/photo-1576867757603-05b134ebc379?q=80&w=1364&auto=format&fit=crop',
    rating: 4.9,
    reviews: 134,
    ingredients: ['Cannelle bio', 'Menthe fraîche', 'Gingembre frais'],
    benefits: [
      'Améliore la digestion',
      'Stimule la circulation',
      'Réchauffe le corps',
      'Action anti-inflammatoire'
    ],
    nutritionFacts: {
      calories: '15 kcal',
      sugar: '0g',
      fiber: '0.5g',
      protein: '0.2g'
    },
    preparation: 'Infuser 5-7 minutes dans l\'eau chaude. Idéal après les repas.',
    additionalImages: [
      'https://images.unsplash.com/photo-1576867757603-05b134ebc379?q=80&w=1364&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1576867757603-05b134ebc379?q=80&w=1364&auto=format&fit=crop'
    ]
  },
  [generateSlug('Citronnelle + Peau d\'Ananas + Miel')]: {
    name: 'Citronnelle + Peau d\'Ananas + Miel',
    category: 'Thés Naturels',
    price: 4000,
    description: 'Un thé relaxant aux propriétés anti-inflammatoires',
    longDescription: `
      Une infusion douce et parfumée avec :
      - Citronnelle : propriétés relaxantes
      - Peau d'ananas : riche en bromélaïne
      - Miel : propriétés antibactériennes

      Idéal pour :
      • Relaxation
      • Digestion
      • Immunité
      • Sommeil réparateur
    `,
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=1364&auto=format&fit=crop',
    rating: 4.7,
    reviews: 92,
    ingredients: ['Citronnelle fraîche', 'Peau d\'ananas bio', 'Miel naturel'],
    benefits: [
      'Favorise la relaxation',
      'Aide à la digestion',
      'Renforce l\'immunité',
      'Améliore le sommeil'
    ],
    nutritionFacts: {
      calories: '30 kcal',
      sugar: '7g',
      fiber: '0.5g',
      protein: '0.1g'
    },
    preparation: 'Infuser 8-10 minutes. Idéal en soirée avant le coucher.',
    additionalImages: [
      'https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=1364&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=1364&auto=format&fit=crop'
    ]
  },
  [generateSlug('Écorce NFOL + Whisky ou Eau')]: {
    name: 'Écorce NFOL + Whisky ou Eau',
    category: 'Thés Naturels',
    price: 4500,
    description: 'Une infusion traditionnelle revigorante',
    longDescription: `
      Une préparation traditionnelle avec :
      - Écorce NFOL : propriétés tonifiantes
      - Au choix : Whisky ou Eau

      Bienfaits :
      • Revitalisation
      • Énergie
      • Force
      • Vitalité
    `,
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=1364&auto=format&fit=crop',
    rating: 4.8,
    reviews: 145,
    ingredients: ['Écorce NFOL', 'Whisky (optionnel)', 'Eau'],
    benefits: [
      'Effet revitalisant',
      'Boost d\'énergie',
      'Renforce la vitalité',
      'Action tonifiante'
    ],
    nutritionFacts: {
      calories: '35 kcal',
      sugar: '0g',
      fiber: '0g',
      protein: '0g'
    },
    preparation: 'Infuser l\'écorce dans l\'eau chaude ou le whisky selon préférence.',
    additionalImages: [
      'https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=1364&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=1364&auto=format&fit=crop'
    ]
  },
  [generateSlug('Okok + Banane Cochon')]: {
    name: 'Okok + Banane Cochon',
    category: 'Plats de Résistance',
    price: 8000,
    description: 'Un plat traditionnel riche en fibres',
    longDescription: `
      Un plat traditionnel nutritif composé de :
      - Okok : légume riche en protéines et fibres
      - Banane cochon : féculent traditionnel

      Bienfaits :
      • Apport en protéines végétales
      • Riche en fibres
      • Énergie durable
      • Satiété prolongée
    `,
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=1364&auto=format&fit=crop',
    rating: 4.9,
    reviews: 167,
    ingredients: ['Okok frais', 'Banane cochon', 'Épices traditionnelles'],
    benefits: [
      'Source de protéines',
      'Riche en fibres',
      'Énergie durable',
      'Favorise la satiété'
    ],
    nutritionFacts: {
      calories: '450 kcal',
      sugar: '5g',
      fiber: '8g',
      protein: '15g'
    },
    preparation: 'Servi chaud. À consommer dans les 24h.',
    additionalImages: [
      'https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=1364&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=1364&auto=format&fit=crop'
    ]
  },
  [generateSlug('Zome + Melong + D\'anas')]: {
    name: 'Zome + Melong + D\'anas',
    category: 'Plats de Résistance',
    price: 8000,
    description: 'Une combinaison savoureuse et nutritive',
    longDescription: `
      Un plat équilibré associant :
      - Zome : légume traditionnel nutritif
      - Melong : légume riche en vitamines
      - D'anas : complément savoureux

      Avantages :
      • Équilibre nutritionnel
      • Vitamines et minéraux
      • Saveurs authentiques
      • Digestion facile
    `,
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1364&auto=format&fit=crop',
    rating: 4.7,
    reviews: 123,
    ingredients: ['Zome frais', 'Melong', 'D\'anas'],
    benefits: [
      'Apport nutritionnel complet',
      'Riche en vitamines',
      'Saveur authentique',
      'Digestion facilitée'
    ],
    nutritionFacts: {
      calories: '380 kcal',
      sugar: '4g',
      fiber: '6g',
      protein: '12g'
    },
    preparation: 'Servi chaud. Conservation 24h au réfrigérateur.',
    additionalImages: [
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1364&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1364&auto=format&fit=crop'
    ]
  },
  [generateSlug('Salade Composée')]: {
    name: 'Salade Composée',
    category: 'Plats de Résistance',
    price: 6000,
    description: 'Laitue, choux, œuf, carotte, avocat, pain sésame',
    longDescription: `
      Une salade fraîche et équilibrée avec :
      - Laitue et choux : légumes croquants
      - Œuf : protéines
      - Carotte : vitamines
      - Avocat : bonnes graisses
      - Pain sésame : glucides complexes

      Bénéfices :
      • Repas équilibré
      • Fraîcheur
      • Légèreté
      • Nutrition complète
    `,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1364&auto=format&fit=crop',
    rating: 4.8,
    reviews: 189,
    ingredients: ['Laitue', 'Choux', 'Œuf', 'Carotte', 'Avocat', 'Pain sésame'],
    benefits: [
      'Équilibre nutritionnel',
      'Fraîcheur garantie',
      'Légèreté',
      'Énergie immédiate'
    ],
    nutritionFacts: {
      calories: '320 kcal',
      sugar: '3g',
      fiber: '5g',
      protein: '10g'
    },
    preparation: 'Servir frais. À consommer dans les 4h.',
    additionalImages: [
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1364&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1364&auto=format&fit=crop'
    ]
  },
  [generateSlug('Raisin')]: {
    name: 'Raisin',
    category: 'Desserts',
    price: 3000,
    description: 'Riche en antioxydants',
    longDescription: `
      Des raisins frais sélectionnés :
      - Riche en antioxydants
      - Source de vitamines
      - Naturellement sucré

      Bienfaits :
      • Protection cellulaire
      • Énergie naturelle
      • Hydratation
      • Digestion facile
    `,
    image: 'https://images.unsplash.com/photo-1537640538966-79f369143f8f?q=80&w=1364&auto=format&fit=crop',
    rating: 4.6,
    reviews: 76,
    ingredients: ['Raisins frais'],
    benefits: [
      'Antioxydants naturels',
      'Énergie immédiate',
      'Hydratation',
      'Digestion facile'
    ],
    nutritionFacts: {
      calories: '69 kcal',
      sugar: '16g',
      fiber: '0.9g',
      protein: '0.7g'
    },
    preparation: 'Laver avant consommation. Conserver au frais.',
    additionalImages: [
      'https://images.unsplash.com/photo-1537640538966-79f369143f8f?q=80&w=1364&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1537640538966-79f369143f8f?q=80&w=1364&auto=format&fit=crop'
    ]
  },
  [generateSlug('Kiwi')]: {
    name: 'Kiwi',
    category: 'Desserts',
    price: 3000,
    description: 'Source de vitamine C',
    longDescription: `
      Kiwi frais et juteux :
      - Très riche en vitamine C
      - Source de fibres
      - Antioxydants naturels

      Avantages :
      • Renforce l\'immunité
      • Favorise la digestion
      • Protection cellulaire
      • Énergie naturelle
    `,
    image: 'https://images.unsplash.com/photo-1585059895524-72359e06133a?q=80&w=1364&auto=format&fit=crop',
    rating: 4.7,
    reviews: 82,
    ingredients: ['Kiwi frais'],
    benefits: [
      'Boost immunitaire',
      'Transit facilité',
      'Antioxydants',
      'Vitalité'
    ],
    nutritionFacts: {
      calories: '61 kcal',
      sugar: '9g',
      fiber: '3g',
      protein: '1.1g'
    },
    preparation: 'Peler avant consommation. Conserver au frais.',
    additionalImages: [
      'https://images.unsplash.com/photo-1585059895524-72359e06133a?q=80&w=1364&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1585059895524-72359e06133a?q=80&w=1364&auto=format&fit=crop'
    ]
  }
};

export default function ProductDetail() {
  const params = useParams();
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [isWished, setIsWished] = useState(false);

  const slug = params.slug as string;
  const product = products[slug];

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Produit non trouvé</h1>
          <p className="text-gray-600">Désolé, ce produit n'existe pas.</p>
        </div>
      </div>
    );
  }

  const allImages = [product.image, ...product.additionalImages];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation */}
        <div className="mb-8">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <a href="/" className="text-gray-600 hover:text-green-600">Accueil</a>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="mx-2 text-gray-400">/</span>
                  <a href="/products" className="text-gray-600 hover:text-green-600">Produits</a>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="mx-2 text-gray-400">/</span>
                  <span className="text-green-600">{product.name}</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Images Section */}
          <div className="space-y-4">
            <div className="relative aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden">
              <img
                src={allImages[activeImage]}
                alt={product.name}
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {allImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`relative rounded-lg overflow-hidden h-24 ${
                    activeImage === index ? 'ring-2 ring-green-500' : ''
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info Section */}
          <div>
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-green-600 font-medium">{product.category}</span>
                <div className="flex items-center">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'} />
                    ))}
                  </div>
                  <span className="ml-2 text-gray-600">({product.reviews} avis)</span>
                </div>
              </div>
              <p className="text-3xl font-bold text-green-600 mb-4">{product.price.toLocaleString()} FCFA</p>
              <p className="text-gray-600">{product.description}</p>
            </div>

            {/* Actions */}
            <div className="mb-8">
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center border rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-gray-100"
                  >
                    <FaMinus />
                  </button>
                  <span className="px-4 py-2 font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-gray-100"
                  >
                    <FaPlus />
                  </button>
                </div>
                <button className="flex-1 bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center space-x-2">
                  <FaShoppingCart />
                  <span>Ajouter au panier</span>
                </button>
                <button
                  onClick={() => setIsWished(!isWished)}
                  className={`p-3 rounded-lg border ${
                    isWished ? 'text-red-500 border-red-500' : 'text-gray-400 border-gray-300'
                  } hover:bg-gray-50`}
                >
                  <FaHeart />
                </button>
                <button className="p-3 rounded-lg border border-gray-300 text-gray-400 hover:bg-gray-50">
                  <FaShare />
                </button>
              </div>
              <div className="flex items-center text-gray-600 text-sm">
                <MdLocalShipping className="mr-2" />
                <span>Livraison gratuite à partir de 20 000 FCFA d'achat</span>
              </div>
            </div>

            {/* Product Details */}
            <div className="border-t pt-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Détails du produit</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">Ingrédients</h3>
                  <ul className="list-disc list-inside text-gray-600">
                    {product.ingredients.map((ingredient, index) => (
                      <li key={index}>{ingredient}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">Bienfaits</h3>
                  <ul className="list-disc list-inside text-gray-600">
                    {product.benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">Valeurs nutritionnelles</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(product.nutritionFacts).map(([key, value]) => (
                      <div key={key} className="flex items-center space-x-2">
                        <FaLeaf className="text-green-500" />
                        <span className="text-gray-600 capitalize">{key}: {value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">Préparation</h3>
                  <p className="text-gray-600">{product.preparation}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
