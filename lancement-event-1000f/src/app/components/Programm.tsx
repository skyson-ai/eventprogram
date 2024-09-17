import React from 'react';
import Image from 'next/image';

const EventProgram: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 md:px-8">

        
        <h1 className="text-4xl font-bold text-black mb-8 text-center border-b-4 border-yellow-500 pb-2">
          Programme de l'évènement
        </h1>

        
        <ProgramDetails />

        
        <ExpertsSection />

      </div>
    </section>
  );
};
const ProgramDetails: React.FC = () => {
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold text-black mb-6 text-center">
        Ce Que Tu Vas Apprendre 
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <ProgramItem title="Séance d’Ouverture" description="Introduction au programme et objectifs." />
        <ProgramItem title="Ateliers Pratiques" description="Gestion de budget, financement, et conseils pour acheter ta première propriété." />
        <ProgramItem title="Témoignages Inspirants" description="Histoires de femmes ayant construit un patrimoine solide." />
        <QASession />
      </div>
      <CTAButton />
    </div>
  );
};


const ProgramItem: React.FC<{ title: string; description: string }> = ({ title, description }) => {
  return (
    <div className="border border-yellow-300 rounded-lg p-4 shadow-lg transition-transform transform hover:scale-105 hover:bg-yellow-50 duration-300">
      <h3 className="text-xl font-semibold text-black mb-2">{title}</h3>
      <p className="text-gray-700 leading-relaxed">{description}</p>
    </div>
  );
};


const QASession: React.FC = () => {
  return (
    <ProgramItem title="Sessions de Q&A" description="Obtiens des réponses personnalisées à tes questions." />
  );
};


const CTAButton: React.FC = () => {
  return (
    <div className="flex justify-center mt-6">
      <a
        href="#"
        className="inline-block bg-yellow-500 text-white font-semibold py-3 px-8 rounded-md shadow-lg hover:bg-yellow-600 transition duration-300"
      >
        Inscris-toi Maintenant
      </a>
    </div>
  );
};


const ExpertsSection: React.FC = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-black mb-6 text-center">
        Rencontre Nos Experts et Intervenants
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ExpertCard name="Mireille Le Bouler" description="Experte en investissement immobilier." imageUrl="/mireille.jpg" />
        <ExpertCard name="Jean Dupont" description="Spécialiste en financement immobilier." imageUrl="/mireille.jpg" />
        <ExpertCard name="Sophie Martin" description="Coach en développement personnel." imageUrl="/mireille.jpg" />
      </div>
      <CTAButton />
    </div>
  );
};


const ExpertCard: React.FC<{ name: string; description: string; imageUrl: string }> = ({ name, description, imageUrl }) => {
  return (
    <div className="flex flex-col items-center border border-yellow-300 rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <Image
        src={imageUrl}
        alt={name}
        width={200}
        height={200}
        className="rounded-full mb-4 object-cover"
      />
      <h3 className="text-xl font-semibold text-black text-center">{name}</h3>
      <p className="text-gray-700 text-center">{description}</p>
    </div>
  );
};

export default EventProgram;
