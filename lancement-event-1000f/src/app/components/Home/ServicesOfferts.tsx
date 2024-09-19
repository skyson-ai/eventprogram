import React from 'react';

const ServicesOfferts = () => {
  const services = [
    { title: 'Accompagnement personnalisé', description: 'Des conseils sur mesure pour réussir vos projets d\'achat immobilier.' },
    { title: 'Gestion de patrimoine', description: 'Optimisez et gérez efficacement votre patrimoine pour assurer votre avenir financier.' },
    { title: 'Formation à l\'investissement', description: 'Apprenez les clés de l\'investissement immobilier pour maximiser vos profits.' },
  ];

  return (
    <section className="bg-gray-900 py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-lg">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-yellow-500 mb-12">Nos Services Offerts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center p-8 bg-gray-800 rounded-lg shadow-lg transform transition-transform duration-300 hover:shadow-xl hover:scale-105"
            >
              <h3 className="text-2xl md:text-3xl font-semibold text-yellow-500 mb-4">{service.title}</h3>
              <p className="text-gray-300 text-base md:text-lg">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesOfferts;
