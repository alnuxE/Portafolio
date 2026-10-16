import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";
import "./cv.css";
import { profile } from "../../content/site";

/* EB Garamond solo se carga en esta ruta: es la letra del CV clásico y no
   pinta nada en el resto del sitio. El formato Harvard pide una serif de
   libro, y Garamond mete más palabras por línea a igual legibilidad, que es
   exactamente el problema de un CV que tiene que caber en un A4.
   Es variable (wght 400–800), así que no hace falta enumerar pesos. */
const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-garamond",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Currículum",
  description: `Currículum de ${profile.name}, ${profile.role.toLowerCase()}. Dos presentaciones imprimibles en A4: clásico para convocatorias formales y destacado para empresa.`,
};

export default function CvLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className={`${ebGaramond.variable} escritorio`}>{children}</div>;
}
