export default function Footer() {
  return (
    <footer
      id="kontakt"
      className="border-t border-white/10 mt-32"
    >
      <div className="max-w-[1800px] mx-auto px-12 py-12">

        <div className="grid grid-cols-1 md:grid-cols-3 items-center">

          {/* Levá část */}
          <div className="text-left">

            <h2 className="text-3xl font-black text-cyan-400">
              Překreslito.cz
            </h2>

            <p className="mt-3 text-slate-400">
              Digitální překreslování projektů rodinných domů.
            </p>

          </div>

          {/* Prostředek */}
          <div className="text-center">

            <a
              href="mailto:info@prekreslito.cz"
              className="block text-slate-300 transition hover:text-cyan-400"
            >
              ✉️ info@prekreslito.cz
            </a>

            <p className="mt-2 text-slate-300">
              📍 Zlínský kraj, Česká republika
            </p>

          </div>

          {/* Pravá část */}
          <div className="text-right">

            <p className="text-slate-500">
              © 2026 Překreslito.cz
            </p>

          </div>

        </div>

      </div>
    </footer>
  );
}