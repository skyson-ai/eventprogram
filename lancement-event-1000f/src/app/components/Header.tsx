import React from 'react';
import Image from 'next/image';

const Header: React.FC = () => {
    return (
        <header className="flex justify-between items-center p-4 bg-white shadow-md">
            <div className="flex items-center">
                <Image 
                    src="/uriel.jpeg" 
                    alt="Logo" 
                    width={40} 
                    height={40} 
                    className="h-10"
                />
          
            </div>

            <nav className="space-x-4 text-2xl">
                <a href="/" className="text-gray-600 hover:text-gold-yellow text-lg py-2 px-4 transition duration-300 rounded">Accueil</a>
                <a href="/about" className="text-gray-600 hover:text-gold-yellow text-lg py-2 px-4 transition duration-300 rounded">À Propos</a>
                <a href="/events" className="text-gray-600 hover:text-gold-yellow text-lg py-2 px-4 transition duration-300 rounded">Événements</a>
                <a href="/contact" className="text-gray-600 hover:text-gold-yellow text-lg py-2 px-4 transition duration-300 rounded">Contact</a>
                <a href="/register" className="text-gray-600 hover:text-gold-yellow text-lg py-2 px-4 transition duration-300 rounded">Inscription</a>
            </nav>
        </header>
    );
};

export default Header;
