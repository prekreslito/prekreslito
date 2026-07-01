export default function Process() {
  return (
    <section
      id="process"
      className="scroll-mt-32 max-w-7xl mx-auto px-8 py-32"
    >
      <div className="text-center">

        <span className="text-cyan-400 uppercase tracking-[4px]">
          Jednoduchý proces
        </span>

        <h2 className="mt-6 text-5xl lg:text-6xl font-black">
          Jak probíhá spolupráce?
        </h2>

        <p className="mt-6 text-slate-400 text-xl max-w-3xl mx-auto leading-9">
          Celý proces je jednoduchý, rychlý a přehledný.
        </p>

        <div className="mt-10 mx-auto max-w-4xl rounded-2xl border border-cyan-500/30 bg-cyan-500/10 px-8 py-6 backdrop-blur-xl">
          <p className="text-xl font-semibold text-cyan-300">
            ✅ Neplatíte předem. Nejprve vám zašleme náhled hotového projektu ke kontrole.
            Teprve po vašem schválení a přijetí platby obdržíte finální soubory
            ve formátu DWG nebo PDF.
          </p>
        </div>

      </div>

      <div className="grid lg:grid-cols-5 gap-6 mt-20">

        <div className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-8 transition duration-300 hover:-translate-y-3 hover:border-cyan-500">

          <div className="text-5xl">📩</div>

          <h3 className="mt-6 text-2xl font-black">
            1. Odešlete projekt
          </h3>

          <p className="mt-5 leading-8 text-slate-400">
            Zašlete projekt rodinného domu,který chcete převézt do digitální formy,
            jako fotografii nebo naskenovaný výkres. I s návrhem ceny zakázky.
          </p>

        </div>

        <div className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-8 transition duration-300 hover:-translate-y-3 hover:border-cyan-500">

          <div className="text-5xl">💰</div>

          <h3 className="mt-6 text-2xl font-black">
            2. Cenová nabídka
          </h3>

          <p className="mt-5 leading-8 text-slate-400">
            Projekt zkontrolujeme a odsouhlasíme nebo navrhneme jinou cenovou nabídku
            společně s odhadovaným termínem dokončení.
          </p>

        </div>

        <div className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-8 transition duration-300 hover:-translate-y-3 hover:border-cyan-500">

          <div className="text-5xl">👀</div>

          <h3 className="mt-6 text-2xl font-black">
            3. Náhled projektu
          </h3>

          <p className="mt-5 leading-8 text-slate-400">
            Po dokončení vám zašleme náhled překresleného projektu s vodoznakem ke kontrole,
            abyste si mohli ověřit kvalitu zpracování.
          </p>

        </div>

        <div className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-8 transition duration-300 hover:-translate-y-3 hover:border-cyan-500">

          <div className="text-5xl">💳</div>

          <h3 className="mt-6 text-2xl font-black">
            4. Platba
          </h3>

          <p className="mt-5 leading-8 text-slate-400">
            Pokud budete spokojeni, provedete platbu podle domluvené cenové
            nabídky.
          </p>

        </div>

        <div className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-8 transition duration-300 hover:-translate-y-3 hover:border-cyan-500">

          <div className="text-5xl">✅</div>

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