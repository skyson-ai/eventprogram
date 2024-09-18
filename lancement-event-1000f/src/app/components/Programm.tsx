import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const EventProgram: React.FC = () => {
  return (
    <section className="py-12 bg-gray-200">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <ProgramDetails />
      </div>
    </section>
  );
};

const SectionTitle: React.FC<{ title: string }> = ({ title }) => (
  <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-12 text-center border-b-4 border-yellow-500 pb-4 capitalize-first-letter ">
    {title}
  </h1>
);

const ProgramDetails: React.FC = () => (
  <div>
    <SectionTitle title="Ce Que Tu Vas Apprendre" />
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      <div className="space-y-8">
        <ProgramItem
          title="Séance d'Ouverture"
          description="Introduction au programme et objectifs."
        />
        <ProgramItem
          title="Ateliers Pratiques"
          description="Gestion de budget, financement, et conseils pour acheter ta première propriété."
        />
        <ProgramItem
          title="Témoignages Inspirants"
          description="Histoires de femmes ayant construit un patrimoine solide."
        />
        <ProgramItem
          title="Sessions de Q&A"
          description="Obtiens des réponses personnalisées à tes questions."
        />
      </div>
      <div className="flex justify-center lg:justify-end items-center">
        <Image
          src="/Lebouler.jpg"
          alt="Experte"
          width={400}
          height={400}
          className="rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
        />
      </div>
    </div>
  </div>
);

const ProgramItem: React.FC<{ title: string; description: string }> = ({ title, description }) => (
  <div className="hover:bg-gray-200 p-4 rounded-lg transition-all duration-300 ease-in-out shadow-sm hover:shadow-md">
    <h3 className="text-xl font-semibold  mb-2 transition-all duration-300 ease-in-out text-yellow-600">
      {title}
    </h3>
    <p className="text-gray-700 leading-relaxed">
      {description}
    </p>
  </div>
);

export default EventProgram;
