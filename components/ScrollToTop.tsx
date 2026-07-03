"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY;

      const height =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const percent =
        height > 0 ? (scrollTop / height) * 100 : 0;

      setProgress(percent);

      setVisible(scrollTop > 400);
    }

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  const radius = 26;
  const circumference = 2 * Math.PI * radius;

  const offset =
    circumference -
    (progress / 100) * circumference;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Nahoru"
      className={`fixed bottom-6 right-6 z-50 h-16 w-16 transition-all duration-300

      ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-8 opacity-0"
      }

      hover:scale-110`}
    >
          <svg
        className="absolute inset-0 h-full w-full -rotate-90"
        viewBox="0 0 60 60"
      >
        {/* Pozadí kruhu */}
        <circle
          cx="30"
          cy="30"
          r={radius}
          fill="none"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="4"
        />

        {/* Progress kruh */}
        <circle
          cx="30"
          cy="30"
          r={radius}
          fill="none"
          stroke="#22d3ee"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-all duration-200"
        />
      </svg>

      <div className="absolute inset-[6px] flex items-center justify-center rounded-full border border-cyan-400/20 bg-[#08111f]/90 backdrop-blur-xl shadow-[0_0_35px_rgba(34,211,238,0.30)] transition-all duration-300 hover:border-cyan-300 hover:shadow-[0_0_50px_rgba(34,211,238,0.55)]">

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-cyan-300 transition-transform duration-300 group-hover:-translate-y-0.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.7}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 15l7-7 7 7"
          />
        </svg>

      </div>

    </button>
  );
}