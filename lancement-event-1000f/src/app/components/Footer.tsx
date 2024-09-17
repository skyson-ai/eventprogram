"use client";

import Link from 'next/link';
import React from 'react';
import { FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="mb-8 md:mb-0">
          <h3 className="text-2xl font-semibold mb-6">Contactez-Nous</h3>
          <p className="mb-4"><strong>Adresse :</strong> 3 Av Pasteur, 98000 Monaco</p>
          <p className="mb-4"><strong>Téléphone :</strong> (+337) 6 786 308 62</p>
        </div>
        <div className="mb-8 md:mb-0">
          <h3 className="text-2xl font-semibold mb-6">Tous savoir de nous</h3>
          <Link href="https://uriel-group.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-yellow-500 transition duration-300">
              <span className='underline text-yellow-300'>Notre site web</span>            
          </Link>
        </div>
        <div className="mb-8 md:mb-0">
          <h3 className="text-2xl font-semibold mb-6">Suivez-Nous</h3>
          <div className="flex space-x-6">
            <Link href="https://www.linkedin.com/company/uriel-group/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-yellow-500 transition duration-300">
                <FaLinkedinIn />
              
            </Link>
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-yellow-500 transition duration-300">
                <FaInstagram />
            </Link>
          </div>
        </div>

      </div>
      <div className="mt-12 border-t border-gray-800 pt-6 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Uriel Group Entreprise. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
