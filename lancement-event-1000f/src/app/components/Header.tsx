'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <header className="flex flex-wrap justify-between items-center p-4 bg-white shadow-md">
            <div className="flex items-center mx-4">
                <Link href="/" onClick={closeMenu}>
                    <h1 className="text-xl md:text-3xl font-extrabold tracking-tight text-gray-900 hover:text-yellow-600 transition-colors duration-300">
                        <span className="text-yellow-500">Mireille</span> <span className="text-gray-700">Le Bouler</span>
                    </h1>
                </Link>
            </div>

            <button
                className="block md:hidden text-gray-600 hover:text-yellow-500 focus:outline-none"
                onClick={toggleMenu}
            >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    {isOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                    )}
                </svg>
            </button>

            {/* Navigation Menu */}
            <nav className={`my-4 text-2xl flex flex-col md:flex-row md:items-center w-full md:w-auto ${isOpen ? 'block' : 'hidden'} md:block`}>
                <Link href="/" className="text-gray-800 hover:text-yellow-600 text-lg py-2 px-4 transition duration-300 rounded" onClick={closeMenu}>
                    Accueil
                </Link>
                <Link href="/1000-femmes-proprietaires" className="text-gray-800 hover:text-yellow-600 text-lg py-2 px-4 transition duration-300 rounded" onClick={closeMenu}>
                    Événements
                </Link>
                <Link href="https://docs.google.com/forms/d/e/1FAIpQLSeMDll6g7iwVDMkRSbook0WsWAV6nBrRuusDWnllEftu0SN9Q/viewform?usp=sf_link" className="text-gray-800 hover:text-yellow-600 text-lg py-2 px-4 transition duration-300 rounded" onClick={closeMenu}>
                    Contact
                </Link>
            </nav>
        </header>
    );
};

export default Header;
