import HeaderSection from "./components/HeaderSection";
import IntroSection from "./components/IntroSection";
import PartenairesSection from "./components/Partners";
import PourquoiParticiper from "./components/PourquoiParticiper";
import Testimonials from "./components/Temoignagne";
import AProposSection from "./components/AboutInitiator"
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
          backgroundImageUrl="/1000femme.jpg"
        />
      <IntroSection/>
      <PartenairesSection/>
      <AProposSection />
      <Testimonials/>
      <InscriptionSection/>
      <PourquoiParticiper/>
      <FAQSection/>
    </>
  );
}
