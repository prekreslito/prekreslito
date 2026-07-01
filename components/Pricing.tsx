export default function Pricing() {
  return (
    <section
      id="cenik"
      className="max-w-7xl mx-auto px-8 py-32"
    >
      <div className="text-center">

        <span className="text-cyan-400 uppercase tracking-[4px]">
          Ceník
        </span>

        <h2 className="mt-6 text-5xl lg:text-6xl font-black">
          Individuální nacenění
        </h2>

        <p className="mt-6 text-xl text-slate-400 max-w-3xl mx-auto leading-9">
          Každý projekt je jiný. Konečná cena závisí
          na rozsahu a složitosti dokumentace.
        </p>

      </div>

      <div className="max-w-3xl mx-auto mt-20">

        <div className="rounded-[40px] border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-blue-700/10 backdrop-blur-xl p-14">

          <h3 className="text-4xl font-black text-center">
            Minimální cena zakázky
          </h3>

          <div className="mt-10 text-center">

            <span className="text-7xl font-black text-cyan-400">
              od 2 000 Kč
            </span>

          </div>

          <div className="mt-14 space-y-6 text-xl text-slate-300">

            <div className="flex gap-4">
              <span className="text-cyan-400">✔</span>
              Individuální cenová nabídka
            </div>

            <div className="flex gap-4">
              <span className="text-cyan-400">✔</span>
              Překreslování rodinných domů
            </div>

            <div className="flex gap-4">
              <span className="text-cyan-400">✔</span>
              Přesné digitální zpracování
            </div>

            <div className="flex gap-4">
              <span className="text-cyan-400">✔</span>
              Výstup dle domluvy (PDF, DWG, STL, PLA)
            </div>

          </div>

          <div className="mt-16 flex justify-center">

            <a
              href="#kontakt"
              className="rounded-xl bg-cyan-500 hover:bg-cyan-400 transition px-10 py-5 text-xl font-bold shadow-xl shadow-cyan-500/20"
            >
              Nezávazně poptat zakázku
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}