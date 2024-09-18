'use client';

import React from 'react';
import CountdownTimer from './CoundDown';
import { isDateInPast } from '@/utils/getDate';
import Image from 'next/image';
import GoogleFormEmbed from './googleFormEmbedded';

const InscriptionSection = () => {
  const countdownDate = new Date('2024-10-19T23:18:07');

  return (
    <section className="py-12 bg-gradient-to-r from-white via-gray-100 to-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
         Profite de <strong className='text-yellow-500'> l&apos;offre maintenant</strong>
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          Inscris-toi avant la date limite et bénéficie d&apos;une consultation gratuite avec un expert pour discuter de tes projets immobiliers.
        </p>
        
        {!isDateInPast(countdownDate) && (
          <CountdownTimer
            deadline={countdownDate}
            title={'Place limitée, Réservez vite vos places !'}
          />
        )}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src="/inscris-toi.jpg" 
              alt="Coach"
              width={400}
              height={400}
              className="rounded-full shadow-lg object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <GoogleFormEmbed/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InscriptionSection;
