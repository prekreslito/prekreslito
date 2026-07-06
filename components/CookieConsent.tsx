"use client";

import { useEffect } from "react";
import * as CookieConsent from "vanilla-cookieconsent";
import "vanilla-cookieconsent/dist/cookieconsent.css";

export default function CookieConsentComponent() {
  useEffect(() => {
    CookieConsent.run({
      guiOptions: {
        consentModal: {
          layout: "box",
          position: "bottom center",
          equalWeightButtons: false,
          flipButtons: false,
        },

        preferencesModal: {
          layout: "box",
          equalWeightButtons: false,
          flipButtons: false,
        },
      },

      categories: {
        necessary: {
          enabled: true,
          readOnly: true,
        },

        analytics: {},

        marketing: {},
      },

      language: {
        default: "cs",

        translations: {
          cs: {
            consentModal: {
              title: "🍪 Používáme cookies",

              description:
                "Používáme cookies pro správné fungování webu. Pouze s vaším souhlasem používáme analytické cookies ke zlepšování našich služeb.",

              acceptAllBtn: "Přijmout vše",

              acceptNecessaryBtn: "Pouze nezbytné",

              showPreferencesBtn: "Nastavení cookies",
            },

            preferencesModal: {
              title: "Nastavení cookies",

              acceptAllBtn: "Přijmout vše",

              acceptNecessaryBtn: "Pouze nezbytné",

              savePreferencesBtn: "Uložit nastavení",

              closeIconLabel: "Zavřít",

              sections: [
                {
                  title: "Používání cookies",

                  description:
                    "Cookies zajišťují správné fungování webu. S vaším souhlasem můžeme používat anonymní analytické cookies ke zlepšování našich služeb.",
                },

                {
                  title: "Nezbytné cookies",

                  description:
                    "Tyto cookies jsou nezbytné pro správné fungování webových stránek a nelze je vypnout.",

                  linkedCategory: "necessary",
                },

                {
                  title: "Analytické cookies",

                  description:
                    "Pomáhají nám anonymně měřit návštěvnost a zlepšovat obsah i funkčnost webu.",

                  linkedCategory: "analytics",
                },

                {
                  title: "Marketingové cookies",

                  description:
                    "Momentálně marketingové cookies nepoužíváme. Tato možnost je připravena pouze pro případ budoucího rozšíření webu.",

                  linkedCategory: "marketing",
                },

                {
                  title: "Právní informace",

                  description:
                    'Podrobnosti naleznete na stránce <a href="/cookies">Zásady používání cookies</a>.',
                },
              ],
                          },
          },
        },
      },

      onFirstConsent: ({ cookie }) => {
        console.log("První souhlas:", cookie.categories);

        if (cookie.categories.includes("analytics")) {
          console.log("✅ Analytické cookies povoleny");

          // Sem později přidáme Google Analytics
          // Např. window.gtag(...)
        }

        if (cookie.categories.includes("marketing")) {
          console.log("✅ Marketingové cookies povoleny");

          // Sem později přidáme Meta Pixel apod.
        }
      },

      onConsent: ({ cookie }) => {
        console.log("Aktuální souhlas:", cookie.categories);

        if (cookie.categories.includes("analytics")) {
          console.log("Analytické cookies aktivní");
        }

        if (cookie.categories.includes("marketing")) {
          console.log("Marketingové cookies aktivní");
        }
      },

      onChange: ({ changedCategories, cookie }) => {
        console.log("Nastavení cookies bylo změněno.");

        if (changedCategories.includes("analytics")) {
          if (cookie.categories.includes("analytics")) {
            console.log("Analytické cookies zapnuty");
          } else {
            console.log("Analytické cookies vypnuty");
          }
        }

        if (changedCategories.includes("marketing")) {
          if (cookie.categories.includes("marketing")) {
            console.log("Marketingové cookies zapnuty");
          } else {
            console.log("Marketingové cookies vypnuty");
          }
        }
      },
    });
  }, []);

  return null;
}