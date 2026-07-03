"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-[#0b1120]/70 backdrop-blur-xl">

      <div className="mx-auto flex max-w-[1800px] items-center justify-between px-24 py-4 lg:px-24 lg:py-5">

        {/* Logo */}

        <Link
          href="/"
          className="ml-0 lg:ml-24 text-3xl font-black tracking-tight transition hover:opacity-90 lg:text-4xl"
        >
          Překreslito
          <span className="text-cyan-400">.cz</span>
        </Link>

        {/* Desktop menu */}

        <nav className="hidden items-center gap-12 text-lg font-semibold lg:flex">

          <Link href="/#sluzby" className="transition hover:text-cyan-400">
            Služby
          </Link>

          <Link href="/#process" className="transition hover:text-cyan-400">
            Jak to probíhá
          </Link>

          <Link href="/#galerie" className="transition hover:text-cyan-400">
            Galerie
          </Link>

          <Link href="/#cenik" className="transition hover:text-cyan-400">
            Ceník
          </Link>

          <Link href="/#poptavka" className="transition hover:text-cyan-400">
            Poptávka
          </Link>

          <Link href="/#kontakt" className="transition hover:text-cyan-400">
            Kontakt
          </Link>

        </nav>

        {/* Hamburger */}

        <button
          onClick={() => setMenuOpen(true)}
          className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition hover:bg-white/10 lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

      </div>
            {/* Tmavé pozadí */}

      {menuOpen && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm lg:hidden"
        />
      )}

      {/* Mobilní menu */}

      <div
        className={`fixed right-0 top-0 h-screen w-80 max-w-[85vw] bg-[#0b1120] shadow-2xl transition-transform duration-300 lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >

        <div className="flex items-center justify-between border-b border-white/10 p-6">

          <Link
            href="/"
            onClick={closeMenu}
            className="text-2xl font-black tracking-tight"
          >
            Překreslito
            <span className="text-cyan-400">.cz</span>
          </Link>

          <button
            onClick={closeMenu}
            className="rounded-xl p-2 transition hover:bg-white/10"
          >
            ✕
          </button>

        </div>

        <nav className="flex flex-col p-6 text-xl font-semibold">

          <Link
            href="/#sluzby"
            onClick={closeMenu}
            className="rounded-xl px-4 py-4 transition hover:bg-cyan-500/10 hover:text-cyan-400"
          >
            Služby
          </Link>

          <Link
            href="/#process"
            onClick={closeMenu}
            className="rounded-xl px-4 py-4 transition hover:bg-cyan-500/10 hover:text-cyan-400"
          >
            Jak to probíhá
          </Link>

          <Link
            href="/#galerie"
            onClick={closeMenu}
            className="rounded-xl px-4 py-4 transition hover:bg-cyan-500/10 hover:text-cyan-400"
          >
            Galerie
          </Link>

          <Link
            href="/#cenik"
            onClick={closeMenu}
            className="rounded-xl px-4 py-4 transition hover:bg-cyan-500/10 hover:text-cyan-400"
          >
            Ceník
          </Link>

          <Link
            href="/#poptavka"
            onClick={closeMenu}
            className="rounded-xl px-4 py-4 transition hover:bg-cyan-500/10 hover:text-cyan-400"
          >
            Poptávka
          </Link>

          <Link
            href="/#kontakt"
            onClick={closeMenu}
            className="rounded-xl px-4 py-4 transition hover:bg-cyan-500/10 hover:text-cyan-400"
          >
            Kontakt
          </Link>

        </nav>

      </div>

    </header>
  );
}