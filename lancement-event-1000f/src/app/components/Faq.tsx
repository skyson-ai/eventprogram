"use client";

import React, { useState } from 'react';

const faqs = [
  {
    question: 'Qu’est-ce que l’événement "1000 Femmes Propriétaires" ?',
    answer: 'L’événement "1000 Femmes Propriétaires" est une initiative visant à aider les femmes à accéder à la propriété immobilière en leur fournissant les outils, les ressources et le soutien nécessaires pour réussir dans le domaine de l’investissement immobilier.'
  },
  {
    question: 'Comment puis-je m’inscrire à l’événement ?',
    answer: 'Pour vous inscrire, cliquez sur le bouton "Inscris-toi Maintenant" sur notre site web. Vous serez dirigée vers le formulaire d’inscription où vous devrez remplir vos informations personnelles.'
  },
  {
    question:"L'evenement est il payant ?",
    answer:"Non, L'evenement est totalement gratuit"
  },
  {
    question: 'Y a-t-il des prérequis pour participer à l’événement ?',
    answer: 'Aucun prérequis spécifique n’est nécessaire. L’événement est ouvert à toutes les femmes intéressées par l’investissement immobilier, qu’elles soient débutantes ou expérimentées.'
  },
  {
    question: 'Y a-t-il un tarif spécial ou une offre promotionnelle ?',
    answer: 'Oui, nous offrons une consultation gratuite avec un expert pour toutes les inscriptions effectuées avant le 20 Septembre. Assurez-vous de vous inscrire avant la date limite pour bénéficier de cette offre spéciale.'
  },
  {
    question: 'Comment puis-je contacter l’équipe en cas de questions supplémentaires ?',
    answer: 'Pour toute question supplémentaire, vous pouvez nous contacter via le formulaire de contact sur notre site web, ou nous envoyer un email à [adresse email]. Notre équipe sera heureuse de vous aider.'
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-full lg:max-w-4xl mx-auto px-4 md:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">Questions Fréquemment Posées</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
              <button 
                onClick={() => handleToggle(index)}
                className="w-full text-left px-6 py-4 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
