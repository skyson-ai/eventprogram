import Link from 'next/link';
import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const IntroSection = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-white via-gray-200 to-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6 animate-fadeIn">
          Pourquoi Participer à 1000 Femmes Propriétaires ?
        </h2>
        <p className="text-lg text-gray-800 mb-8 max-w-2xl mx-auto animate-fadeIn">
          Tu rêves de posséder un bien immobilier mais ne sais pas par où commencer ? Rejoins-nous le 13 octobre à Paris pour 1000 Femmes Propriétaires. Cet événement est conçu pour te fournir les outils et le soutien nécessaires pour transformer ton avenir financier.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8 animate-fadeIn">
          <div className="flex items-start bg-white p-4 rounded-lg shadow-md">
            <FaCheckCircle className="text-yellow-500 mr-4 mt-1 text-4xl" />
            <div>
              <strong className="text-lg font-semibold text-gray-800">Indépendance Financière</strong>
              <p className="text-gray-700">Découvre comment l&apos;immobilier peut t&apos;offrir une stabilité.</p>
            </div>
          </div>
          <div className="flex items-start bg-white p-4 rounded-lg shadow-md">
            <FaCheckCircle className="text-yellow-500 mr-4 mt-1 text-4xl" />
            <div>
              <strong className="text-lg font-semibold text-gray-800">Bâtir un Patrimoine Durable</strong>
              <p className="text-gray-700">Apprends les stratégies pour créer et maintenir un patrimoine solide.</p>
            </div>
          </div>
          <div className="flex items-start bg-white p-4 rounded-lg shadow-md">
            <FaCheckCircle className="text-yellow-500 mr-4 mt-1 text-2xl" />
            <div>
              <strong className="text-lg font-semibold text-gray-800">Évite les Erreurs Courantes</strong>
              <p className="text-gray-700">Apprends les meilleures pratiques.</p>
            </div>
          </div>
          <div className="flex items-start bg-white p-4 rounded-lg shadow-md">
            <FaCheckCircle className="text-yellow-500 mr-4 mt-1 text-4xl" />
            <div>
              <strong className="text-lg font-semibold text-gray-800">Soutien et Ressources</strong>
              <p className="text-gray-700">Accède à l&apos;expertise de leaders en immobilier et finance.</p>
            </div>
          </div>
        </div>
        <Link
          href="#register"
          className="inline-block bg-yellow-500 text-white font-semibold py-3 px-8 rounded-full text-lg hover:bg-yellow-600 transition duration-300 ease-in-out transform hover:scale-105 animate-fadeIn"
        >
          Réserve ta place dès maintenant
        </Link>
      </div>
    </section>
  );
};

export default IntroSection;