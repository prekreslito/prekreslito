import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Překreslito.cz",
    short_name: "Překreslito",

    description:
      "Profesionální překreslování projektové dokumentace rodinných domů.",

    start_url: "/",

    display: "standalone",

    background_color: "#050816",

    theme_color: "#050816",

    lang: "cs",

    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },

      {
        src: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },

      {
        src: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
  };
}