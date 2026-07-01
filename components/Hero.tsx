import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">

      {/* Pozadí */}
      <Image
        src="/images/hero.png"
        alt="Rodinný dům"
        fill
        priority
        className="object-cover"
      />

      {/* Přechod */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#050816]/80 via-[#050816]/35 to-transparent"></div>

      {/* Obsah */}
      <div className="relative z-10 h-full flex items-center pl-16 lg:pl-24">

        <div className="max-w-3xl">

          <h1 className="text-7xl lg:text-8xl font-black leading-[0.95]">

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

          <p className="mt-10 text-2xl text-slate-200 leading-10 max-w-2xl">

            Převádíme papírové stavební výkresy,
            PDF dokumentaci i staré projekty rodinných domů
            do moderní digitální podoby.

          </p>

          <div className="mt-12 flex flex-wrap gap-6">

            <a
              href="#kontakt"
              className="rounded-2xl bg-cyan-500 px-10 py-5 text-xl font-bold transition hover:bg-cyan-400 shadow-2xl shadow-cyan-500/30"
            >
              Objednat překreslení
            </a>

            <a
              href="#galerie"
              className="rounded-2xl border border-white/20 bg-white/10 px-10 py-5 text-xl font-semibold backdrop-blur-xl transition hover:bg-white/20"
            >
              Ukázky realizací
            </a>

          </div>

          <div className="mt-20 grid grid-cols-2 gap-12">
                        <div>
              <h3 className="text-5xl font-black text-cyan-400">
                od 2 000 Kč
              </h3>

              <p className="mt-3 text-xl text-slate-300">
                minimální cena zakázky
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-black text-cyan-400">
                CAD
              </h3>

              <p className="mt-3 text-xl text-slate-300">
                profesionální zpracování
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}