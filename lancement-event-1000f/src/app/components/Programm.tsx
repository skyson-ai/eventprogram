import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const EventProgram: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <ProgramDetails />
        <ExpertsSection />
      </div>
    </section>
  );
};

const SectionTitle: React.FC<{ title: string }> = ({ title }) => (
  <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-12 text-center border-b-4 border-yellow-500 pb-4 capitalize-first-letter">
    {title}
  </h1>
);

const ProgramDetails: React.FC = () => (
  <div className="mb-16">
    <SectionTitle title="Ce Que Tu Vas Apprendre" />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <ProgramItem title="Séance d'Ouverture" description="Introduction au programme et objectifs." />
      <ProgramItem title="Ateliers Pratiques" description="Gestion de budget, financement, et conseils pour acheter ta première propriété." />
      <ProgramItem title="Témoignages Inspirants" description="Histoires de femmes ayant construit un patrimoine solide." />
      <ProgramItem title="Sessions de Q&A" description="Obtiens des réponses personnalisées à tes questions." />
    </div>
  </div>
);

const ProgramItem: React.FC<{ title: string; description: string }> = ({ title, description }) => (
  <div className="border border-yellow-400 rounded-lg p-6 shadow-md hover:shadow-lg transition-transform transform hover:scale-105 bg-white hover:bg-yellow-50 duration-300">
    <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-700 leading-relaxed">{description}</p>
  </div>
);

const CTAButton: React.FC<{ text: string; link: string }> = ({ text, link }) => (
  <div className="flex justify-center mt-10">
    <Link href={link} legacyBehavior>
      <a
        className="inline-block bg-yellow-500 text-white font-semibold py-4 px-10 rounded-full shadow-md hover:bg-yellow-600 hover:shadow-lg transition-transform transform hover:scale-105 duration-300"
      >
        {text}
      </a>
    </Link>
  </div>
);

const ExpertsSection: React.FC = () => (
  <div className="mt-16">
    <SectionTitle title="Rencontre Nos Experts et Intervenants" />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-12 px-4 rounded-lg">
      <ExpertCard name="Mireille Le Bouler" description="Experte en investissement immobilier." imageUrl="/Mireille.jpg" />
      <ExpertCard name="Jean Dupont" description="Spécialiste en financement immobilier." imageUrl="/Mireille.jpg" />
      <ExpertCard name="Sophie Martin" description="Coach en développement personnel." imageUrl="/Mireille.jpg" />
    </div>
    <CTAButton text="Je réserve ma place" link="https://docs.google.com/forms/d/e/1FAIpQLSeMDll6g7iwVDMkRSbook0WsWAV6nBrRuusDWnllEftu0SN9Q/viewform?usp=sf_link"  />
  </div>
);

const ExpertCard: React.FC<{ name: string; description: string; imageUrl: string }> = ({ name, description, imageUrl }) => (
  <div className="flex flex-col items-center bg-white border border-yellow-400 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 duration-300 relative overflow-hidden">
    <div className="w-48 h-48 mb-6 relative">
      <Image
        src={imageUrl}
        alt={name}
        layout="fill"
        objectFit="cover"
        className="rounded-full border-4 border-white"
      />
    </div>
    <h3 className="text-xl font-semibold text-gray-900 text-center">{name}</h3>
    <p className="text-gray-700 text-center">{description}</p>
    <div className="absolute inset-0 bg-gradient-to-b from-yellow-400 to-transparent opacity-10"></div>
  </div>
);

export default EventProgram;
