import batMitzvah from "../assets/images/bat-mitzvah.webp";
import cdjDeck from "../assets/images/cdj-deck.webp";
import dappaPeace from "../assets/images/dappa-peace.webp";
import djSetup from "../assets/images/dj-setup.webp";
import heroStage from "../assets/images/hero-stage.webp";
import weddingFormal from "../assets/images/wedding-formal.webp";
import { EMAIL, MAILTO, INSTAGRAM_URL } from "../data/site";

const CARDS = [
  { k: "services", title: "DJ Services", img: djSetup, desc: "Live Mixing, MC, Live Audio - Corporate, Nightclubs, Non-Profits, all events.", tag: "Live Mixing" },
  { k: "weddings", title: "Weddings", img: weddingFormal, desc: "Ceremony audio, cocktail vibes, and a packed dance floor. Denver and surrounding areas.", tag: "Weddings" },
  { k: "parties", title: "Birthday Parties", img: batMitzvah, desc: "Family friendly mixes, formal traditions, with an interactive dance floor.", tag: "Interactive" },
];

export default function Home({ navigate }) {
  return (
    <>
      <section className="relative h-[88vh] min-h-[660px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img fetchPriority="high" src={heroStage} alt="DJ Dappa performing on a lit stage" className="w-full h-full object-cover" style={{ objectPosition: "50% 22%" }} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-[#070707]/60 to-[#070707]/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />
          <div className="absolute inset-0 opacity-80 mix-blend-overlay bg-[radial-gradient(ellipse_at_30%_20%,rgba(255,92,218,0.32),transparent_55%),radial-gradient(ellipse_at_80%_60%,rgba(0,229,255,0.28),transparent_50%)]" />
          <div className="absolute inset-0 bg-[#FF5CDA]/[0.06] mix-blend-color" />
        </div>
        <div className="absolute top-0 left-0 right-0 h-[1px] pink-cyan-gradient opacity-60" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 w-full pb-14 lg:pb-20">
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-3 py-1 rounded-full bg-[#FF5CDA] text-black text-[10px] tracking-[0.22em] uppercase font-semibold shadow-[0_0_12px_rgba(255,92,218,0.45)]">MoonRae Productions</span>
              <span className="px-3 py-1 rounded-full bg-black/60 border border-white/10 backdrop-blur text-[10px] tracking-[0.22em] uppercase text-white/60">Denver • Rocky Mountains • Nationwide</span>
              <span className="text-[10px] tracking-widest uppercase text-white/30">15+ Years • 400+ Events</span>
            </div>
            <h1 className="serif text-[38px] leading-[0.9] sm:text-[60px] lg:text-[74px] tracking-[-0.03em] font-medium">
              Control The Frequency
              <br />
              <span className="dappa-font text-white text-[44px] sm:text-[64px] lg:text-[80px] leading-[0.82] uppercase">DJ DAPPA</span>
              <br />
              <span className="text-pink-cyan-gradient text-glow-pink">Rocky Mountains</span>
            </h1>
            <p className="mt-6 text-[15px] sm:text-[17px] leading-relaxed text-white/60 max-w-[580px] font-light">
              From Downtown Denver to Ski Country and beyond, Dappa packs dance floors, produces the night, and creates the memories.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button onClick={() => navigate("weddings")} className="px-6 py-3 rounded-full bg-white text-black text-[11px] tracking-widest uppercase font-semibold hover:bg-[#FF5CDA] transition">Weddings</button>
              <button onClick={() => navigate("parties")} className="px-6 py-3 rounded-full bg-white/[0.06] border border-white/10 text-white text-[11px] tracking-widest uppercase hover:bg-white hover:text-black transition">Party Parties</button>
              <a href={MAILTO} className="px-6 py-3 rounded-full bg-[#FF5CDA] text-black text-[11px] tracking-widest uppercase font-semibold hover:bg-white transition shadow-[0_0_16px_rgba(255,92,218,0.35)]">Book DAPPA</a>
            </div>
          </div>
        </div>
      </section>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 lg:py-20 grid md:grid-cols-3 gap-6">
        {CARDS.map((card) => <button key={card.k} onClick={() => navigate(card.k)} className={`group text-left rounded-[22px] overflow-hidden bg-[#111] transition-all ${card.k === "services" || card.k === "parties" ? "border border-[#FF5CDA]/30 shadow-[0_0_22px_rgba(255,92,218,0.22),0_0_32px_rgba(0,229,255,0.14)] hover:border-[#FF5CDA]/50" : "border border-white/[0.06] hover:border-[#FF5CDA]/20"}`}>
          <div className={`relative overflow-hidden ${card.k === "weddings" ? "h-[280px]" : "h-[220px]"}`}>
            <img loading="lazy" decoding="async" src={card.img} alt={card.title} className="w-full h-full object-cover group-hover:scale-[1.03] transition duration-700" style={card.k === "weddings" ? { objectPosition: "50% 8%" } : undefined} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/0 via-transparent to-transparent pointer-events-none" />
          </div>
          <div className="p-5">
            <p className="serif text-[18px] flex items-center gap-2">{card.title}</p>
            <p className="mt-2 text-[13px] leading-relaxed text-white/55">{card.desc}</p>
            <span className="mt-4 inline-flex text-[11px] tracking-widest uppercase text-[#FF5CDA] group-hover:text-white transition">Explore →</span>
          </div>
        </button>)}
      </div>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-10 lg:py-16 grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
        <div className="order-2 lg:order-1">
          <p className="text-[11px] tracking-[0.32em] uppercase text-[#FF5CDA] mb-4">Vibe Curator, Not A Playlist</p>
          <h2 className="serif text-[34px] sm:text-[46px] leading-[0.92] tracking-tight">I don't play songs. I curate energy, momentum, and memory.</h2>
          <div className="mt-8 space-y-5 prose-p max-w-[600px]">
            <p>
              Weddings, Nightclubs, Corporate - each need a different tempo. Vibe Curator, Not A Playlist means that I build custom timelines, shape frequencies, and keep transitions seamless.
            </p>
            <p>
              We Don’t Just Play Music, We Produce The Night - Soundtrack, Not Just Songs. Top 40, Hip Hop, Pop, EDM, and more.
            </p>
          </div>
          <div className="mt-8 grid sm:grid-cols-2 gap-4 max-w-[600px]">
            <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-5">
              <p className="text-[11px] uppercase tracking-widest text-white/40 mb-2">Set The Tone</p>
              <p className="text-[13px] leading-relaxed text-white/70">Tempo, Genre, Volume, Mixing, and engagement: CHECK!</p>
            </div>
            <div className="rounded-2xl bg-white/[0.03] border border-[#FF5CDA]/15 p-5 shadow-[0_0_18px_rgba(255,92,218,0.12)]">
              <p className="text-[11px] uppercase tracking-widest text-[#FF5CDA] mb-2">Hold The Energy</p>
              <p className="text-[13px] leading-relaxed text-white/70">The Vibe is Perfect All Night</p>
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <div className="mb-4">
            <p className="serif text-[18px]">
              Vibe Curator, Not A Playlist — Top 40s and more, curating energy for every generation.
            </p>
          </div>
          <div className="rounded-[24px] overflow-hidden border border-[#FF5CDA]/30 bg-[#121212] shadow-[0_0_24px_rgba(255,92,218,0.38),0_0_48px_rgba(0,229,255,0.22)] p-1">
            <div className="rounded-[18px] overflow-hidden relative">
              <img loading="lazy" decoding="async" src={cdjDeck} alt="CDJ deck close-up, jogwheel glowing blue, mixer, laptop with DJ software blurred behind, colorful buttons lit" className="w-full h-[520px] object-cover" style={{ objectPosition: "50% 50%", filter: "contrast(1.28) saturate(1.22) brightness(1.02)" }} />
              <div className="absolute inset-0 pointer-events-none opacity-[0.06] mix-blend-color bg-[#FF5CDA]" />
              <div className="absolute inset-0 pointer-events-none opacity-[0.10] mix-blend-color bg-[#00E5FF]" />
              <div className="absolute inset-0 rounded-[18px] pointer-events-none ring-1 ring-[#FF5CDA]/20 shadow-[inset_0_0_22px_rgba(0,229,255,0.22),inset_0_0_36px_rgba(255,92,218,0.12)]" />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <div className="rounded-[28px] overflow-hidden border border-white/[0.06] bg-[#111] grid lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative min-h-[520px]">
            <img loading="lazy" decoding="async" src={dappaPeace} alt="DJ Dappa smiling and throwing up a peace sign" className="w-full h-full object-cover absolute inset-0" style={{ objectPosition: "50% 20%" }} />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
          </div>
          <div className="p-8 lg:p-12 flex flex-col justify-center bg-[#121212]">
            <p className="text-[11px] tracking-[0.32em] uppercase text-[#00E5FF]">Book Rocky Mountains to Nationwide</p>
            <h2 className="serif mt-4 text-[34px] sm:text-[44px] leading-[0.9] tracking-tight">Let's make it feel effortless.</h2>
            <p className="mt-5 text-[15px] leading-relaxed text-white/60">
              Tell me your date, venue, guest count, vibe. I respond within 24h with custom timeline + specs.
            </p>
            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3 text-[13px] text-white/70">
                <span className="w-8 h-8 rounded-full bg-white text-black grid place-items-center text-[12px]">✦</span>
                <a href={MAILTO} className="hover:text-white transition underline-offset-2 hover:underline">{EMAIL}</a>
              </div>
              <div className="flex items-center gap-3 text-[13px] text-white/70">
                <span className="w-8 h-8 rounded-full bg-white/[0.06] border border-white/10 grid place-items-center">◎</span>
                {" "}
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition underline-offset-2 hover:underline">Instagram @yaboydappa</a>
                <span className="text-white/30">{" • TikTok @yaboydappa"}</span>
              </div>
              <div className="flex items-center gap-3 text-[13px] text-white/70">
                <span className="w-8 h-8 rounded-full bg-white/[0.06] border border-white/10 grid place-items-center">◐</span>
                {" Denver, CO — Rocky Mountains • Nationwide"}
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <button onClick={() => navigate("contact")} className="px-6 py-3 rounded-full bg-white text-black text-[11px] tracking-widest uppercase font-semibold hover:bg-[#FF5CDA] transition">Check Availability</button>
              <button onClick={() => navigate("weddings")} className="px-6 py-3 rounded-full bg-white/[0.06] border border-white/10 text-white text-[11px] tracking-widest uppercase hover:bg-white hover:text-black transition">Weddings</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
