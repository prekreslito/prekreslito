import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CookiesPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#050816] text-white">

        {/* Hero */}

        <section className="mx-auto max-w-7xl px-8 pt-36 pb-20">

          <span className="uppercase tracking-[4px] text-cyan-400">
            Právní informace
          </span>

          <h1 className="mt-6 text-5xl font-black lg:text-7xl">
            Zásady používání
            <br />
            cookies
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-300">
            Na webových stránkách Překreslito.cz používáme pouze takové
            cookies, které jsou nezbytné pro správné fungování webu.
            V současné době nepoužíváme reklamní ani marketingové cookies.
          </p>

          <div className="mt-12 inline-flex rounded-2xl border border-cyan-500/30 bg-cyan-500/10 px-6 py-4 text-cyan-300">
            Poslední aktualizace: 3. července 2026
          </div>

        </section>

        <section className="mx-auto max-w-7xl px-8 pb-32">

          <div className="space-y-10">

            <div className="rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl">

              <h2 className="text-3xl font-black">
                Co jsou cookies?
              </h2>

              <p className="mt-6 leading-8 text-slate-300">
                Cookies jsou malé textové soubory, které se ukládají do vašeho
                zařízení při návštěvě webových stránek. Slouží například
                k zajištění správného fungování webu nebo zapamatování
                některých nastavení.
              </p>

            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl">

              <h2 className="text-3xl font-black">
                Jaké cookies používáme?
              </h2>

              <p className="mt-6 leading-8 text-slate-300">
                Překreslito.cz používá pouze nezbytné technické cookies,
                které umožňují správné fungování webových stránek.
              </p>

              <div className="mt-8 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-8">

                <h3 className="text-2xl font-bold">
                  Technické cookies
                </h3>

                <p className="mt-4 leading-8 text-slate-300">
                  Tyto cookies nelze vypnout, protože jsou nezbytné
                  pro správné fungování webových stránek.
                </p>

              </div>

            </div>
                        <div className="rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl">

              <h2 className="text-3xl font-black">
                Statistiky a marketingové cookies
              </h2>

              <p className="mt-6 leading-8 text-slate-300">
                V současné době web Překreslito.cz nepoužívá analytické,
                reklamní ani marketingové cookies.
              </p>

              <div className="mt-8 grid gap-6 lg:grid-cols-2">

                <div className="rounded-2xl border border-green-500/20 bg-green-500/10 p-6">

                  <h3 className="text-xl font-bold text-green-400">
                    ✔ Nepoužíváme
                  </h3>

                  <ul className="mt-5 space-y-3 text-slate-300">

                    <li>• Google Analytics</li>

                    <li>• Google Ads</li>

                    <li>• Meta Pixel</li>

                    <li>• Hotjar</li>

                    <li>• Microsoft Clarity</li>

                  </ul>

                </div>

                <div className="rounded-2xl border border-yellow-500/20 bg-yellow-500/10 p-6">

                  <h3 className="text-xl font-bold text-yellow-400">
                    Do budoucna
                  </h3>

                  <p className="mt-5 leading-8 text-slate-300">
                    Pokud budou v budoucnu přidány analytické nebo
                    marketingové nástroje využívající cookies,
                    budou tyto zásady aktualizovány a návštěvníkům
                    bude nabídnuta možnost udělit nebo odmítnout souhlas.
                  </p>

                </div>

              </div>

            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl">

              <h2 className="text-3xl font-black">
                Jak můžete cookies spravovat
              </h2>

              <p className="mt-6 leading-8 text-slate-300">
                Většina internetových prohlížečů umožňuje cookies
                zobrazit, odstranit nebo jejich ukládání zcela zakázat.
                Upozorňujeme však, že zakázání technických cookies může
                ovlivnit správné fungování některých částí webu.
              </p>

            </div>

            <div className="rounded-[32px] border border-cyan-500/30 bg-cyan-500/10 p-10 backdrop-blur-xl">

              <h2 className="text-3xl font-black">
                Změny těchto zásad
              </h2>

              <p className="mt-6 leading-8 text-slate-300">
                Tyto zásady mohou být v budoucnu aktualizovány zejména
                v případě změny funkcí webu nebo právních předpisů.
                Doporučujeme proto tuto stránku občas navštívit.
              </p>

            </div>

          </div>

        </section>

      </main>

      <Footer />

    </>
  );
}