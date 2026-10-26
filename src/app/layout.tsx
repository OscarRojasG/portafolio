import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://oscarrojas.cl";
const fullName = "Oscar Francisco Rojas Gaete";
const description =
  "Portafolio de Oscar Francisco Rojas Gaete, investigador académico y desarrollador en la PUCV. Especializado en Machine Learning, optimización combinatoria y tecnología educativa.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${fullName} | Investigador y Desarrollador`,
  description,
  authors: [{ name: fullName, url: siteUrl }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    url: siteUrl,
    siteName: fullName,
    title: `${fullName} | Investigador y Desarrollador`,
    description,
    locale: "es_CL",
  },
};

// Datos estructurados para que los buscadores identifiquen a la persona y sus perfiles
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: fullName,
  alternateName: "Oscar Rojas",
  url: siteUrl,
  email: "mailto:oscar.rojas@pucv.cl",
  jobTitle: "Investigador académico y desarrollador",
  affiliation: {
    "@type": "CollegeOrUniversity",
    name: "Pontificia Universidad Católica de Valparaíso",
  },
  knowsAbout: ["Machine Learning", "Optimización combinatoria", "Tecnología educativa"],
  sameAs: [
    "https://orcid.org/0009-0005-2555-6544",
    "https://github.com/OscarRojasG",
    "https://www.linkedin.com/in/oscarfranciscorojasgaete/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <div className="flex-grow">
            {children}
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
