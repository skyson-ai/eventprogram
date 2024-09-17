import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import {Footer} from "./components/Footer";


const inter = DM_Sans({ subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata: Metadata = {
<<<<<<< HEAD
  title: "Uriel Group | Event Website",
  description: "1000 Femmes Propriétaires : un programme permettant aux femmes d'investir",
=======
  title: "Lancement de 1000 Femmes Proprietaires",
  description: "1000 Femmes Proprietaires est un programme visant à encourager les femmes de la diaspora à investir dans l'immobilier quel que soit leurs situations et statuts, pour favoriser l'autonomie financière et la constitution d'un patrimoine",
>>>>>>> b5fc1b428114afdd70dc595d34b509e0debd9849
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr"> 
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
