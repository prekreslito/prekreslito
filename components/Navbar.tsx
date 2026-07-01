export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-[#0b1120]/70 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        <a
          href="#"
          className="text-4xl font-black tracking-tight text-cyan-400"
        >
          Překreslito.cz
        </a>

        <nav className="hidden lg:flex items-center gap-10 text-lg">

          <a
            href="#sluzby"
            className="hover:text-cyan-400 transition"
          >
            Služby
          </a>

          <a
            href="#process"
            className="hover:text-cyan-400 transition"
          >
            Jak to probíhá
          </a>

          <a
            href="#galerie"
            className="hover:text-cyan-400 transition"
          >
            Galerie
          </a>

          <a
            href="#cenik"
            className="hover:text-cyan-400 transition"
          >
            Ceník
          </a>

          <a
            href="#poptavka"
            className="hover:text-cyan-400 transition"
          >
            Poptávka
          </a>

          <a
          href="#kontakt"
          className="transition hover:text-cyan-400"
          >
          Kontakt
          </a>

        </nav>

      </div>
    </header>
  );
}