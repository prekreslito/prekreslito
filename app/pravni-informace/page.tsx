import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function OchranaOsobnichUdaju() {
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
            Zásady ochrany
            <br />
            osobních údajů
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-300">
            Vaše soukromí bereme vážně. Na této stránce najdete přehled,
            jaké osobní údaje zpracováváme, proč je potřebujeme a jakým
            způsobem jsou chráněny při používání webu Překreslito.cz.
          </p>

          <div className="mt-12 inline-flex rounded-2xl border border-cyan-500/30 bg-cyan-500/10 px-6 py-4 text-cyan-300">
            Poslední aktualizace: 3. července 2026
          </div>

        </section>

        {/* Obsah */}

        <section className="mx-auto max-w-7xl px-8 pb-32">

          <div className="space-y-10">

            <div className="rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl">

              <h2 className="text-3xl font-black">
                1. Správce osobních údajů
              </h2>

              <p className="mt-6 leading-8 text-slate-300">
                Správcem osobních údajů je provozovatel webových stránek
                <strong> Překreslito.cz</strong>.
              </p>

              <p className="mt-4 leading-8 text-slate-300">
                Web je v současné době provozován fyzickou osobou,
                která připravuje spuštění své služby překreslování
                projektové dokumentace. V době zveřejnění těchto zásad
                není provozovatel podnikající osobou.
              </p>

              <p className="mt-4 leading-8 text-slate-300">
                V případě jakýchkoliv dotazů týkajících se zpracování
                osobních údajů nás můžete kontaktovat na e-mailové adrese
                <span className="font-semibold text-cyan-400">
                  {" "}
                  info@prekreslito.cz
                </span>.
              </p>

            </div>
                        <div className="rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl">

              <h2 className="text-3xl font-black">
                2. Jaké osobní údaje zpracováváme
              </h2>

              <p className="mt-6 leading-8 text-slate-300">
                Osobní údaje nám poskytujete dobrovolně prostřednictvím
                poptávkového formuláře na webových stránkách
                <strong> Překreslito.cz</strong>.
              </p>

              <div className="mt-8 grid gap-6 lg:grid-cols-2">

                <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-6">

                  <h3 className="text-xl font-bold">
                    Zpracovávané údaje
                  </h3>

                  <ul className="mt-5 space-y-3 text-slate-300">

                    <li>• Jméno a příjmení</li>

                    <li>• E-mailová adresa</li>

                    <li>• Telefonní číslo (pokud jej uvedete)</li>

                    <li>• Popis projektu</li>

                    <li>• Nahrané soubory (PDF, DWG, fotografie, ZIP apod.)</li>

                  </ul>

                </div>

                <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-6">

                  <h3 className="text-xl font-bold">
                    Co naopak neshromažďujeme
                  </h3>

                  <ul className="mt-5 space-y-3 text-slate-300">

                    <li>• Platební údaje</li>

                    <li>• Rodná čísla</li>

                    <li>• Údaje z občanských průkazů</li>

                    <li>• Citlivé osobní údaje</li>

                    <li>• Marketingové informace</li>

                  </ul>

                </div>

              </div>

            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl">

              <h2 className="text-3xl font-black">
                3. Proč údaje zpracováváme
              </h2>

              <p className="mt-6 leading-8 text-slate-300">
                Vaše údaje používáme pouze v rozsahu nezbytném pro vyřízení
                poptávky a následnou komunikaci.
              </p>

              <div className="mt-8 space-y-5">

                <div className="flex gap-4 rounded-2xl border border-white/10 bg-black/20 p-5">

                  <span className="text-3xl">📩</span>

                  <div>

                    <h3 className="font-bold text-cyan-400">
                      Komunikace
                    </h3>

                    <p className="mt-2 text-slate-300">
                      Odpověď na vaši poptávku a případné doplňující dotazy.
                    </p>

                  </div>

                </div>

                <div className="flex gap-4 rounded-2xl border border-white/10 bg-black/20 p-5">

                  <span className="text-3xl">💰</span>

                  <div>

                    <h3 className="font-bold text-cyan-400">
                      Cenová nabídka
                    </h3>

                    <p className="mt-2 text-slate-300">
                      Vyhodnocení projektu a příprava individuální cenové nabídky.
                    </p>

                  </div>

                </div>

                <div className="flex gap-4 rounded-2xl border border-white/10 bg-black/20 p-5">

                  <span className="text-3xl">📐</span>

                  <div>

                    <h3 className="font-bold text-cyan-400">
                      Realizace zakázky
                    </h3>

                    <p className="mt-2 text-slate-300">
                      Překreslení projektové dokumentace a předání výsledných souborů.
                    </p>

                  </div>

                </div>

              </div>

            </div>
                        <div className="rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl">

              <h2 className="text-3xl font-black">
                4. Jak dlouho údaje uchováváme
              </h2>

              <p className="mt-6 leading-8 text-slate-300">
                Osobní údaje uchováváme pouze po dobu nezbytnou k vyřízení
                poptávky, vzájemné komunikaci a případné realizaci zakázky.
                Jakmile již údaje nejsou potřeba, jsou bezpečně odstraněny
                nebo anonymizovány.
              </p>

            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl">

              <h2 className="text-3xl font-black">
                5. Zabezpečení údajů
              </h2>

              <p className="mt-6 leading-8 text-slate-300">
                Přijímáme přiměřená technická a organizační opatření,
                která mají zabránit neoprávněnému přístupu, ztrátě,
                zneužití nebo zveřejnění osobních údajů.
              </p>

              <p className="mt-4 leading-8 text-slate-300">
                Komunikace s webem probíhá prostřednictvím zabezpečeného
                HTTPS připojení a data jsou ukládána pouze v rozsahu
                nezbytném pro poskytování služby.
              </p>

            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl">

              <h2 className="text-3xl font-black">
                6. Vaše práva
              </h2>

              <p className="mt-6 leading-8 text-slate-300">
                V souladu s nařízením GDPR máte právo:
              </p>

              <ul className="mt-6 space-y-3 text-slate-300">

                <li>• požadovat přístup ke svým osobním údajům,</li>

                <li>• požadovat opravu nepřesných údajů,</li>

                <li>• požadovat výmaz osobních údajů, pokud to umožňují právní předpisy,</li>

                <li>• požadovat omezení zpracování,</li>

                <li>• vznést námitku proti zpracování osobních údajů,</li>

                <li>• podat stížnost u příslušného dozorového úřadu.</li>

              </ul>

            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl">

              <h2 className="text-3xl font-black">
                7. Používané služby
              </h2>

              <p className="mt-6 leading-8 text-slate-300">
                Pro zajištění správného fungování webu mohou být využívány
                služby třetích stran, například pro odesílání e-mailů,
                ukládání souborů nebo technický provoz webových stránek.
              </p>

              <div className="mt-8 grid gap-5 lg:grid-cols-2">

                <div className="rounded-2xl border border-white/10 bg-black/20 p-6">

                  <h3 className="text-xl font-bold text-cyan-400">
                    Resend
                  </h3>

                  <p className="mt-3 text-slate-300">
                    Slouží k odesílání potvrzení o přijetí poptávky
                    a další e-mailové komunikaci.
                  </p>

                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-6">

                  <h3 className="text-xl font-bold text-cyan-400">
                    Supabase
                  </h3>

                  <p className="mt-3 text-slate-300">
                    Slouží pro bezpečné ukládání dat a souborů
                    nahraných prostřednictvím formuláře.
                  </p>

                </div>

              </div>

            </div>

            <div className="rounded-[32px] border border-cyan-500/30 bg-cyan-500/10 p-10 backdrop-blur-xl">

              <h2 className="text-3xl font-black">
                Kontakt
              </h2>

              <p className="mt-6 leading-8 text-slate-300">
                Pokud máte jakékoliv dotazy týkající se ochrany osobních
                údajů nebo chcete uplatnit některé ze svých práv,
                kontaktujte nás na e-mailové adrese:
              </p>

              <p className="mt-6 text-2xl font-bold text-cyan-400">
                info@prekreslito.cz
              </p>

            </div>

          </div>

        </section>

      </main>

      <Footer />

    </>
  );
}