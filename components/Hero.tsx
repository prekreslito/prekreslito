import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* Pozadí */}

      <Image
        src="/images/hero.png"
        alt="Rodinný dům"
        fill
        priority
        className="object-cover"
      />

      {/* Přechod */}

      <div className="absolute inset-0 bg-gradient-to-r from-[#050816]/90 via-[#050816]/55 to-[#050816]/20 lg:from-[#050816]/80 lg:via-[#050816]/35 lg:to-transparent"></div>

      {/* Obsah */}

      <div className="relative z-10 flex min-h-screen items-center px-6 pt-28 pb-16 sm:px-10 md:px-14 lg:px-24">

        <div className="max-w-3xl">

          <h1 className="text-5xl font-black leading-tight sm:text-6xl md:text-7xl lg:text-8xl lg:leading-[0.95]">

            Překreslíme

            <br />

            <span className="text-cyan-400">
              váš projekt
            </span>

            <br />

            do digitální

            <br />

            podoby.

          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl md:text-2xl md:leading-10">

            Převádíme papírové stavební výkresy,
            PDF dokumentaci i staré projekty rodinných domů
            do moderní digitální podoby.

          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:gap-6">

            <a
              href="#kontakt"
              className="w-full rounded-2xl bg-cyan-500 px-8 py-4 text-center text-lg font-bold shadow-2xl shadow-cyan-500/30 transition hover:bg-cyan-400 sm:w-auto sm:px-10 sm:py-5 sm:text-xl"
            >
              Objednat překreslení
            </a>

            <a
              href="#galerie"
              className="w-full rounded-2xl border border-white/20 bg-white/10 px-8 py-4 text-center text-lg font-semibold backdrop-blur-xl transition hover:bg-white/20 sm:w-auto sm:px-10 sm:py-5 sm:text-xl"
            >
              Ukázky realizací
            </a>

          </div>
                    <div className="mt-14 grid grid-cols-1 gap-8 border-t border-white/10 pt-10 sm:grid-cols-2 sm:gap-12 lg:mt-20">

            <div className="text-center sm:text-left">

              <h3 className="text-4xl font-black text-cyan-400 sm:text-5xl">
                od 2 000 Kč
              </h3>

              <p className="mt-3 text-lg text-slate-300 sm:text-xl">
                minimální cena zakázky
              </p>

            </div>

            <div className="text-center sm:text-left">

              <h3 className="text-4xl font-black text-cyan-400 sm:text-5xl">
                CAD
              </h3>

              <p className="mt-3 text-lg text-slate-300 sm:text-xl">
                profesionální zpracování
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}