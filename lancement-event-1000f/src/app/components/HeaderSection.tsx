import Link from 'next/link';
import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';

const HeaderSection: React.FC = () => {
  const title = "Révolutionne Ta Vie Financière :<br />Rejoins le Mouvement<br />1000 Femmes Propriétaires";
  const date = "Le 13 Octobre 2024 à Paris";
  const description = "Découvre Comment Devenir Propriétaire et Bâtir un Patrimoine Durable";
  const buttonText = "Inscris-toi Maintenant";
  const backgroundImageUrl = "/1000femme.jpg";

  return (
    <section
      className="bg-cover bg-center text-white text-center"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className="bg-black bg-opacity-80 py-28 capitalize-first-letter">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-4xl font-bold text-yellow-50 mb-4 animate-fadeIn uppercase">
            <span dangerouslySetInnerHTML={{ __html: title }} />
          </h1>
          <p className="mt-4 text-lg md:text-xl flex justify-center items-center space-x-2">
            <FaCalendarAlt className="text-yellow-500" />
            <span className="text-2xl md:text-4xl my-4 md:my-8 font-medium text-yellow-500 uppercase">
              {date}
            </span>
          </p>
          <p className="mt-4 text-lg md:text-xl animate-fadeIn capitalize-first-letter">
            {description}
          </p>
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSc44kPYD4zEa5vBIvVwuNax5hmOtCjTuYBe10vNXTI9wRNXnw/viewform?usp=sf_link"
            className="inline-block bg-yellow-500 text-white font-semibold py-3 px-6 rounded-full text-lg hover:bg-yellow-600 transition duration-300 ease-in-out mt-8"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeaderSection;
