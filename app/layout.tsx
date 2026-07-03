import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
    "překreslení projektu",
    "překreslení výkresů",
    "AutoCAD",
    "DWG",
    "projekt rodinného domu",
    "digitalizace projektů",
    "stavební dokumentace",
    "CAD",
    "PDF do DWG",
    "Překreslito",
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
      "Profesionální překreslování projektové dokumentace rodinných domů.",
    url: "https://prekreslito.cz",
    siteName: "Překreslito.cz",
    locale: "cs_CZ",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Překreslito.cz",
    description:
      "Profesionální překreslování projektové dokumentace rodinných domů.",
  },

  category: "Construction",
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
        {children}
      </body>
    </html>
  );
}