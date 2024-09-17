import React from 'react';
import Image from 'next/image';

const partenaires = [
  "/partner/baquepostale.jpg",
  "/partner/bnp.jpg",
  "/partner/bouro.jpg",
  "/partner/cabinet.jpg",
  "/partner/cic.jpg",
  "/partner/Credit-Agricole-Logo.png",
  "/partner/credit-foncier.png",
  "/partner/credit.png",
  "/partner/fortuneo.jpg",
  "/partner/helloBank.jpg",
  "/partner/images.png",
  "/partner/kauf.jpg",
  "/partner/lcl.jpg",
  "/partner/logo_kaydanG_B.png",
  "/partner/logo-addoha-vf.png",
  "/partner/Nsia-logo.png",
  "/partner/orias.jpg",
  "/partner/nhood_africa_logo.jpg",
  "/partner/qualio.png",
  "/partner/sg.jpg",
];

const PartenairesSection: React.FC = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="flex items-center justify-center mb-8">
        {/* Trait gauche */}
        <div className="w-1/4 h-[2px] bg-yellow-500"></div>
        
        {/* Titre */}
        <h2 className="text-3xl font-bold text-center text-black mx-4">
          Nos Partenaires
        </h2>
        
        {/* Trait droit */}
        <div className="w-1/4 h-[2px] bg-yellow-500"></div>
      </div>
      
      {/* Grid container for logos (2 lignes, 10 logos par ligne) */}
      <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-6 mx-auto max-w-7xl">
        {partenaires.map((logo, index) => (
          <div 
            key={index} 
            className="flex justify-center items-center p-4 bg-white shadow-md rounded-lg border border-gray-300 hover:scale-105 transition-transform duration-300"
          >
            <Image
              src={logo}
              alt={`Logo partenaire ${index + 1}`}
              width={150}
              height={75}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PartenairesSection;
