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
        <div className="relative" style={{ paddingBottom: '56.25%', height: 0, overflow: 'hidden', maxWidth: '100%', position: 'relative' }}>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSc44kPYD4zEa5vBIvVwuNax5hmOtCjTuYBe10vNXTI9wRNXnw/viewform?embedded=true"
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="Google Forms"
            allowFullScreen
          >
            Chargement…
          </iframe>
        </div>
      </div>
    </section>
  );
};

export default GoogleFormEmbed;
