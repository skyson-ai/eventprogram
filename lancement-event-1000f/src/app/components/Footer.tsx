"use client";

import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <div className="mb-8 md:mb-0">
          <h3 className="text-xl font-semibold mb-4">Contactez-Nous</h3>
          <p className="mb-2"><strong>Adresse :</strong> 123 Rue de l'Exemple, Paris, France</p>
          <p className="mb-2"><strong>Téléphone :</strong> +33 1 23 45 67 89</p>
          <p className="mb-2"><strong>Email :</strong> contact@exemple.com</p>
        </div>
        <div className="mb-8 md:mb-0">
          <h3 className="text-xl font-semibold mb-4">Tous savoir de nous</h3>
          
          <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className='flex'>
              Notre site web : <FaLinkedinIn className="text-2xl hover:text-yellow-500 transition duration-300" />
            </Link>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Suivez-Nous</h3>
          <div className="flex space-x-4">
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="text-2xl hover:text-yellow-500 transition duration-300" />
            </Link>
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-2xl hover:text-yellow-500 transition duration-300" />
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-4 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Uriel Group Entreprise. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
