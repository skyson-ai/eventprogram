import WhoIsMireille from "./components/Home/WhoIsMireille";
import ServicesOfferts from "./components/Home/ServicesOfferts";
import CeQuiLaDifferencieDesAutres from "./components/Home/CeQuiLaDifferencieDesAutres";
import ParcoursProfessionnel from "./components/Home/Parcoursprof";
import VisionMission from "./components/Home/VisionMission";
import TemoignagesSection from "./components/Home/Temoignages";

export default function Home() {
  return (
    <>
      <WhoIsMireille/>
      <ServicesOfferts/>
      <CeQuiLaDifferencieDesAutres/>
      <ParcoursProfessionnel/>
      <VisionMission/>
      <TemoignagesSection/>
    </>
  );
}
