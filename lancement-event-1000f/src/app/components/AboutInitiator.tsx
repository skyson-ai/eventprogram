"use client";

import React from 'react';
import Image from 'next/image';

const AProposSection: React.FC = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-full lg:max-w-6xl mx-auto px-4 md:px-8 mb-12 text-center">
        <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-6">
          Notre Vision pour <strong className='text-yellow-500 font-extrabold'>'1000 Femmes Propriétaires'</strong>
        </h2>
        <p className="text-base md:text-lg text-gray-600 leading-relaxed">
          Nous croyons qu'un accès accru à la propriété immobilière est un levier puissant pour l'indépendance financière et l'égalité des genres. Inspirées par l'histoire de Mireille Le Bouler, nous visons à créer une communauté de 1000 femmes propriétaires, capables de mentorat et d'inspiration pour d'autres femmes.
        </p>
      </div>

      <div className="max-w-full lg:max-w-6xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center">
        
        <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
          <h3 className="text-xl md:text-2xl  font-bold mb-4 text-center md:text-left uppercase text-yellow-500">
            Qui est l'initiatrice ?
          </h3>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6 text-justify">
            L'initiatrice de l'événement, Mireille Le Bouler, est une experte en investissement immobilier avec plus de 25 ans d'expérience. Dès l'âge de 22 ans, elle a réalisé son premier investissement à Vitry-sur-Seine. Passionnée par l’immobilier, elle a travaillé avec de grandes agences telles qu'Engels & Völkers Paris et Feel Like Home, développant une expertise en immobilier de luxe et en négociation commerciale. En 2018, elle a fondé Uriel Group, une entreprise qui accompagne les femmes et les membres de la diaspora afro-caribéenne dans leurs projets d'investissement immobilier en France et en Afrique.
            <br /><br />
            À travers son parcours inspirant et sa vision innovante, Mireille a aidé des centaines de femmes à concrétiser leur rêve de devenir propriétaires, en les soutenant dans toutes les étapes de leur investissement. Grâce à cette initiative, '1000 Femmes Propriétaires', elle aspire à créer une communauté forte et solidaire de femmes indépendantes, autonomes et financièrement libres.
          </p>
          <div className="flex justify-center md:justify-start">
            <a
              href="#"
              className="inline-block bg-yellow-500 text-white font-semibold py-3 px-6 md:px-8 rounded-md shadow-lg hover:bg-yellow-600 transition duration-300"
            >
              Découvrez Comment
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/IMG3.jpg"
            alt="Mireille Le Bouler"
            width={400}
            height={600}
            className="h-auto max-w-full object-cover rounded-lg shadow-lg" 
          />
        </div>
      </div>
    </section>
  );
};

export default AProposSection;
