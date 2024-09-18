import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";


const inter = DM_Sans({ subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata: Metadata = {
  title: "Mireille Lebouler - Conseillère en strategie d'investissement immobilière",
  description: "Découvrez le programme 1000 Femmes Propriétaires dirigé par l'experte Mireille Lebouler. Ce programme vise à encourager les femmes de la diaspora à investir dans l'immobilier pour favoriser l'autonomie financière et la constitution d'un patrimoine, quel que soit leur statut ou situation.",
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
      </body>
    </html>
  );
}
