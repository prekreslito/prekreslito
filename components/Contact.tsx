export default function poptavka() {
  return (
    <section
      id="poptavka"
      className="max-w-7xl mx-auto px-8 py-32"
    >
      <div className="text-center">

      <span className="text-cyan-400 uppercase tracking-[4px]">
      Poptávka
      </span>

        <h2 className="mt-6 text-5xl lg:text-6xl font-black">
          Nezávazná poptávka
        </h2>

        <p className="mt-6 text-slate-400 text-xl">
          Vyplňte formulář a připravím vám cenovou nabídku zdarma.
        </p>

      </div>

      {/* Výhody */}

      <div className="mt-14 mx-auto max-w-2xl rounded-[32px] border border-cyan-500/20 bg-cyan-500/10 backdrop-blur-xl p-8 shadow-xl">

        <div className="flex justify-center items-center gap-20">

          <div className="text-center">

            <div className="text-5xl">
              💰
            </div>

            <h3 className="mt-4 text-lg font-bold">
              Cenová nabídka zdarma
            </h3>

          </div>

          <div className="text-center">

            <div className="text-5xl">
              ✅
            </div>

            <h3 className="mt-4 text-lg font-bold">
              Neplatíte předem
            </h3>

          </div>

        </div>

      </div>

      {/* Formulář */}

      <form className="mt-16 mx-auto max-w-4xl space-y-6">
              <input
          type="text"
          placeholder="Jméno *"
          className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-lg text-white placeholder:text-slate-500 outline-none transition focus:border-cyan-400"
          required
        />

        <input
          type="email"
          placeholder="E-mail *"
          className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-lg text-white placeholder:text-slate-500 outline-none transition focus:border-cyan-400"
          required
        />

        <input
          type="tel"
          placeholder="Telefon (volitelné)"
          className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-lg text-white placeholder:text-slate-500 outline-none transition focus:border-cyan-400"
        />

        <select
          defaultValue=""
          className="w-full rounded-2xl border border-white/10 bg-[#111827] px-6 py-5 text-lg text-white outline-none transition focus:border-cyan-400"
          required
        >
          <option value="" disabled>
            Vyberte typ projektu
          </option>

          <option value="Rodinný dům">
            Rodinný dům
          </option>

          <option value="Chata">
            Chata
          </option>

          <option value="Garáž">
            Garáž
          </option>

          <option value="Jiný projekt">
            Jiný projekt
          </option>
        </select>
                {/* Nahrání souboru */}

        <label className="block cursor-pointer rounded-3xl border-2 border-dashed border-cyan-500/30 bg-white/5 p-10 text-center transition hover:border-cyan-400 hover:bg-cyan-500/10">

          <div className="text-6xl">
            📄
          </div>

          <h3 className="mt-6 text-2xl font-bold">
            Nahrajte projekt
          </h3>

          <p className="mt-4 text-slate-400">
            Klikněte sem nebo přetáhněte soubor.
          </p>

          <p className="mt-2 text-sm text-slate-500">
            PDF • DWG • JPG • PNG
          </p>

          <input
            type="file"
            className="hidden"
            accept=".pdf,.dwg,.jpg,.jpeg,.png"
          />

        </label>

        <textarea
          rows={6}
          placeholder="Stručně popište, co potřebujete překreslit..."
          className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-lg text-white placeholder:text-slate-500 outline-none transition focus:border-cyan-400 resize-none"
        ></textarea>

        <label className="flex items-start gap-3">

          <input
            type="checkbox"
            required
            className="mt-1 accent-cyan-500"
          />

          <span className="text-slate-400 leading-7">
            Souhlasím se zpracováním osobních údajů za účelem vyřízení poptávky.
          </span>

        </label>

        <button
          type="submit"
          className="w-full rounded-2xl bg-cyan-500 py-5 text-xl font-bold transition duration-300 hover:bg-cyan-400 hover:scale-[1.02]"
        >
          Odeslat nezávaznou poptávku
        </button>

      </form>

    </section>
  );
}