'use client';

import { useEffect, useState } from 'react';

export default function Toast() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Fonction pour afficher le toast
    const showToast = () => {
      setIsVisible(true);
      // Cacher le toast après 8 secondes
      setTimeout(() => {
        setIsVisible(false);
      }, 8000);
    };

    // Afficher le toast immédiatement au chargement
    showToast();

    // Configurer l'intervalle pour afficher le toast toutes les 30 secondes
    const interval = setInterval(showToast, 30000);

    // Nettoyer l'intervalle lors du démontage du composant
    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`
        fixed bottom-4 right-4 z-50
        bg-blue-600 text-white
        px-6 py-4 rounded-lg shadow-lg
        transform transition-transform duration-500 ease-in-out
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}
      `}
    >
      <p className="text-sm md:text-base font-medium">
        Bienvenue au JPO au Lycée technique de penka-michel edition 2025. Departement de STT
      </p>
    </div>
  );
}
