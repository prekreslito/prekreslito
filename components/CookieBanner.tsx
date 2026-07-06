"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");

    if (!consent) {
      setVisible(true);
    }
  }, []);

  function acceptAll() {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  }

  function acceptNecessary() {
    localStorage.setItem("cookie-consent", "necessary");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 z-[9999] w-[95%] max-w-3xl -translate-x-1/2 animate-[fadeInUp_.35s_ease] rounded-3xl border border-white/10 bg-[#0b1120]/95 p-6 shadow-2xl backdrop-blur-xl">

      <div className="flex flex-col gap-5">

        <div>

          <h2 className="text-2xl font-black text-white">
            🍪 Používáme cookies
          </h2>

          <p className="mt-3 leading-7 text-slate-300">
            Používáme pouze nezbytné cookies pro správné fungování webu.
            Po vašem souhlasu můžeme v budoucnu používat také analytické
            cookies pro zlepšování našich služeb.
          </p>

          <Link
            href="/cookies"
            className="mt-3 inline-block text-cyan-400 transition hover:text-cyan-300"
          >
            Zásady používání cookies →
          </Link>

        </div>
                <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">

          <button
            onClick={acceptNecessary}
            className="rounded-xl border border-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            Pouze nezbytné
          </button>

          <button
            onClick={acceptAll}
            className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-white transition hover:bg-cyan-400"
          >
            Přijmout vše
          </button>

        </div>

      </div>

    </div>
  );
}