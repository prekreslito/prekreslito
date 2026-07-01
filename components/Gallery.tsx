export default function Gallery() {
  return (
    <section
      id="galerie"
      className="max-w-7xl mx-auto px-8 py-32"
    >
      <div className="text-center">

        <span className="text-cyan-400 uppercase tracking-[4px]">
          Portfolio
        </span>

        <h2 className="mt-6 text-5xl lg:text-6xl font-black">
          Ukázky mé práce
        </h2>

        <p className="mt-6 text-xl text-slate-400 max-w-3xl mx-auto leading-9">
          Momentálně svou službu teprve spouštíme, proto zde zatím nenajdete
          zakázky od klientů. Místo toho zde prezentuji své  výherní 
          soutěžní projekty, které ukazují kvalitu mé práce a způsob
          zpracování projektové dokumentace. Portfolio budu postupně
          rozšiřovat o dokončené zakázky.
        </p>

      </div>

      <div className="grid lg:grid-cols-2 gap-10 mt-20">

        {/* Vizualizace */}
        <div className="overflow-hidden rounded-[36px] border border-white/10 bg-white/5 backdrop-blur-xl hover:scale-[1.02] duration-300">

          <img
            src="/images/vizualizace.jpg"
            alt="Vizualizace rodinného domu"
            className="w-full h-[420px] object-cover"
          />

          <div className="p-10">

            <h3 className="text-3xl font-black">
              Vizualizace domu
            </h3>

            <p className="mt-5 text-slate-400 leading-8">
              Fotorealistická vizualizace soutěžního projektu rodinného domu.
            </p>

          </div>

        </div>

        {/* Půdorys */}
        <div className="overflow-hidden rounded-[36px] border border-white/10 bg-white/5 backdrop-blur-xl hover:scale-[1.02] duration-300">

          <img
            src="/images/pudorys 1.np.jpg"
            alt="Půdorys 1. NP"
            className="w-full h-[420px] object-cover"
          />

          <div className="p-10">

            <h3 className="text-3xl font-black">
              Půdorys 1. NP
            </h3>

            <p className="mt-5 text-slate-400 leading-8">
              Přesně zpracovaný půdorys rodinného domu vytvořený v AutoCADu.
            </p>

          </div>

        </div>

        {/* Řez */}
        <div className="overflow-hidden rounded-[36px] border border-white/10 bg-white/5 backdrop-blur-xl hover:scale-[1.02] duration-300">

          <img
            src="/images/řez a-a.jpg"
            alt="Řez stavbou"
            className="w-full h-[420px] object-cover"
          />

          <div className="p-10">

            <h3 className="text-3xl font-black">
              Řez stavbou
            </h3>

            <p className="mt-5 text-slate-400 leading-8">
              Ukázka konstrukčního řezu s důrazem na přehlednost a přesnost.
            </p>

          </div>

        </div>

        {/* Detail */}
        <div className="overflow-hidden rounded-[36px] border border-white/10 bg-white/5 backdrop-blur-xl hover:scale-[1.02] duration-300">

          <img
            src="/images/detail.png"
            alt="Stavební detail"
            className="w-full h-[420px] object-cover"
          />

          <div className="p-10">

            <h3 className="text-3xl font-black">
              Stavební detail
            </h3>

            <p className="mt-5 text-slate-400 leading-8">
              Vybraný detail projektové dokumentace zpracovaný v AutoCADu.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}