import { FaCalendarAlt } from "react-icons/fa";

interface HeaderSectionProps {
  title: string;
  date: string;
  description: string;
  buttonText: string;
  backgroundImageUrl: string;
}

export default function HeaderSection({
  title,
  date,
  description,
  buttonText,
  backgroundImageUrl,
}: HeaderSectionProps) {
  return (
    <section
      className="bg-cover bg-center text-white text-center "
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className="bg-black bg-opacity-70 py-28 capitalize-first-letter">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-4xl font-bold text-yellow-50 underline mb-4 animate-fadeIn">
            {title}
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
          <button className="mt-8 bg-yellow-500 hover:bg-yellow-600 text-lg font-semibold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
            {buttonText}
          </button>
        </div>
      </div>
    </section>
  );
}