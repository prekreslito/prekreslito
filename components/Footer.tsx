import Link from "next/link";

export default function Footer() {
  return (
    <footer
      id="kontakt"
      className="mt-20 border-t border-white/10 sm:mt-24 lg:mt-32"
    >
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:py-16">

        <div className="grid gap-12 text-center md:grid-cols-3 md:text-left">

          {/* Levá část */}

          <div>

            <Link
              href="/"
              className="inline-block transition hover:opacity-90"
            >
              <h2 className="text-3xl font-black">
                Překreslito
                <span className="text-cyan-400">.cz</span>
              </h2>
            </Link>

            <p className="mt-4 leading-7 text-slate-400">
              Profesionální překreslování projektové dokumentace
              rodinných domů do moderní digitální podoby.
            </p>

          </div>

          {/* Prostředek */}

          <div className="flex flex-col items-center">

            <h3 className="mb-5 text-lg font-bold">
              Kontakt
            </h3>

            <a
              href="mailto:info@prekreslito.cz"
              className="transition hover:text-cyan-400"
            >
              ✉ info@prekreslito.cz
            </a>

            <p className="mt-3 text-slate-400">
              📍 Zlínský kraj, Česká republika
            </p>

          </div>

          {/* Pravá část */}

          <div className="flex flex-col items-center md:items-end">

            <h3 className="mb-5 text-lg font-bold">
              Navigace
            </h3>

            <div className="flex flex-col gap-3">

              <Link
                href="/#sluzby"
                className="transition hover:text-cyan-400"
              >
                Služby
              </Link>

              <Link
                href="/#process"
                className="transition hover:text-cyan-400"
              >
                Jak to probíhá
              </Link>

              <Link
                href="/#galerie"
                className="transition hover:text-cyan-400"
              >
                Galerie
              </Link>

              <Link
                href="/#cenik"
                className="transition hover:text-cyan-400"
              >
                Ceník
              </Link>

              <Link
                href="/#poptavka"
                className="transition hover:text-cyan-400"
              >
                Poptávka
              </Link>

              <Link
                href="/pravni-informace"
                className="transition hover:text-cyan-400"
              >
                Právní informace
              </Link>

            </div>

          </div>

        </div>

        <div className="mt-12 border-t border-white/10 pt-8">

          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row">

            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} Překreslito.cz. Všechna práva vyhrazena.
            </p>

            <p className="text-sm text-slate-500">
              Moderní digitalizace projektové dokumentace rodinných domů.
            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}