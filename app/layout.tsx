import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import CookieConsentComponent from "@/components/CookieConsent";
import "./globals.css";
import "./cookieconsent.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.prekreslito.cz"),

  title: {
    default: "Překreslito.cz | Překreslování projektové dokumentace",
    template: "%s | Překreslito.cz",
  },

  description:
    "Profesionální překreslování projektové dokumentace rodinných domů do digitální podoby. Převod papírových výkresů a PDF do DWG, PDF a dalších CAD formátů.",

  keywords: [
    "Překreslito",
    "Prekreslito",
    "Překreslito.cz",
    "Prekreslito.cz",

    "překreslení projektu",
    "prekreslení projektu",
    "prekresleni projektu",

    "překreslení výkresů",
    "prekreslení výkresů",
    "prekresleni vykresu",

    "digitalizace projektů",
    "digitalizace projektu",

    "AutoCAD",
    "DWG",
    "DXF",
    "PDF do DWG",
    "CAD",

    "projekt rodinného domu",
    "stavební dokumentace",
    "překreslení rodinného domu",
  ],

  authors: [
    {
      name: "Překreslito.cz",
    },
  ],

  creator: "Překreslito.cz",

  publisher: "Překreslito.cz",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Překreslito.cz",
    description:
      "Profesionální překreslování projektové dokumentace rodinných domů do digitální podoby.",
    url: "https://www.prekreslito.cz",
    siteName: "Překreslito.cz",
    locale: "cs_CZ",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Překreslito.cz",
    description:
      "Profesionální překreslování projektové dokumentace rodinných domů do digitální podoby.",
  },

  category: "Construction",
};
const schema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",

  name: "Překreslito.cz",

  url: "https://www.prekreslito.cz",

  logo: "https://www.prekreslito.cz/images/logo.png",

  image: "https://www.prekreslito.cz/images/hero.png",

  description:
    "Profesionální překreslování projektové dokumentace rodinných domů do digitální podoby.",

  email: "info@prekreslito.cz",

  areaServed: {
    "@type": "Country",
    name: "Česká republika",
  },

  address: {
    "@type": "PostalAddress",
    addressCountry: "CZ",
  },

  priceRange: "Od 2 000 Kč",

  serviceType: [
    "Překreslení projektové dokumentace",
    "Digitalizace výkresů",
    "Převod PDF do DWG",
    "AutoCAD",
    "DWG",
    "DXF",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="cs"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#050816] text-white">

        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />

        {children}

        <CookieConsentComponent />
      </body>
    </html>
  );
}