import React from 'react';

const IntroSection = () => {
  return (
    <section className="py-12 bg-white text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
          Pourquoi Participer à 1000 Femmes Propriétaires ?
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Tu rêves de posséder un bien immobilier mais ne sais pas par où commencer ? Rejoins-nous le 13 octobre à Paris pour 1000 Femmes Propriétaires. Cet événement est conçu pour te fournir les outils et le soutien nécessaires pour transformer ton avenir financier.
        </p>
        <ul className="text-left list-disc list-inside text-gray-700 max-w-2xl mx-auto space-y-4 mb-8">
          <li><strong>Indépendance Financière :</strong> Découvre comment l&apos;immobilier peut t&apos;offrir une stabilité.</li>
          <li><strong>Bâtir un Patrimoine Durable :</strong> Apprends les stratégies pour créer et maintenir un patrimoine solide.</li>
          <li><strong>Évite les Erreurs Courantes :</strong> Apprends les meilleures pratiques.</li>
          <li><strong>Soutien et Ressources :</strong> Accède à l&apos;expertise de leaders en immobilier et finance.</li>
        </ul>
        <a
          href="#register"
          className="inline-block bg-yellow-700 text-white font-semibold py-3 px-8 rounded-full text-lg hover:bg-yellow-800 transition duration-300"
        >
          Inscris-toi Maintenant
        </a>
      </div>
    </section>
  );
};

export default IntroSection;
