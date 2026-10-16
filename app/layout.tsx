import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, Martian_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";
import { profile } from "../content/site";

/* La voz de display es una mono: el nombre en cabecera está compuesto con la
   misma clase de letra con la que él escribe. El eje `wdth` hay que pedirlo
   explícitamente — next/font solo incluye `wght` por defecto. */
const martianMono = Martian_Mono({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-martian",
  display: "swap",
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-sans",
  display: "swap",
});

/* IBM Plex Mono no tiene versión variable: hay que enumerar los pesos. */
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${profile.name} — ${profile.role}`,
    template: `%s · ${profile.shortName}`,
  },
  description:
    "Desarrollador backend en producción para Walmart, Waldos y P&G. Tres aplicaciones propias en Flutter con 808 pruebas automatizadas. Ingeniería en Informática, IPN.",
  authors: [{ name: profile.name, url: profile.githubUrl }],
  keywords: [
    "desarrollador backend",
    "Laravel",
    "PHP",
    "MongoDB",
    "Flutter",
    "IPN",
    "Ciudad de México",
  ],
  openGraph: {
    type: "profile",
    locale: "es_MX",
    title: `${profile.name} — ${profile.role}`,
    description:
      "Backend en producción, tres apps propias en Flutter y 808 pruebas automatizadas.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${martianMono.variable} ${plexSans.variable} ${plexMono.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="min-h-full">
        {/* `disableTransitionOnChange` mata las transiciones durante el cambio:
            sin eso los 120 ms de cada control disparan a la vez y el cambio de
            tema se ve como un barrido sucio. */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
