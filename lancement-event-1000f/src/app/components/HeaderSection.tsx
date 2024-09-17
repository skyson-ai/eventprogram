import Image from "next/image";

export default function HeaderSection() {
    return (
      <section className="bg-gray-600 text-white py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-yellow-50 underline">
            Révolutionne Ta Vie Financière : Rejoins le Mouvement 1000 Femmes Propriétaires
          </h1>
          <p className="mt-4 text-xl">
            <p className="text-5xl my-8 font-medium text-yellow-500">Le 13 Octobre 2024 à Paris </p> Découvre Comment Devenir Propriétaire et Bâtir un Patrimoine Durable
          </p>
          <div className="mt-8">
            <Image
              src="/1000femme.webp"
              alt="Femmes célébrant dans une nouvelle maison"
              className="mx-auto rounded-lg shadow-lg w-full md:w-1/2"
              width={400}
              height={300}
            />
          </div>
          <button className="mt-8 bg-yellow-500 hover:bg-yellow-600 text-lg font-semibold py-3 px-6 rounded-full">
            Inscris-toi Maintenant
          </button>
        </div>
      </section>
    );
  }
  