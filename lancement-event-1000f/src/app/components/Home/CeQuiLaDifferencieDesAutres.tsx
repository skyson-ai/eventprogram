import React from 'react';
import Image from 'next/image';

const CeQuiLaDifferencieDesAutres = () => {
  return (
    <section className="bg-gradient-to-r from-yellow-200 to-gray-300 py-16 px-8">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center md:space-x-12">
        
        {/* Texte à gauche */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold text-yellow-500 mb-4 text-center md:text-left">Ce qui la différencie des autres</h2>
          <div className="bg-yellow-50 p-4 rounded-lg shadow-sm mb-4">
            <p className="text-lg text-gray-700 leading-relaxed">
              Meilleure dans son domaine, Mireille Le Bouler offre une expertise unique en immobilier, 
              alliant passion et professionnalisme pour accompagner ses clients dans leurs projets d&apos;investissement.
            </p>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg shadow-sm">
            <p className="text-lg text-gray-700 leading-relaxed">
              Grâce à son approche personnalisée, elle garantit un suivi attentif et des conseils adaptés à chaque situation.
            </p>
          </div>
        </div>

        {/* Image à droite */}
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <Image 
            src="/ceoPhoto.webp" 
            width={500}
            height={500}
            alt="Mireille Le Bouler" 
            className="rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105" // Effet d'agrandissement au survol
          />
        </div>
      </div>
    </section>
  );
}

export default CeQuiLaDifferencieDesAutres;
