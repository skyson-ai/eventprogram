"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const temoignages = [
  {
    id: 1,
    name: "John Doe",
    position: "CEO, ABC Corp",
    text: "Je suis vraiment satisfait de la formation. Le contenu était clair, pertinent, et directement applicable dans mes projets immobiliers. Je recommande vivement !",

    image: "/Homme2.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Investisseur Immobilier",
    text: "Une approche personnalisée et une équipe qui connaît bien le marché. Grâce à leur expertise, je peux investir en toute sérénité.",
    image: "/Homme1.jpg",
  },
  {
    id: 3,
    name: "Julie marie",
    position: "Entrepreneur",
    text: "Des conseils avisés qui m&apos;ont permis de diversifier mon portefeuille immobilier. Une formation de grande qualité.",
    image: "/femme.jpg",
  },
];

const TemoignagesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % temoignages.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? temoignages.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-4xl font-bold text-yellow-500 text-center mb-12">
          Témoignages
        </h2>

        <div className="relative bg-white p-8 rounded-lg shadow-lg flex flex-col lg:flex-row items-center justify-between">
          {/* Image de la personne */}
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-start mb-8 lg:mb-0">
            <Image
              src={temoignages[currentIndex].image}
              alt={temoignages[currentIndex].name}
              width={300}
              height={300}
              className="rounded-full object-cover shadow-lg"
            />
          </div>

          {/* Témoignage texte */}
          <div className="w-full lg:w-2/3 lg:pl-8 text-center lg:text-left">
            <p className="text-lg text-gray-600 italic mb-6">
              &quot;{temoignages[currentIndex].text}&quot;
            </p>
            <h3 className="text-xl font-semibold text-gray-800">
              {temoignages[currentIndex].name}
            </h3>
            <p className="text-yellow-500">{temoignages[currentIndex].position}</p>
          </div>

          {/* Boutons de navigation */}
          <div className="absolute top-1/2 transform -translate-y-1/2 left-4">
            <button
              onClick={handlePrev}
              className="bg-yellow-500 text-white p-2 rounded-full focus:outline-none"
            >
              &lt;
            </button>
          </div>
          <div className="absolute top-1/2 transform -translate-y-1/2 right-4">
            <button
              onClick={handleNext}
              className="bg-yellow-500 text-white p-2 rounded-full focus:outline-none"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TemoignagesSection;
