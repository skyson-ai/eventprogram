'use client';

import React from 'react';

const GoogleFormEmbed = () => {
  return (
    <section className="py-12 bg-gray-100 text-center">
      <div className="container mx-auto px-4">
        <p className="text-lg text-gray-700 mb-8">
          Remplissez le formulaire ci-dessous pour vous inscrire à l&apos;événement.
        </p>

        {/* Google Forms iframe */}
        <div className="w-full h-96 md:h-[600px]">
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc44kPYD4zEa5vBIvVwuNax5hmOtCjTuYBe10vNXTI9wRNXnw/viewform?embedded=true" width="640" height="684" 
        frameborder="0" marginheight="0" marginwidth="0">Chargement…</iframe>
        </div>
      </div>
    </section>
  );
};

export default GoogleFormEmbed;
