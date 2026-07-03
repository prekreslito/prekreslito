export default function Process() {
  return (
    <section
      id="process"
      className="scroll-mt-32 mx-auto max-w-7xl px-6 py-20 sm:px-8 md:py-24 lg:py-32"
    >
      <div className="text-center">

        <span className="text-sm uppercase tracking-[4px] text-cyan-400 sm:text-base">
          Jednoduchý proces
        </span>

        <h2 className="mt-5 text-4xl font-black sm:text-5xl lg:text-6xl">
          Jak probíhá spolupráce?
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400 sm:text-xl sm:leading-9">
          Celý proces je jednoduchý, rychlý a přehledný.
        </p>

        <div className="mx-auto mt-10 max-w-4xl rounded-3xl border border-cyan-500/30 bg-cyan-500/10 px-6 py-6 backdrop-blur-xl sm:px-8">

          <p className="text-lg font-semibold leading-8 text-cyan-300 sm:text-xl">

            ✅ Neplatíte předem. Nejprve vám zašleme náhled hotového projektu ke kontrole.

            <br className="hidden sm:block" />

            Teprve po vašem schválení a přijetí platby obdržíte finální soubory
            ve formátu DWG nebo PDF.

          </p>

        </div>

      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-5 lg:mt-20">

        <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-3 hover:border-cyan-500 hover:shadow-[0_0_35px_rgba(6,182,212,0.18)]">

          <div className="text-5xl">
            📩
          </div>

          <h3 className="mt-6 text-2xl font-black">
            1. Odešlete projekt
          </h3>

          <p className="mt-5 leading-8 text-slate-400">
            Zašlete projekt rodinného domu, který chcete převést do digitální formy,
            jako fotografii nebo naskenovaný výkres. Připojit můžete i svůj návrh ceny zakázky.
          </p>

        </div>

        <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-3 hover:border-cyan-500 hover:shadow-[0_0_35px_rgba(6,182,212,0.18)]">

          <div className="text-5xl">
            💰
          </div>

          <h3 className="mt-6 text-2xl font-black">
            2. Cenová nabídka
          </h3>

          <p className="mt-5 leading-8 text-slate-400">
            Projekt zkontrolujeme a odsouhlasíme nebo navrhneme jinou cenovou nabídku
            společně s odhadovaným termínem dokončení.
          </p>

        </div>
                <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-3 hover:border-cyan-500 hover:shadow-[0_0_35px_rgba(6,182,212,0.18)]">

          <div className="text-5xl">
            👀
          </div>

          <h3 className="mt-6 text-2xl font-black">
            3. Náhled projektu
          </h3>

          <p className="mt-5 leading-8 text-slate-400">
            Po dokončení vám zašleme náhled překresleného projektu s vodoznakem ke kontrole,
            abyste si mohli ověřit kvalitu zpracování.
          </p>

        </div>

        <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-3 hover:border-cyan-500 hover:shadow-[0_0_35px_rgba(6,182,212,0.18)]">

          <div className="text-5xl">
            💳
          </div>

          <h3 className="mt-6 text-2xl font-black">
            4. Platba
          </h3>

          <p className="mt-5 leading-8 text-slate-400">
            Pokud budete spokojeni, provedete platbu podle domluvené cenové nabídky.
          </p>

        </div>

        <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-3 hover:border-cyan-500 hover:shadow-[0_0_35px_rgba(6,182,212,0.18)]">

          <div className="text-5xl">
            ✅
          </div>

          <h3 className="mt-6 text-2xl font-black">
            5. Předání projektu
          </h3>

          <p className="mt-5 leading-8 text-slate-400">
            Po přijetí platby obdržíte kompletní projekt ve formátu DWG, PDF, PLA nebo STL,
            připravený k dalšímu použití.
          </p>

        </div>

      </div>

    </section>
  );
}