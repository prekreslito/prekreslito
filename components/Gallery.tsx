export default function Gallery() {
  return (
    <section
      id="galerie"
      className="mx-auto max-w-7xl px-6 py-20 sm:px-8 md:py-24 lg:py-32"
    >
      <div className="text-center">

        <span className="text-sm uppercase tracking-[4px] text-cyan-400 sm:text-base">
          Portfolio
        </span>

        <h2 className="mt-5 text-4xl font-black sm:text-5xl lg:text-6xl">
          Ukázky mé práce
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400 sm:text-xl sm:leading-9">
          Momentálně svou službu teprve spouštíme, proto zde zatím nenajdete
          zakázky od klientů. Místo toho zde prezentuji své výherní
          soutěžní projekty, které ukazují kvalitu mé práce a způsob
          zpracování projektové dokumentace. Portfolio budu postupně
          rozšiřovat o dokončené zakázky.
        </p>

      </div>

      <div className="mt-14 grid gap-8 md:grid-cols-2 lg:mt-20 lg:gap-10">

        {/* Vizualizace */}

        <div className="group overflow-hidden rounded-[36px] border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500 hover:shadow-[0_0_35px_rgba(6,182,212,0.18)]">

          <div className="overflow-hidden">

            <img
              src="/images/vizualizace.jpg"
              alt="Vizualizace rodinného domu"
              className="h-64 w-full object-cover transition duration-500 group-hover:scale-110 sm:h-80 lg:h-[420px]"
            />

          </div>

          <div className="p-8 sm:p-10">

            <h3 className="text-2xl font-black sm:text-3xl">
              Vizualizace domu
            </h3>

            <p className="mt-5 leading-8 text-slate-400">
              Fotorealistická vizualizace soutěžního projektu rodinného domu.
            </p>

          </div>

        </div>
                {/* Půdorys */}

        <div className="group overflow-hidden rounded-[36px] border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500 hover:shadow-[0_0_35px_rgba(6,182,212,0.18)]">

          <div className="overflow-hidden">

            <img
              src="/images/pudorys 1.np.jpg"
              alt="Půdorys 1. NP"
              className="h-64 w-full object-cover transition duration-500 group-hover:scale-110 sm:h-80 lg:h-[420px]"
            />

          </div>

          <div className="p-8 sm:p-10">

            <h3 className="text-2xl font-black sm:text-3xl">
              Půdorys 1. NP
            </h3>

            <p className="mt-5 leading-8 text-slate-400">
              Přesně zpracovaný půdorys rodinného domu vytvořený v AutoCADu.
            </p>

          </div>

        </div>

        {/* Řez */}

        <div className="group overflow-hidden rounded-[36px] border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500 hover:shadow-[0_0_35px_rgba(6,182,212,0.18)]">

          <div className="overflow-hidden">

            <img
              src="/images/řez a-a.jpg"
              alt="Řez stavbou"
              className="h-64 w-full object-cover transition duration-500 group-hover:scale-110 sm:h-80 lg:h-[420px]"
            />

          </div>

          <div className="p-8 sm:p-10">

            <h3 className="text-2xl font-black sm:text-3xl">
              Řez stavbou
            </h3>

            <p className="mt-5 leading-8 text-slate-400">
              Ukázka konstrukčního řezu s důrazem na přehlednost a přesnost.
            </p>

          </div>

        </div>

        {/* Detail */}

        <div className="group overflow-hidden rounded-[36px] border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500 hover:shadow-[0_0_35px_rgba(6,182,212,0.18)]">

          <div className="overflow-hidden">

            <img
              src="/images/detail.png"
              alt="Stavební detail"
              className="h-64 w-full object-cover transition duration-500 group-hover:scale-110 sm:h-80 lg:h-[420px]"
            />

          </div>

          <div className="p-8 sm:p-10">

            <h3 className="text-2xl font-black sm:text-3xl">
              Stavební detail
            </h3>

            <p className="mt-5 leading-8 text-slate-400">
              Vybraný detail projektové dokumentace zpracovaný v AutoCADu.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}