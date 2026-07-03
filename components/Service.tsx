export default function Services() {
  return (
    <section
      id="sluzby"
      className="mx-auto max-w-7xl px-6 py-20 sm:px-8 md:py-24 lg:py-32"
    >
      <div className="text-center">

        <span className="text-sm uppercase tracking-[4px] text-cyan-400 sm:text-base">
          Naše služby
        </span>

        <h2 className="mt-5 text-4xl font-black sm:text-5xl lg:text-6xl">
          Co pro vás dokážeme zajistit?
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400 sm:text-xl sm:leading-9">
          Zaměřujeme se na digitalizaci projektové dokumentace rodinných domů
          a převod papírových výkresů do moderní elektronické podoby.
        </p>

      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-8">

        <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-3 hover:border-cyan-500 hover:shadow-[0_0_35px_rgba(6,182,212,0.18)]">

          <div className="text-5xl sm:text-6xl">
            📐
          </div>

          <h3 className="mt-6 text-2xl font-black sm:mt-8 sm:text-3xl">
            Překreslení do DWG
          </h3>

          <p className="mt-5 text-base leading-8 text-slate-400 sm:mt-6">
            Překreslení papírových výkresů a PDF dokumentace do formátu DWG
            s důrazem na přesnost a přehlednost.
          </p>

        </div>
                <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-3 hover:border-cyan-500 hover:shadow-[0_0_35px_rgba(6,182,212,0.18)]">

          <div className="text-5xl sm:text-6xl">
            🏠
          </div>

          <h3 className="mt-6 text-2xl font-black sm:mt-8 sm:text-3xl">
            Rodinné domy
          </h3>

          <p className="mt-5 text-base leading-8 text-slate-400 sm:mt-6">
            Specializujeme se na překreslování projektové dokumentace
            rodinných domů všech velikostí.
          </p>

        </div>

        <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-3 hover:border-cyan-500 hover:shadow-[0_0_35px_rgba(6,182,212,0.18)]">

          <div className="text-5xl sm:text-6xl">
            📄
          </div>

          <h3 className="mt-6 text-2xl font-black sm:mt-8 sm:text-3xl">
            Digitalizace projektů
          </h3>

          <p className="mt-5 text-base leading-8 text-slate-400 sm:mt-6">
            Staré projektové dokumentace převedeme do elektronické podoby,
            aby byly připravené pro další práci.
          </p>

        </div>

      </div>

    </section>
  );
}