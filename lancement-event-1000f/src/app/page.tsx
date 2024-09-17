import HeaderSection from "./components/HeaderSection";
import IntroSection from "./components/IntroSection";
import CountDown from "./components/CoundDown";
import { isDateInPast } from "@/utils/getDate";
import PartenairesSection from "./components/Partners";

export default function Home() {
  const countdownDate = new Date('2024-10-19T23:18:07')

  return (
    <>
       {
        !isDateInPast(countdownDate) &&
        <CountDown
          deadline={countdownDate}
          title={'Place limitée , Réservez vite vos places !'}
        />
      }
       <HeaderSection
        title="Révolutionne Ta Vie Financière : Rejoins le Mouvement 1000 Femmes Propriétaires"
        date="Le 13 Octobre 2024 à Paris"
        description="Découvre Comment Devenir Propriétaire et Bâtir un Patrimoine Durable"
        buttonText="Inscris-toi Maintenant"
        backgroundImageUrl="/1000femme.jpg"

      />
      <IntroSection/>
      <PartenairesSection/>
      
    </>
  );
}
