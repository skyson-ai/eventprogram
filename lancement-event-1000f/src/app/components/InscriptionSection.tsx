"use client";

import React from 'react';
import CountdownTimer from './CoundDown';
import { isDateInPast } from '@/utils/getDate';
import { FaUser, FaEnvelope, FaPhone } from 'react-icons/fa';
import Link from 'next/link';

const InscriptionSection = () => {
  const countdownDate = new Date('2024-10-19T23:18:07');

  return (
    <section className="py-12 bg-gradient-to-r from-white via-gray-100 to-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
          Inscris-toi Maintenant
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          Inscris-toi avant la date limite et bénéficie d&apos;une consultation gratuite avec un expert pour discuter de tes projets immobiliers.
        </p>
        
        {
          !isDateInPast(countdownDate) &&
          <CountdownTimer
            deadline={countdownDate}
            title={'Place limitée, Réservez vite vos places !'}
          />
        }
      
      </div>
      <div className="mt-12">
        <form className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto py-10">
          <div className="mb-4 relative">
            <div className="flex items-center border rounded-lg focus-within:ring-2 focus-within:ring-yellow-500">
              <FaUser className="text-gray-400 ml-3" />
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border-none rounded-r-lg focus:outline-none"
                placeholder="Votre nom"
              />
            </div>
          </div>
          <div className="mb-4 relative">
            <div className="flex items-center border rounded-lg focus-within:ring-2 focus-within:ring-yellow-500">
              <FaEnvelope className="text-gray-400 ml-3" />
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border-none rounded-r-lg focus:outline-none"
                placeholder="Votre email"
              />
            </div>
          </div>
          <div className="mb-4 relative">
            <div className="flex items-center border rounded-lg focus-within:ring-2 focus-within:ring-yellow-500">
              <FaPhone className="text-gray-400 ml-3" />
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-2 border-none rounded-r-lg focus:outline-none"
                placeholder="Votre téléphone"
              />
            </div>
          </div>
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLSeMDll6g7iwVDMkRSbook0WsWAV6nBrRuusDWnllEftu0SN9Q/viewform?usp=sf_link" >
            <button
              type="button"
              className="w-full bg-yellow-500 text-white font-semibold py-3 px-6 rounded-full text-lg hover:bg-yellow-600 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Je profite de l&apos;offre
            </button>
          </Link>
        </form>
      </div>
    </section>
  );
};

export default InscriptionSection;
