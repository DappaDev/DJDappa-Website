import dappaProfile from "../assets/images/dappa-profile.webp";
import djSetup from "../assets/images/dj-setup.webp";
import heroStage from "../assets/images/hero-stage.webp";
import servicesHero from "../assets/images/services-hero.webp";

export default function Services({ navigate }) {
  return (
    <>
      <section className="relative h-[88vh] min-h-[640px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img fetchPriority="high" src={servicesHero} alt="Close-up of DJ hands on a mixer with colorful LED pads" className="w-full h-full object-cover" style={{ objectPosition: "50% 42%", filter: "contrast(1.24) saturate(1.18) brightness(0.88)" }} />
          <div className="absolute inset-0 bg-[#FF5CDA]/[0.22] mix-blend-color" />
          <div className="absolute inset-0 bg-[#00E5FF]/[0.18] mix-blend-color opacity-80" />
          <div className="absolute inset-0 opacity-85 mix-blend-overlay bg-[radial-gradient(ellipse_at_72%_18%,rgba(255,92,218,0.24),transparent_54%),radial-gradient(ellipse_at_18%_72%,rgba(0,229,255,0.20),transparent_52%)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-[#070707]/72 to-[#070707]/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_38%,rgba(0,0,0,0.62)_100%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
        </div>
        <div className="absolute top-0 left-0 right-0 h-[1px] pink-cyan-gradient opacity-60" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 w-full pb-14 lg:pb-20 grid lg:grid-cols-[1.15fr_0.42fr] gap-10 items-end">
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-3 py-1 rounded-full bg-[#FF5CDA] text-black text-[10px] tracking-[0.22em] uppercase font-semibold shadow-[0_0_12px_rgba(255,92,218,0.45)]">Headliner Energy • Main Stage Standard</span>
              <span className="px-3 py-1 rounded-full bg-black/60 border border-white/10 backdrop-blur text-[10px] tracking-[0.22em] uppercase text-white/60">Denver • Rocky Mountains • Nationwide</span>
              <span className="text-[10px] tracking-widest uppercase text-white/30">No Dead Air • No Empty Floors • All Night Motion</span>
            </div>
            <h1 className="serif text-[38px] leading-[0.9] sm:text-[60px] lg:text-[74px] tracking-[-0.03em] font-medium">
              Headliner Energy.
              <br />
              <span className="text-pink-cyan-gradient text-glow-pink">Main Stage Standard.</span>
              <br />
              <span className="dappa-font text-white text-[44px] sm:text-[64px] lg:text-[80px] leading-[0.82] uppercase">DJ DAPPA</span>
            </h1>
            <p className="mt-6 text-[15px] sm:text-[17px] leading-relaxed text-white/60 max-w-[580px] font-light">
              New Orleans native, Denver based. House of Blues NOLA to Red Rocks. One of the best MC's in the Rockies — Control The Frequency, not just the volume.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button onClick={() => navigate("weddings")} className="px-6 py-3 rounded-full bg-white text-black text-[11px] tracking-widest uppercase font-semibold hover:bg-[#FF5CDA] transition">Weddings</button>
              <button onClick={() => navigate("parties")} className="px-6 py-3 rounded-full bg-white/[0.06] border border-white/10 text-white text-[11px] tracking-widest uppercase hover:bg-white hover:text-black transition">Party Parties</button>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="rounded-[24px] overflow-hidden bg-[#121212]/90 border border-[#FF5CDA]/30 backdrop-blur-xl shadow-[0_0_22px_rgba(255,92,218,0.32),0_0_36px_rgba(0,229,255,0.18)]">
              <div className="relative h-[360px] p-[1.5px] bg-gradient-to-br from-[#FF5CDA]/50 via-[#FF5CDA]/10 to-[#00E5FF]/40 rounded-t-[24px]">
                <div className="relative h-full w-full rounded-[22px] overflow-hidden bg-[#0e0e0e]">
                  <img loading="lazy" decoding="async" src={dappaProfile} alt="DJ Dappa portrait" className="w-full h-full object-cover" style={{ objectPosition: "50% 22%", filter: "contrast(1.12) saturate(1.08) brightness(1.02)" }} />
                  <div className="absolute inset-0 pointer-events-none opacity-[0.22] mix-blend-color bg-[#FF5CDA]" />
                  <div className="absolute inset-0 pointer-events-none opacity-[0.12] mix-blend-color bg-[#00E5FF]" />
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black via-black/10 to-transparent" />
                  <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-[#FF5CDA]/20 rounded-[22px]" />
                  <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_0_1px_rgba(0,229,255,0.18)] rounded-[22px]" />
                </div>
              </div>
              <div className="p-5 space-y-3">
                <p className="text-[12.5px] leading-relaxed text-white/65">
                  Soundtrack, Not Just Songs — custom timelines, QSC + Shure. Hosting is the craft.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-2.5 py-1 rounded-full bg-white/[0.06] border border-white/10 text-[10px] text-white/60">No Dead Air</span>
                  <span className="px-2.5 py-1 rounded-full bg-white/[0.06] border border-[#00E5FF]/20 text-[10px] text-white/60">All Night Motion</span>
                  <span className="px-2.5 py-1 rounded-full bg-white/[0.06] border border-[#FF5CDA]/20 text-[10px] text-white/60">No Empty Floors</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 lg:py-20 border-b border-white/[0.06]">
        <div className="flex flex-col gap-4 mb-10">
          <p className="text-[11px] tracking-[0.32em] uppercase text-[#FF5CDA]">Service Tiers • No Prices — Custom Every Time</p>
          <h2 className="serif text-[32px] sm:text-[46px] leading-[0.92] tracking-tight">
            {"Three Ways We "}
            <span className="text-pink-cyan-gradient text-glow-pink">Produce Your Night</span>
          </h2>
          <p className="prose-p max-w-[640px] mt-2">
            From music only to full custom build — pick the level of production you want. All tiers are Vibe Curator, Not A Playlist — No Dead Air, No Empty Floors.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 lg:gap-7">
          <div className="relative rounded-[22px] bg-[#111] border border-[#FF5CDA]/30 p-[1.5px] shadow-[0_0_22px_rgba(255,92,218,0.22),0_0_36px_rgba(0,229,255,0.10)]">
            <div className="rounded-[20px] bg-[#121212] p-7 sm:p-8 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-9 h-9 rounded-full bg-[#FF5CDA] text-black grid place-items-center text-[12px] font-bold tracking-widest shadow-[0_0_12px_rgba(255,92,218,0.55)]">A</span>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-[#FF5CDA]/30 to-transparent" />
                <span className="text-[10px] tracking-[0.22em] uppercase text-white/25">Music Only</span>
              </div>
              <h3 className="dappa-font-tight text-[19px] sm:text-[20px] leading-[0.92] text-white">Music Only</h3>
              <p className="mt-4 text-[14px] leading-relaxed text-white/60 font-light">You show up and mix on their sound system</p>
              <div className="mt-auto pt-7 flex items-center gap-2 text-[10px] tracking-[0.22em] uppercase text-white/25">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5CDA]/70" />
                {" MoonRae Productions • DAPPA"}
              </div>
            </div>
          </div>
          <div className="relative rounded-[22px] bg-[#111] border border-[#00E5FF]/25 p-[1.5px] shadow-[0_0_22px_rgba(0,229,255,0.18),0_0_36px_rgba(255,92,218,0.12)]">
            <div className="rounded-[20px] bg-[#121212] p-7 sm:p-8 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-9 h-9 rounded-full bg-[#00E5FF] text-black grid place-items-center text-[12px] font-bold tracking-widest shadow-[0_0_12px_rgba(0,229,255,0.45)]">B</span>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-[#00E5FF]/30 to-transparent" />
                <span className="text-[10px] tracking-[0.22em] uppercase text-white/25">Full Service</span>
              </div>
              <h3 className="dappa-font-tight text-[19px] sm:text-[20px] leading-[0.92] text-white">Full Service Event</h3>
              <p className="mt-4 text-[14px] leading-relaxed text-white/60 font-light">You bring sound, basic lighting, wireless mic, MC, and handle the timeline</p>
              <div className="mt-auto pt-7 flex items-center gap-2 text-[10px] tracking-[0.22em] uppercase text-white/25">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]/70" />
                {" Control The Frequency"}
              </div>
            </div>
          </div>
          <div className="relative rounded-[22px] bg-[#111] border border-[#FF5CDA]/25 p-[1.5px] shadow-[0_0_28px_rgba(255,92,218,0.24),0_0_44px_rgba(0,229,255,0.16)]">
            <div className="rounded-[20px] bg-[#121212] p-7 sm:p-8 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-9 h-9 rounded-full bg-white text-black grid place-items-center text-[12px] font-bold tracking-widest shadow-[0_0_14px_rgba(255,255,255,0.25)]">C</span>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-white/20 via-[#FF5CDA]/20 to-[#00E5FF]/20" />
                <span className="text-[10px] tracking-[0.22em] uppercase text-white/25">Premium</span>
              </div>
              <h3 className="dappa-font-tight text-[19px] sm:text-[20px] leading-[0.92] text-white">Premium Production</h3>
              <p className="mt-4 text-[14px] leading-relaxed text-white/60 font-light">Full sound + lighting design + effects + custom edits/remixes + hosting</p>
              <div className="mt-auto pt-7 flex items-center gap-2 text-[10px] tracking-[0.22em] uppercase text-white/25">
                <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
                {" Main Stage Standard"}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 lg:py-24 grid lg:grid-cols-[1.1fr_0.9fr] gap-12">
        <div>
          <p className="text-[11px] tracking-[0.32em] uppercase text-[#FF5CDA] mb-4">What I Do • Headliner Energy • Main Stage Standard</p>
          <h2 className="serif text-[34px] sm:text-[44px] leading-[0.95] tracking-tight">Set The Tone. Hold The Energy. Build The Moment.</h2>
          <div className="mt-8 space-y-5 prose-p max-w-[600px]">
            <p>
              <strong>Set The Tone</strong>
              {" at ceremony — whispers in the Rockies, lavs hidden, first look audio clean. "}
              <strong>Hold The Energy</strong>
              {" through cocktail and dinner — no dips, no awkward mic moments, no explicit when kids are present."}
            </p>
            <p>
              <strong>Build The Moment</strong>
              {" into open dance — QSC K12.2 + KS112, Shure ULX-D, Pioneer Rev-7, backup power. Rider-ready, venue-friendly, Rocky Mountains tested. "}
              <strong>No Dead Air. No Empty Floors. All Night Motion.</strong>
              {" From First Song to Last Call."}
            </p>
          </div>
          <div className="mt-10 grid sm:grid-cols-3 gap-4 max-w-[720px]">
            <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-5">
              <p className="text-[11px] uppercase tracking-widest text-white/40 mb-2">Set The Tone</p>
              <p className="text-[13px] leading-relaxed text-white/70">
                Lavalier for officiant, handheld for vows, hidden speaker placement so the view stays clean. Zero Awkward Moments.
              </p>
            </div>
            <div className="rounded-2xl bg-white/[0.03] border border-[#00E5FF]/15 p-5">
              <p className="text-[11px] uppercase tracking-widest text-[#00E5FF] mb-2">Hold The Energy</p>
              <p className="text-[13px] leading-relaxed text-white/70">
                In-key mixing, 8-second transitions max, clean edits that hit on the drop. Your Crowd, Amplified.
              </p>
            </div>
            <div className="rounded-2xl bg-white/[0.03] border border-[#FF5CDA]/15 p-5">
              <p className="text-[11px] uppercase tracking-widest text-[#FF5CDA] mb-2">Build The Moment</p>
              <p className="text-[13px] leading-relaxed text-white/70">
                Grand entrance to last call — we produce crescendos, not just songs. Control The Frequency.
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div>
            <h3 className="serif text-[18px] mb-3">Curate The Vibe - Top 40s and more.</h3>
            <div className="rounded-[20px] overflow-hidden bg-gradient-to-br from-[#FF5CDA]/60 via-[#FF5CDA]/20 to-[#00E5FF]/50 p-[1.5px] shadow-[0_0_22px_rgba(255,92,218,0.28),0_0_44px_rgba(0,229,255,0.18)]">
              <div className="rounded-[18px] overflow-hidden bg-[#0e0e0e]">
                <div className="relative aspect-[4/3] w-full bg-[#0a0a0a]">
                  <img loading="lazy" decoding="async" src={djSetup} alt="DJ setup clean, Top 40s and more, curating energy" className="w-full h-full object-cover object-center" style={{ objectPosition: "50% 30%", filter: "contrast(1.18) saturate(1.16) brightness(0.98)" }} />
                  <div className="absolute inset-0 pointer-events-none opacity-[0.12] mix-blend-color bg-[#FF5CDA]" />
                  <div className="absolute inset-0 pointer-events-none opacity-[0.08] mix-blend-color bg-[#00E5FF]" />
                  <div className="absolute inset-0 ring-1 ring-inset ring-[#FF5CDA]/20 pointer-events-none" />
                  <div className="absolute inset-0 ring-1 ring-inset ring-[#00E5FF]/20 rounded-[18px] pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="serif text-[16px] mb-3">All Night Motion — club crowd, hands up, every generation on the floor.</h3>
            <div className="rounded-[20px] overflow-hidden bg-gradient-to-br from-[#FF5CDA]/55 via-[#FF5CDA]/15 to-[#00E5FF]/45 p-[1.5px] shadow-[0_0_22px_rgba(255,92,218,0.26),0_0_42px_rgba(0,229,255,0.16)]">
              <div className="rounded-[18px] overflow-hidden bg-[#111]">
                <div className="relative">
                  <img loading="lazy" decoding="async" src={heroStage} alt="DJ on lit stage, club crowd energy, All Night Motion" className="w-full h-[380px] object-cover" style={{ objectPosition: "50% 22%", filter: "contrast(1.16) saturate(1.12) brightness(1.02)" }} />
                  <div className="absolute inset-0 pointer-events-none opacity-[0.16] mix-blend-color bg-[#FF5CDA]" />
                  <div className="absolute inset-0 pointer-events-none opacity-[0.10] mix-blend-color bg-[#00E5FF]" />
                  <div className="absolute inset-0 pointer-events-none opacity-35 mix-blend-overlay bg-[radial-gradient(ellipse_at_30%_20%,rgba(255,92,218,0.18),transparent_60%),radial-gradient(ellipse_at_80%_80%,rgba(0,229,255,0.14),transparent_55%)]" />
                  <div className="absolute inset-0 ring-1 ring-inset ring-[#FF5CDA]/20 pointer-events-none" />
                  <div className="absolute inset-0 ring-1 ring-inset ring-[#00E5FF]/15 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
