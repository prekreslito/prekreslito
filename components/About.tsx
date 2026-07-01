export default function About() {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-8 py-32"
    >
      <div className="grid lg:grid-cols-2 gap-20 items-center">

        {/* Levá část */}
        <div>

          <span className="text-cyan-400 uppercase tracking-[4px]">
            O mně
          </span>

          <h2 className="mt-6 text-5xl lg:text-6xl font-black">
            Kdo stojí za Překreslito.cz?
          </h2>

          <div className="mt-10 space-y-8 text-slate-300 text-xl leading-10">

            <p>
              <strong>Jmenuji se Jan Klesnil a jsem student stavební průmyslové školy.</strong>
            </p>

            <p>
              Již během studia jsem si našel zálibu v práci s projektovou dokumentací a digitálním překreslování rodinných domů. Specializuji se především na AutoCAD, ve kterém vytvářím přesnou a přehlednou výkresovou dokumentaci, překresluji staré projekty do digitální podoby a připravuji výstupy ve formátech DWG a PDF. Základní zkušenosti mám také s ArchiCADem, kde dokážu vytvořit 3D model stavby a exportovat jej například do formátu STL pro 3D tisk. Ke každé zakázce přistupuji individuálně s důrazem na kvalitu, přesnost a spokojenost zákazníka.
            </p>

            <p>
              NEJSEM autorizovaný projektant, a proto NEMOHU opatřit dokumentaci autorizačním razítkem. Nabízím však pečlivé a kvalitní překreslení projektů do digitální podoby za výrazně dostupnější cenu. V případě potřeby autorizace je nutné obrátit se na autorizovaného projektanta.
            </p>
          </div>

        </div>

        {/* Pravá část */}
        <div className="relative">

          <div className="absolute -inset-2 rounded-[40px] bg-cyan-500/10 blur-3xl"></div>

          <div className="relative rounded-[40px] border border-cyan-500/20 bg-gradient-to-br from-[#111827] to-[#0b1120] p-10 backdrop-blur-xl shadow-2xl">

            {/* Hlavička */}
            <div className="flex items-center justify-between">

              <div>

                <h3 className="text-3xl font-black">
                  Jan Klesnil
                </h3>

                <p className="mt-2 text-slate-400">
                  Student stavební průmyslové školy
                </p>

              </div>

              <div className="flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2">

                <div className="h-2.5 w-2.5 rounded-full bg-green-400 animate-pulse"></div>

                <span className="text-sm text-green-300">
                  Přijímám zakázky
                </span>

              </div>

            </div>

            <div className="my-10 h-px bg-white/10"></div>

            <div className="grid grid-cols-2 gap-5">

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

                <div className="text-sm uppercase tracking-wider text-slate-400">
                  Specializace
                </div>

                <div className="mt-3 text-xl font-bold">
                  Rodinné domy
                </div>

              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

                <div className="text-sm uppercase tracking-wider text-slate-400">
                  Software
                </div>

                <div className="mt-3 text-xl font-bold">
                  AutoCAD  ArchiCAD
                </div>

              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

                <div className="text-sm uppercase tracking-wider text-slate-400">
                  Úspěch
                </div>

                <div className="mt-3 text-xl font-bold">
                  🏆 1. místo
                </div>

                <p className="mt-2 text-slate-400 text-sm">
                  Tondach (Wienerberger)
                </p>

              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

                <div className="text-sm uppercase tracking-wider text-slate-400">
                  Úspěch
                </div>

                <div className="mt-3 text-xl font-bold">
                  🥈 2. místo
                </div>

                <p className="mt-2 text-slate-400 text-sm">
                  Dektalent
                </p>

              </div>

            </div>

            <div className="mt-8 rounded-3xl border border-cyan-500/20 bg-cyan-500/10 p-6">

              <div className="text-lg font-bold">
                Zaměření
              </div>

              <p className="mt-3 leading-8 text-slate-300">
                Překreslování projektové dokumentace rodinných domů
                do digitální podoby s důrazem na přesnost,
                přehlednost a kvalitní zpracování.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}