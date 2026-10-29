import moonraeLogo from "../assets/images/moonrae-logo.webp";
import { EMAIL, INSTAGRAM_HANDLE, INSTAGRAM_URL, MAILTO, PAGES } from "../data/site";

export default function Footer({ navigate }) {
  const links = PAGES.filter((p) => p.id !== "contact");

  return (
    <footer className="border-t border-white/[0.06] bg-[#070707] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[1px] pink-cyan-gradient opacity-50" />
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img
            src={moonraeLogo}
            alt="MoonRae Productions"
            loading="lazy"
            className="h-6 w-auto object-contain drop-shadow-[0_0_8px_rgba(255,92,218,0.3)]"
          />
          <span className="dappa-font dappa-nav-glow text-[16px] text-white leading-none">DJ DAPPA</span>
          <span className="hidden md:inline text-[10px] tracking-widest uppercase text-white/30">Rocky Mountains • Denver • Nationwide</span>
        </div>

        <nav className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-[11px] text-white/40" aria-label="Footer">
          {links.map((p) => (
            <a
              key={p.id}
              href={`#${p.id}`}
              onClick={(e) => {
                e.preventDefault();
                navigate(p.id);
              }}
              className="hover:text-white transition"
            >
              {p.label}
            </a>
          ))}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition underline-offset-2 hover:underline"
          >
            Instagram {INSTAGRAM_HANDLE}
          </a>
        </nav>

        <div className="text-center md:text-right">
          <p className="text-[11px] text-white/60">Denver, CO — Rocky Mountains</p>
          <p className="text-[10px] tracking-widest uppercase text-white/30">
            © {new Date().getFullYear()} MoonRae Productions •{" "}
            <a href={MAILTO} className="hover:text-white transition">
              {EMAIL}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
