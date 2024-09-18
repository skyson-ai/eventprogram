import Image from 'next/image'; 
import Link from 'next/link';
import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const BenefitsSection = () => {
  return (
    <section className="py-12 bg-yellow-100 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6 capitalize-first-letter">
          Les Bénéfices d&apos;un Bien Immobilier pour Ton Futur
        </h2>
        <div className="mb-8">
          <Image
            src="/real-estate.jpg"
            alt="Infographie des avantages de la propriété immobilière"
            width={300}
            height={300}
            layout="responsive"
            className="mx-auto w-full md:w-2/3 lg:w-1/3"
          />
        </div>
        <ul className="text-left list-disc list-inside text-gray-700 max-w-2xl mx-auto space-y-4 text-lg md:text-xl">
          <li className="flex items-start">
            <FaCheckCircle className="text-yellow-500 mr-2 mt-1" />
            <div>
              <strong>Sécurité Financière :</strong> Une maison est un actif stable et durable.
            </div>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-yellow-500 mr-2 mt-1" />
            <div>
              <strong>Croissance du Patrimoine :</strong> L&apos;immobilier valorise avec le temps.
            </div>
          </li>
          <li className="flex items-start">
            <FaCheckCircle className="text-yellow-500 mr-2 mt-1" />
            <div>
              <strong>Revenus Passifs :</strong> La location peut générer des revenus stables.
            </div>
          </li>
        </ul>
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSeMDll6g7iwVDMkRSbook0WsWAV6nBrRuusDWnllEftu0SN9Q/viewform?usp=sf_link"
          className="inline-block bg-yellow-500 text-white font-semibold py-3 px-8 rounded-full text-lg hover:bg-yellow-600 transition duration-300 ease-in-out transform hover:scale-105 mt-8"
        >
          Participe et booste ton avenir
        </Link>
      </div>
    </section>
  );
};

export default BenefitsSection;
