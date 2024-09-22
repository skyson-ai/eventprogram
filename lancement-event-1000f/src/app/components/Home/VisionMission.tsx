import React from 'react';
import Image from 'next/image';
const VisionMission = () => {
  return (
    <section className="bg-gray-100 py-16 px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center bg-white p-8 rounded-lg shadow-lg">
        
        <div className="lg:w-2/3">
  
          <h2 className="text-4xl font-bold text-yellow-500 mb-6">Vision et Mission</h2>

          {/* Vision */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">VISION</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Marie Mireille Le Bouler aspire à transformer le secteur immobilier en fournissant des solutions accessibles et personnalisées qui répondent aux besoins uniques de la communauté afro-caribéenne. 
              Sa vision est de permettre à la diaspora afro-caribéenne de réaliser ses projets immobiliers avec succès et sérénité, en bénéficiant d'une expertise de premier plan et d'un accompagnement stratégique.
            </p>
          </div>

          {/* Mission */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">MISSION</h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              La mission de Marie Mireille Le Bouler est de bâtir une diaspora de rentiers en immobilier en offrant des conseils stratégiques et un accompagnement clé en main de A à Z pour l'acquisition et la gestion de biens immobiliers.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Elle vise à :
            </p>
            <ul className="list-disc pl-5 text-lg text-gray-600 space-y-2">
              <li>Éduquer et former les investisseurs à travers Uriel Business Academy, en fournissant des outils et des connaissances pour réussir dans le domaine de l’immobilier.</li>
              <li>Faciliter l'accès à l'immobilier pour les afro-caribéens en France et en Afrique en surmontant les obstacles souvent rencontrés.</li>
              <li>Optimiser le patrimoine immobilier de ses clients grâce à des stratégies d’investissement efficaces et personnalisées.</li>
            </ul>
          </div>
        </div>

        
        <div className="lg:w-1/3 lg:ml-8 mt-8 lg:mt-0">
          <Image
            src="/IMG5.jpg" // 
           width={400}
           height={600}
            alt="Marie Mireille Le Bouler"
            className="rounded-lg shadow-lg object-cover w-full h-[500px] max-h-[600px]" 
          />
        </div>
      </div>
    </section>
  );
};

export default VisionMission;

