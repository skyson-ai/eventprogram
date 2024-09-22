import React from 'react';
import Image from 'next/image';

const ParcoursProfessionnel = () => {
  return (
    <section className="bg-gray-100 py-16 px-8">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-lg flex flex-col lg:flex-row lg:items-start">
        {/* Image de profil */}
        <div className="lg:w-1/3 flex justify-center lg:justify-start mb-8 lg:mb-0">
          <Image
            src="/proprio.jpg"
            width={300}
            height={900}
            alt="Photo de Marie Mireille Le Bouler"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
            style={{ maxHeight: '100%' }}
          />
        </div>

        {/* Contenu Texte */}
        <div className="lg:w-2/3 lg:pl-8 flex-grow">
          {/* Titre de la section */}
          <h2 className="text-3xl font-bold text-yellow-500 mb-8 text-center lg:text-left">
            Parcours Professionnel
          </h2>

          {/* Diplômes */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Diplômes</h3>
            <ul className="space-y-4">
              <li className="text-lg text-gray-600">
                <span className="font-bold">1996 :</span> Baccalauréat STT, Spécialité : Action Commerciales
              </li>
              <li className="text-lg text-gray-600">
                <span className="font-bold">2013-2014 :</span> Licence Professionnelle en Management
              </li>
            </ul>
          </div>

          {/* Expériences professionnelles */}
          <div className="space-y-8">
            {/* Présidente Fondatrice URIEL GROUP */}
            <div>
              <h3 className="text-xl font-semibold text-yellow-500 mb-2">
                Présidente Fondatrice, URIEL GROUP <span className="text-gray-600">(Janvier 2018 - Présent)</span>
              </h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Spécialisation dans le conseil et l&apos;accompagnement personnalisé en immobilier.</li>
                <li>Développement de programmes de formation à travers Uriel Business Academy.</li>
              </ul>
            </div>

            {/* Conseiller en immobilier */}
            <div>
              <h3 className="text-xl font-semibold text-yellow-500 mb-2">
                Conseiller en Immobilier, Résidence de Luxe Like Feel Home <span className="text-gray-600">(Mars 2011 - Janvier 2012)</span>
              </h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Gestion de la relation client et négociation commerciale.</li>
              </ul>
            </div>

            {/* Chef d'entreprise */}
            <div>
              <h3 className="text-xl font-semibold text-yellow-500 mb-2">
                Chef d&apos;Entreprise, Sun &amp; Beauty Institut <span className="text-gray-600">(Juillet 2007 - Février 2009)</span>
              </h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Développement commercial et gestion des opérations.</li>
              </ul>
            </div>

            {/* Personnel Navigant Commercial */}
            <div>
              <h3 className="text-xl font-semibold text-yellow-500 mb-2">
              Personnel Navigant Commercial (PNC), CorsairFly <span className="text-gray-600">(Juin 1998 - Aujourd&apos;hui)</span>
              </h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Vente à bord, gestion de la trésorerie et fidélisation de la clientèle.</li>
              </ul>
            </div>
          </div>

          {/* Conclusion */}
          <div className="mt-8 bg-yellow-50 p-6 rounded-lg shadow-sm">
            <p className="text-lg text-gray-700 leading-relaxed">
              Honneur et transparence dans toutes les actions. Répondre aux besoins spécifiques des clients avec expertise et altruisme. Viser l&apos;excellence dans le service et la gestion des investissements. Proposer des solutions novatrices pour surmonter les défis du marché.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParcoursProfessionnel;
