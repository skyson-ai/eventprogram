import HeaderSection from "./components/HeaderSection";
import IntroSection from "./components/IntroSection";
import PartenairesSection from "./components/Partners";
import PourquoiParticiper from "./components/PourquoiParticiper";
import Testimonials from "./components/Temoignagne";
import AProposSection from "./components/AboutInitiator"
import EventProgram from "./components/Programm";
import InscriptionSection from "./components/InscriptionSection";
import FAQSection from "./components/Faq";

export default function Home() {
  return (
    <>
       <HeaderSection
          title="Révolutionne Ta Vie Financière : Rejoins le Mouvement 1000 Femmes Propriétaires"
          date="Le 13 Octobre 2024 à Paris"
          description="Découvre Comment Devenir Propriétaire et Bâtir un Patrimoine Durable"
          buttonText="Inscris-toi Maintenant"
          buttonLink="https://docs.google.com/forms/d/e/1FAIpQLSeMDll6g7iwVDMkRSbook0WsWAV6nBrRuusDWnllEftu0SN9Q/viewform?usp=sf_link" // Ajoute le lien ici
          backgroundImageUrl="/1000femme.jpg"
        />
      <IntroSection/>
      <EventProgram />
      <AProposSection />
      <Testimonials/>
      <PourquoiParticiper/>
      <InscriptionSection/>
      <PartenairesSection/>
      <FAQSection/>
    </>
  );
}
