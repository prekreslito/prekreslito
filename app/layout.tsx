import type { Metadata } from "next";
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
  metadataBase: new URL("https://prekreslito.cz"),

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
    url: "https://prekreslito.cz",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Překreslito.cz",
    url: "https://prekreslito.cz",
    description:
      "Profesionální překreslování projektové dokumentace rodinných domů do digitální podoby.",
    areaServed: "CZ",
    address: {
      "@type": "PostalAddress",
      addressCountry: "CZ",
    },
    email: "info@prekreslito.cz",
    priceRange: "Od 2 000 Kč",
    serviceType: [
      "Překreslení projektové dokumentace",
      "Digitalizace výkresů",
      "Převod PDF do DWG",
      "AutoCAD",
    ],
  };

  return (
    <html
      lang="cs"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#050816] text-white">
        <script
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