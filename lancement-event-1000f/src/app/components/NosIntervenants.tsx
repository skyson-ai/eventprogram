import Image from "next/image";

const CTAButton: React.FC<{ text: string }> = ({ text }) => (
    <div className="flex justify-center mt-10">
      <a
        href="#"
        className="inline-block bg-yellow-500 text-white font-semibold py-4 px-10 rounded-full shadow-md hover:bg-yellow-600 hover:shadow-lg transition-transform transform hover:scale-105 duration-300"
      >
        {text}
      </a>
    </div>
  );
  
  export const ExpertsSection: React.FC = () => (
    <div className="mt-16">
      <SectionTitle title="Rencontre Nos Experts et Intervenants" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  py-12 px-4 rounded-lg">
        <ExpertCard name="Mireille Le Bouler" description="Experte en investissement immobilier." imageUrl="/mireille.jpg" />
        <ExpertCard name="Jean Dupont" description="Spécialiste en financement immobilier." imageUrl="/mireille.jpg" />
        <ExpertCard name="Sophie Martin" description="Coach en développement personnel." imageUrl="/mireille.jpg" />
      </div>
      <CTAButton text="Je réserve ma place" />
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

  const SectionTitle: React.FC<{ title: string }> = ({ title }) => (
    <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-12 text-center border-b-4 border-yellow-500 pb-4 capitalize-first-letter">
      {title}
    </h1>
  );