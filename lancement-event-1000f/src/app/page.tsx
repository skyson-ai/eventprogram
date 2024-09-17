import HeaderSection from "./components/HeaderSection";
import IntroSection from "./components/IntroSection";
import PartenairesSection from "./components/Partners"
import AProposSection from "./components/AboutInitiator"
import EventProgram from "./components/Programm";

export default function Home() {

  return (
    <>
      <HeaderSection title={""} date={""} description={""} buttonText={""} backgroundImageUrl={""}/>
      <PartenairesSection/>
      <AProposSection />
      <EventProgram />
      <IntroSection/>
      
    </>
  );
}
