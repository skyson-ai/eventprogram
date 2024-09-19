"use client";
import React from "react";
import Image from "next/image";

const WhoisMireille: React.FC = () => {
    return (
        <section className="bg-white p-4 md:p-16">
            {/* Image pleine largeur */}
            <div className="relative w-full h-64 md:h-[600px]">
                <Image
                    src="/Mireille.jpg" // Chemin vers la photo de Mireille
                    alt="Mireille Le Bouler"
                    layout="fill" // L'image remplit toute la largeur
                    objectFit="cover" // Maintient les proportions de l'image
                    className="rounded-none md:rounded-lg"
                />
            </div>

            {/* Texte en dessous avec contour stylisé */}
            <div className="relative z-10 -mt-12 md:-mt-16 mx-auto max-w-4xl p-6 md:p-12 bg-white border-4 border-yellow-500 rounded-lg shadow-lg">
                <h2 className="text-2xl md:text-4xl font-bold text-gray-800 text-center">Qui est Mireille Le Bouler ?</h2>
                <p className="mt-4 text-base md:text-lg text-gray-600 leading-relaxed text-center">
                    Mireille Le Bouler est une experte en immobilier qui a réalisé son premier achat immobilier à l&apos;âge de 22 ans. Elle dirige Uriel Immobilier, une société qui accompagne les individus dans leurs projets immobiliers.
                </p>
                <p className="mt-4 text-base md:text-lg text-gray-600 leading-relaxed text-center">
                    Connue pour sa passion et son expertise, elle s&apos;est imposée comme une figure de proue en aidant les gens, notamment les femmes, à atteindre l&apos;indépendance financière grâce à l&apos;investissement immobilier. Son approche unique et ses résultats concrets font d&apos;elle une leader dans son domaine.
                </p>
            </div>
        </section>
    );
};

export default WhoisMireille;
