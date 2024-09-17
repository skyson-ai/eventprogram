import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import {Footer} from "./components/Footer";
import CountDown from "./components/CoundDown";
import { isDateInPast } from "@/utils/getDate";


const inter = DM_Sans({ subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata: Metadata = {
  title: "Lancement de 1000 Femmes Proprietaires",
  description: "1000 Femmes Proprietaires est un programme visant à encourager les femmes de la diaspora à investir dans l'immobilier quel que soit leurs situations et statuts, pour favoriser l'autonomie financière et la constitution d'un patrimoine",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const countdownDate = new Date('2024-10-19T23:18:07')

  return (
    <html lang="fr"> 
      <body className={inter.className}>
      <Header />
      {
        !isDateInPast(countdownDate) &&
        <CountDown
          deadline={countdownDate}
          title={'Place limitée , Réservez vite vos places !'}
        />
      }
        {children}
        <Footer />
      </body>
    </html>
  );
}
