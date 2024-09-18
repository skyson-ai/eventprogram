import Image from 'next/image'; 
import Link from 'next/link';
import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const BenefitsSection = () => {
  return (
    <section className="py-16 bg-yellow-50 text-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
          Les Bénéfices d&apos;un Bien Immobilier pour Ton Futur
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <ul className="text-left list-none space-y-6 text-lg md:text-xl text-gray-700">
              <li className="flex items-start">
                <FaCheckCircle className="text-yellow-500 mr-3 mt-1.5" />
                <div>
                  <strong>Sécurité Financière :</strong> Une maison est un actif stable et durable.
                </div>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-yellow-500 mr-3 mt-1.5" />
                <div>
                  <strong>Croissance du Patrimoine :</strong> L&apos;immobilier valorise avec le temps.
                </div>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-yellow-500 mr-3 mt-1.5" />
                <div>
                  <strong>Revenus Passifs :</strong> La location peut générer des revenus stables.
                </div>
              </li>
            </ul>

            <Link
              href="#register"
              className="inline-block mt-10 bg-yellow-500 text-white font-semibold py-3 px-8 rounded-full text-lg hover:bg-yellow-600 transition-transform duration-300 ease-in-out transform hover:scale-105 shadow-md"
            >
              Participe et booste ton avenir
            </Link>
          </div>

          {/* Image Section */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/IMG2.jpg"
              alt="Immo Benefits"
              width={500}
              height={500}
              className="rounded-lg shadow-xl transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
