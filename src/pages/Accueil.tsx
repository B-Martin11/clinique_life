// src/pages/Accueil.tsx
import React from "react";

const Accueil: React.FC = () => {
  return (
    <div className="bg-[#D2DEEA] min-h-screen pt-[72px] px-4 md:px-8">
      <h1 className="text-4xl font-bold text-blue-800 mb-6">
        Bienvenue à Clinique-Life
      </h1>
      <p className="text-lg text-gray-700">
        Votre santé, notre priorité. Découvrez nos services et prenez rendez-vous facilement.
      </p>
    </div>
  );
};

export default Accueil;
