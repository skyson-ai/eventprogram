import React from 'react'
import HeaderSection from "../components/HeaderSection";
import IntroSection from "../components/IntroSection";
import PartenairesSection from "../components/Partners";
import PourquoiParticiper from "../components/PourquoiParticiper";
import Testimonials from "../components/Temoignagne";
import AProposSection from "../components/AboutInitiator"
import EventProgram from "../components/Programm";
import InscriptionSection from "../components/InscriptionSection";
import FAQSection from "../components/Faq";
import { isDateInPast } from "@/utils/getDate";
import CountdownTimer from '../components/CoundDown';

const page = () => {
  const countdownDate = new Date('2024-10-19T23:18:07')

  return (
    <>
      {
        !isDateInPast(countdownDate) &&
        <CountdownTimer
          deadline={countdownDate}
          title={'Place limitée , Réservez vite vos places !'}
        />
      }
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
  )
}

export default page
