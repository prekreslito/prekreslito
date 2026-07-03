export default function Pricing() {
  return (
    <section
      id="cenik"
      className="mx-auto max-w-7xl px-6 py-20 sm:px-8 md:py-24 lg:py-32"
    >
      <div className="text-center">

        <span className="text-sm uppercase tracking-[4px] text-cyan-400 sm:text-base">
          Ceník
        </span>

        <h2 className="mt-5 text-4xl font-black sm:text-5xl lg:text-6xl">
          Individuální nacenění
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400 sm:text-xl sm:leading-9">
          Každý projekt je jiný. Konečná cena závisí
          na rozsahu a složitosti dokumentace.
        </p>

      </div>

      <div className="mx-auto mt-14 max-w-3xl lg:mt-20">

        <div className="rounded-[40px] border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-blue-700/10 p-8 backdrop-blur-xl shadow-[0_0_35px_rgba(6,182,212,0.12)] sm:p-12 lg:p-14">

          <h3 className="text-center text-3xl font-black sm:text-4xl">
            Minimální cena zakázky
          </h3>

          <div className="mt-8 text-center sm:mt-10">

            <span className="text-5xl font-black text-cyan-400 sm:text-6xl lg:text-7xl">
              od 2&nbsp;000 Kč
            </span>

          </div>

          <div className="mt-10 space-y-5 text-lg text-slate-300 sm:mt-14 sm:text-xl">
          <div className="flex items-start gap-4">
              <span className="mt-1 text-cyan-400">✔</span>
              <span>Individuální cenová nabídka</span>
            </div>

            <div className="flex items-start gap-4">
              <span className="mt-1 text-cyan-400">✔</span>
              <span>Překreslování rodinných domů</span>
            </div>

            <div className="flex items-start gap-4">
              <span className="mt-1 text-cyan-400">✔</span>
              <span>Přesné digitální zpracování</span>
            </div>

            <div className="flex items-start gap-4">
              <span className="mt-1 text-cyan-400">✔</span>
              <span>Výstup dle domluvy (PDF, DWG, STL, PLA)</span>
            </div>

          </div>

          <div className="mt-12 flex justify-center sm:mt-16">

            <a
              href="#poptavka"
              className="w-full rounded-2xl bg-cyan-500 px-8 py-5 text-center text-lg font-bold shadow-xl shadow-cyan-500/20 transition-all hover:scale-[1.02] hover:bg-cyan-400 sm:w-auto sm:px-10 sm:text-xl"
            >
              Nezávazně poptat zakázku
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}