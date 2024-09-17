import React from 'react';
import Image from 'next/image';

const AProposSection: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-full lg:max-w-6xl mx-auto px-4 md:px-8 mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 text-center">
          Notre Vision pour &#39;1000 Femmes Propriétaires&#39;
        </h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed text-center">
          Nous croyons qu&#39;un accès accru à la propriété immobilière est un levier puissant pour l&#39;indépendance financière et l&#39;égalité des genres. Inspirées par l&#39;histoire de Mireille Le Bouler, nous visons à créer une communauté de 1000 femmes propriétaires, capables de mentorat et d&#39;inspiration pour d&#39;autres femmes.
        </p>
      </div>

      <div className="max-w-full lg:max-w-6xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center">
        
        <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
          <h3 className="text-xl md:text-2xl font-bold text-black mb-6 text-center md:text-left">
            Qui est l&#39;initiatrice ?
          </h3>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4 text-justify">
            L&#39;initiatrice de l&#39;événement, Mireille Le Bouler, est une experte en investissement immobilier avec plus de 25 ans d&#39;expérience. Dès l&#39;âge de 22 ans, elle a réalisé son premier investissement à Vitry-sur-Seine. Passionnée par l’immobilier, elle a travaillé avec de grandes agences telles qu&#39;Engels &amp; Völkers Paris et Feel Like Home, développant une expertise en immobilier de luxe et en négociation commerciale. En 2018, elle a fondé Uriel Group, une entreprise qui accompagne les femmes et les membres de la diaspora afro-caribéenne dans leurs projets d&#39;investissement immobilier en France et en Afrique.
            <br /><br />
            À travers son parcours inspirant et sa vision innovante, Mireille a aidé des centaines de femmes à concrétiser leur rêve de devenir propriétaires, en les soutenant dans toutes les étapes de leur investissement. Grâce à cette initiative, &#39;1000 Femmes Propriétaires&#39;, elle aspire à créer une communauté forte et solidaire de femmes indépendantes, autonomes et financièrement libres.
          </p>

    
          <div className="flex justify-center md:justify-start">
            <a
              href="#"
              className="inline-block bg-yellow-500 text-white font-semibold py-3 px-6 md:px-8 rounded-md shadow-md hover:bg-yellow-600 transition duration-300"
            >
              Inscris-toi Maintenant
            </a>
          </div>
        </div>

        
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/IMG3.jpg"
            alt="Mireille Le Bouler"
            width={400}
            height={600}
            className="h-auto max-w-full object-cover rounded-md shadow-md" // Utilisez max-w-full pour maintenir le ratio et la responsivité
          />
        </div>
      </div>
    </section>
  );
};

export default AProposSection;
