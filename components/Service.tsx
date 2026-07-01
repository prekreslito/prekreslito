export default function Services() {
  return (
    <section
      id="sluzby"
      className="max-w-7xl mx-auto px-8 py-32"
    >
      <div className="text-center">

        <span className="text-cyan-400 uppercase tracking-[4px]">
          Naše služby
        </span>

        <h2 className="mt-6 text-5xl lg:text-6xl font-black">
          Co pro vás dokážeme zajistit?
        </h2>

        <p className="mt-6 text-slate-400 text-xl max-w-3xl mx-auto leading-9">
          Zaměřujeme se na digitalizaci projektové dokumentace rodinných domů
          a převod papírových výkresů do moderní elektronické podoby.
        </p>

      </div>

      <div className="grid lg:grid-cols-3 gap-8 mt-20">

        <div className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-10 transition duration-300 hover:-translate-y-3 hover:border-cyan-500">

          <div className="text-6xl">📐</div>

          <h3 className="mt-8 text-3xl font-black">
            Překreslení do DWG
          </h3>

          <p className="mt-6 leading-8 text-slate-400">
            Překreslení papírových výkresů a PDF dokumentace do formátu DWG
            s důrazem na přesnost a přehlednost.
          </p>

        </div>

        <div className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-10 transition duration-300 hover:-translate-y-3 hover:border-cyan-500">

          <div className="text-6xl">🏠</div>

          <h3 className="mt-8 text-3xl font-black">
            Rodinné domy
          </h3>

          <p className="mt-6 leading-8 text-slate-400">
            Specializujeme se na překreslování projektové dokumentace
            rodinných domů všech velikostí.
          </p>

        </div>

        <div className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-10 transition duration-300 hover:-translate-y-3 hover:border-cyan-500">

          <div className="text-6xl">📄</div>

          <h3 className="mt-8 text-3xl font-black">
            Digitalizace projektů
          </h3>

          <p className="mt-6 leading-8 text-slate-400">
            Staré projektové dokumentace převedeme do elektronické podoby,
            aby byly připravené pro další práci.
          </p>

        </div>

      </div>

    </section>
  );
}