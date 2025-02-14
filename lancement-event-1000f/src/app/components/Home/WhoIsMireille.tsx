"use client";
import React from "react";
import Image from "next/image";

const WhoisMireille: React.FC = () => {
    return (
        <section className="bg-white p-0 md:p-16">
            
            <div className="relative w-full h-96 md:h-[600px]">
                <Image
                    src="/Mireille.jpg"
                    alt="Mireille Le Bouler"
                    layout="fill" 
                    objectFit="cover" 
                    className="rounded-none md:rounded-lg"
                />
            </div>

            <div className="relative z-10 -mt-8 md:-mt-12 mx-auto max-w-4xl p-6 md:p-12 bg-white border-4 border-yellow-500 rounded-lg shadow-lg">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center">Qui est Mireille Le Bouler ?</h2>
                <p className="mt-4 text-lg text-gray-600 leading-relaxed text-center">
                    Mireille Le Bouler est une experte en immobilier qui a réalisé son premier achat immobilier à l&apos;âge de 22 ans. Elle dirige Uriel Group, une société qui accompagne la diaspora afro-caribéenne dans leurs projets immobiliers.
                </p>
                <p className="mt-4 text-lg text-gray-600 leading-relaxed text-center">
                    Connue pour sa passion et son expertise, elle s&apos;est imposée comme une figure de proue en aidant les gens, notamment les femmes, à atteindre l&apos;indépendance financière grâce à l&apos;investissement immobilier. Son approche unique et ses résultats concrets font d&apos;elle une leader dans son domaine.
                </p>
            </div>
        </section>
    );
};

export default WhoisMireille;
