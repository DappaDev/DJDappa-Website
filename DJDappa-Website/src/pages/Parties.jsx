import anniversary from "../assets/images/anniversary.webp";
import batMitzvah from "../assets/images/bat-mitzvah.webp";
import birthdayCake from "../assets/images/birthday-cake.webp";
import dappaProfile from "../assets/images/dappa-profile.webp";
import letsPartyNeon from "../assets/images/lets-party-neon.webp";
import sweet16 from "../assets/images/sweet-16.webp";
import { MAILTO } from "../data/site";

export default function Parties({ navigate }) {
  return (
    <>
      <section className="relative h-[84vh] min-h-[620px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img fetchPriority="high" src={letsPartyNeon} alt="Pink neon Let's Party sign on silver tinsel" className="w-full h-full object-cover" style={{ objectPosition: "50% 22%" }} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-[#070707]/75 to-[#070707]/15" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/30 to-transparent" />
          <div className="absolute inset-0 opacity-80 mix-blend-overlay bg-[radial-gradient(ellipse_at_30%_20%,rgba(255,92,218,0.32),transparent_55%),radial-gradient(ellipse_at_80%_60%,rgba(0,229,255,0.28),transparent_50%)]" />
          <div className="absolute inset-0 bg-[#FF5CDA]/[0.06] mix-blend-color" />
        </div>
        <div className="absolute top-0 left-0 right-0 h-[1px] pink-cyan-gradient opacity-60" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 w-full pb-14 lg:pb-20 grid lg:grid-cols-[1.15fr_0.4fr] gap-10 items-end">
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-3 py-1 rounded-full bg-[#FF5CDA] text-black text-[10px] tracking-[0.22em] uppercase font-semibold shadow-[0_0_12px_rgba(255,92,218,0.45)]">Party Parties • Any Celebration</span>
              <span className="px-3 py-1 rounded-full bg-black/60 border border-white/10 backdrop-blur text-[10px] tracking-[0.22em] uppercase text-white/60">Denver • Rocky Mountains • Nationwide</span>
              <span className="text-[10px] tracking-widest uppercase text-white/30">Sweet 16 • Bat Mitzvahs • Anniversaries • All Celebrations</span>
            </div>
            <h1 className="leading-[0.85] tracking-tight">
              <span className="dappa-font text-white text-[56px] sm:text-[84px] lg:text-[104px] leading-[0.82] uppercase block">PARTIES</span>
              <span className="serif block mt-4 text-[26px] sm:text-[36px] lg:text-[42px] leading-[0.9] font-light italic text-white/90">We cover any and all celebrations.</span>
            </h1>
            <p className="mt-6 text-[15px] sm:text-[17px] leading-relaxed text-white/65 max-w-[620px] font-light">
              From Sweet 16s to anniversaries, MoonRae Productions curates energy for every generation — Top 40s and more, not a playlist. Vibe Curator, Not A Playlist — we produce the night, soundtrack not just songs.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button onClick={() => navigate("contact")} className="px-6 py-3 rounded-full bg-white text-black text-[11px] tracking-widest uppercase font-semibold hover:bg-[#FF5CDA] transition">Check Availability</button>
              <button onClick={() => navigate("services")} className="px-6 py-3 rounded-full bg-white/[0.06] border border-white/10 text-white text-[11px] tracking-widest uppercase hover:bg-white hover:text-black transition">DJ Services</button>
            </div>
          </div>
          <div className="hidden lg:flex justify-end">
            <div className="w-[280px] rounded-[22px] overflow-hidden border border-[#FF5CDA]/30 bg-[#121212] p-4 shadow-[0_0_22px_rgba(255,92,218,0.35),0_0_44px_rgba(0,229,255,0.18)]">
              <p className="text-[10px] tracking-[0.28em] uppercase text-[#FF5CDA] mb-3">Quick Menu</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[12px] text-white/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF5CDA]" />
                  {" Sweet 16 Takeovers"}
                </div>
                <div className="flex items-center gap-2 text-[12px] text-white/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]" />
                  {" Bat Mitzvahs — Interactive"}
                </div>
                <div className="flex items-center gap-2 text-[12px] text-white/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
                  {" Anniversaries — Elegant"}
                </div>
                <div className="flex items-center gap-2 text-[12px] text-white/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF5CDA]/60" />
                  {" Any Celebration"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <div className="max-w-[760px] mb-14">
          <p className="text-[11px] tracking-[0.32em] uppercase text-[#FF5CDA] mb-4">What We Cover • Private Event DJ</p>
          <h2 className="serif text-[32px] sm:text-[46px] leading-[0.92] tracking-tight">
            {"Four ways we produce your celebration — "}
            <span className="text-pink-cyan-gradient text-glow-pink">every generation on the floor.</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-7 lg:gap-8">
          <div className="rounded-[22px] overflow-hidden bg-[#111] border border-[#FF5CDA]/30 shadow-[0_0_22px_rgba(255,92,218,0.22),0_0_36px_rgba(0,229,255,0.14)]">
            <div className="relative aspect-[4/3] overflow-hidden bg-[#0a0a0a]">
              <img loading="lazy" decoding="async" src={sweet16} alt="Sweet 16 - four girls with pink 16 balloons, black gold white arch, gold sequin backdrop" className="w-full h-full object-cover" style={{ objectPosition: "50% 32%", filter: "contrast(1.12) saturate(1.14) brightness(1.02)" }} />
              <div className="absolute inset-0 pointer-events-none opacity-[0.18] mix-blend-color bg-[#FF5CDA]" />
              <div className="absolute inset-0 pointer-events-none opacity-[0.12] mix-blend-color bg-[#00E5FF]" />
              <div className="absolute inset-0 ring-1 ring-inset ring-[#FF5CDA]/20 pointer-events-none" />
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-[#FF5CDA] to-[#00E5FF] opacity-60" />
            </div>
            <div className="p-6 sm:p-7 bg-[#121212]">
              <h3 className="serif text-[22px] leading-[0.95] tracking-tight">Sweet 16</h3>
              <p className="mt-3 text-[13px] leading-relaxed text-white/60">
                Full Sweet 16 takeover — pink 16 balloons, black, gold & white arch, gold sequin backdrop. Top 40s and more, clean edits, crowd hype from grand entrance to last dance. Parents love the no dead air flow, kids stay on the floor.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-2.5 py-1 rounded-full bg-white/[0.06] border border-[#FF5CDA]/20 text-[10px] tracking-widest uppercase text-white/50">Top 40s</span>
                <span className="px-2.5 py-1 rounded-full bg-white/[0.06] border border-white/10 text-[10px] tracking-widest uppercase text-white/40">Interactive</span>
              </div>
            </div>
          </div>
          <div className="rounded-[22px] overflow-hidden bg-[#111] border border-[#00E5FF]/25 shadow-[0_0_22px_rgba(0,229,255,0.18),0_0_36px_rgba(255,92,218,0.12)]">
            <div className="relative aspect-[4/3] overflow-hidden bg-[#0a0a0a]">
              <img loading="lazy" decoding="async" src={batMitzvah} alt="Bat Mitzvah celebration - Hora chair lift dance floor" className="w-full h-full object-cover" style={{ objectPosition: "50% 32%" }} />
              <div className="absolute inset-0 pointer-events-none opacity-[0.16] mix-blend-color bg-[#00E5FF]" />
              <div className="absolute inset-0 pointer-events-none opacity-[0.10] mix-blend-color bg-[#FF5CDA]" />
              <div className="absolute inset-0 ring-1 ring-inset ring-[#00E5FF]/20 pointer-events-none" />
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-[#00E5FF] to-[#FF5CDA] opacity-50" />
            </div>
            <div className="p-6 sm:p-7 bg-[#121212]">
              <h3 className="serif text-[22px] leading-[0.95] tracking-tight">Bat Mitzvahs</h3>
              <p className="mt-3 text-[13px] leading-relaxed text-white/60">
                Hora, chair lift, family formalities and all-night motion. We curate energy for every generation — Motzi to dance floor, interactive games, MC that keeps it moving, sound clean for grandparents and hype for friends.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-2.5 py-1 rounded-full bg-white/[0.06] border border-[#00E5FF]/20 text-[10px] tracking-widest uppercase text-white/50">Hora • Chair Lift</span>
                <span className="px-2.5 py-1 rounded-full bg-white/[0.06] border border-white/10 text-[10px] tracking-widest uppercase text-white/40">Family Friendly</span>
              </div>
            </div>
          </div>
          <div className="rounded-[22px] overflow-hidden bg-[#111] border border-white/[0.08] hover:border-[#FF5CDA]/20 transition shadow-[0_0_18px_rgba(255,92,218,0.10)]">
            <div className="relative aspect-[4/3] overflow-hidden bg-[#0a0a0a]">
              <img loading="lazy" decoding="async" src={anniversary} alt="Anniversary - two women laughing with pink and white flower bouquets" className="w-full h-full object-cover" style={{ objectPosition: "50% 30%", filter: "contrast(1.10) saturate(1.12) brightness(1.02)" }} />
              <div className="absolute inset-0 pointer-events-none opacity-[0.14] mix-blend-color bg-[#FF5CDA]" />
              <div className="absolute inset-0 pointer-events-none opacity-[0.10] mix-blend-color bg-[#00E5FF]" />
              <div className="absolute inset-0 ring-1 ring-inset ring-[#FF5CDA]/15 pointer-events-none" />
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-[#FF5CDA] to-[#00E5FF] opacity-50" />
            </div>
            <div className="p-6 sm:p-7 bg-[#121212]">
              <h3 className="serif text-[22px] leading-[0.95] tracking-tight">Anniversaries</h3>
              <p className="mt-3 text-[13px] leading-relaxed text-white/60">
                Elegant, warm, every generation on the floor. From slow dance classics to Top 40s and more — soundtrack, not just songs. We handle toasts, slideshows, and a timeline that feels effortless, from first song to last call.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-2.5 py-1 rounded-full bg-white/[0.06] border border-white/10 text-[10px] tracking-widest uppercase text-white/40">Elegant</span>
                <span className="px-2.5 py-1 rounded-full bg-white/[0.06] border border-[#FF5CDA]/15 text-[10px] tracking-widest uppercase text-white/50">All Generations</span>
              </div>
            </div>
          </div>
          <div className="rounded-[22px] overflow-hidden bg-[#121212] border border-[#FF5CDA]/25 shadow-[0_0_24px_rgba(255,92,218,0.20),0_0_40px_rgba(0,229,255,0.14)]">
            <div className="relative aspect-[4/3] overflow-hidden bg-[#0a0a0a]">
              <img loading="lazy" decoding="async" src={birthdayCake} alt="40th Birthday Celebration - white and gold cake with white flowers" className="w-full h-full object-cover" style={{ objectPosition: "50% 35%" }} />
              <div className="absolute inset-0 pointer-events-none opacity-[0.20] mix-blend-color bg-[#FF5CDA]" />
              <div className="absolute inset-0 pointer-events-none opacity-[0.12] mix-blend-color bg-[#00E5FF]" />
              <div className="absolute inset-0 ring-1 ring-inset ring-[#FF5CDA]/20 pointer-events-none" />
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-[#FF5CDA] via-white/20 to-[#00E5FF] opacity-60" />
            </div>
            <div className="p-6 sm:p-7 bg-[#121212]">
              <h3 className="serif text-[22px] leading-[0.95] tracking-tight">We cover all celebrations</h3>
              <p className="mt-3 text-[13px] leading-relaxed text-white/60">
                40th Birthday and beyond — white & gold cake, elegant florals, milestone energy. Birthdays, corporate, non-profits, any age, any size. Vibe Curator, Not A Playlist — we produce the night, soundtrack not just songs.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-2.5 py-1 rounded-full bg-white/[0.06] border border-white/10 text-[10px] tracking-widest uppercase text-white/40">Milestones</span>
                <span className="px-2.5 py-1 rounded-full bg-white/[0.06] border border-[#FF5CDA]/20 text-[10px] tracking-widest uppercase text-white/50">Any Celebration</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 grid lg:grid-cols-[1.1fr_0.9fr] gap-8">
          <div className="rounded-[24px] bg-[#121212] border border-[#FF5CDA]/15 p-8 flex gap-5">
            <img loading="lazy" decoding="async" src={dappaProfile} alt="DJ Dappa" className="w-14 h-14 rounded-full object-cover border border-[#FF5CDA]/20" />
            <div>
              <p className="serif text-[18px]">DAPPA — Vibe Curator, Not A Playlist</p>
              <p className="text-[13px] text-white/55 mt-2 leading-relaxed">
                New Orleans → Denver • 15+ years, 400+ events. We don’t play songs — we produce moments. From Downtown Denver to Ski Country, control the frequency not just volume.
              </p>
              <p className="text-[11px] tracking-widest uppercase text-white/30 mt-3">Rocky Mountains • Nationwide • Top 40s and more</p>
            </div>
          </div>
          <div className="rounded-[24px] bg-[#FF5CDA] text-black p-8 relative overflow-hidden">
            <p className="text-[11px] tracking-[0.32em] uppercase text-black/60 font-semibold">Book</p>
            <h3 className="serif mt-3 text-[30px] leading-[0.9]">Let’s produce your party — any age, any size.</h3>
            <p className="mt-3 text-[14px] text-black/70 leading-relaxed">
              Tell me date, guest count, vibe. Custom timeline + rig spec — no packages, built for you.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={MAILTO} className="px-6 py-3 rounded-full bg-black text-white text-[11px] tracking-widest uppercase font-semibold hover:bg-white hover:text-black transition">Email DAPPA</a>
              <button onClick={() => navigate("contact")} className="px-6 py-3 rounded-full bg-black/10 border border-black/10 text-[11px] tracking-widest uppercase font-semibold">Check Availability</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
