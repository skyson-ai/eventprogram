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
