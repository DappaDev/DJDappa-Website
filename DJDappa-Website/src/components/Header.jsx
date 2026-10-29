import { useEffect, useState } from "react";
import moonraeLogo from "../assets/images/moonrae-logo.webp";
import { MAILTO, PAGES } from "../data/site";

export default function Header({ page, navigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setMenuOpen(false);
    navigate(id);
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-500 ${
        scrolled || menuOpen ? "bg-[#070707]/85 glass border-white/[0.08]" : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 h-[72px] flex items-center justify-between">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            go("home");
          }}
          className="flex items-center gap-3"
          aria-label="DJ Dappa — home"
        >
          <img
            src={moonraeLogo}
            alt="MoonRae Productions"
            width="35"
            height="28"
            className="h-[28px] w-auto object-contain drop-shadow-[0_0_10px_rgba(255,92,218,0.45)]"
          />
          <span className="dappa-font dappa-nav-glow text-[18px] sm:text-[20px] text-white leading-none uppercase">DJ DAPPA</span>
          <span className="hidden sm:inline-block h-[20px] w-[1px] bg-white/15" />
          <span className="hidden lg:inline text-[10px] tracking-[0.28em] uppercase text-white/35">Denver • Rocky Mountains • Nationwide</span>
        </a>

        <nav className="hidden md:flex items-center gap-1" aria-label="Main">
          {PAGES.map((p) => (
            <a
              key={p.id}
              href={`#${p.id}`}
              onClick={(e) => {
                e.preventDefault();
                go(p.id);
              }}
              aria-current={page === p.id ? "page" : undefined}
              className={`px-4 py-2 rounded-full text-[11px] tracking-[0.18em] uppercase transition-all ${
                page === p.id
                  ? "bg-white text-black font-semibold ring-2 ring-[#FF5CDA]/30"
                  : "text-white/60 hover:text-white hover:bg-white/[0.06]"
              }`}
            >
              {p.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="md:hidden px-3 py-2 rounded-full border border-white/10 text-[11px] tracking-widest uppercase text-white/70"
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
          <a
            href={MAILTO}
            className="px-5 py-2.5 rounded-full bg-[#FF5CDA] text-black text-[11px] tracking-[0.18em] uppercase font-semibold hover:bg-white transition-all shadow-[0_0_16px_rgba(255,92,218,0.45)]"
          >
            Book DAPPA
          </a>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="md:hidden border-t border-white/[0.06] bg-[#0A0A0A]/95 glass px-6 py-4 flex flex-col gap-2"
        >
          {PAGES.map((p) => (
            <a
              key={p.id}
              href={`#${p.id}`}
              onClick={(e) => {
                e.preventDefault();
                go(p.id);
              }}
              aria-current={page === p.id ? "page" : undefined}
              className={`text-left px-4 py-3 rounded-xl text-[13px] tracking-wide uppercase transition ${
                page === p.id ? "bg-white text-black" : "bg-white/[0.04] text-white/70"
              }`}
            >
              {p.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
