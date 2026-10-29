import dappaProfile from "../assets/images/dappa-profile.webp";
import outdoorCeremony from "../assets/images/outdoor-ceremony.webp";
import weddingBalcony from "../assets/images/wedding-balcony.webp";
import weddingFormal from "../assets/images/wedding-formal.webp";
import wirelessMics from "../assets/images/wireless-mics.webp";
import { MAILTO } from "../data/site";

export default function Weddings({ navigate }) {
  return (
    <>
      <section className="relative h-[82vh] min-h-[580px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img fetchPriority="high" src={weddingBalcony} alt="Woman in blush pink lace dress with flower crown on balcony overlooking wedding reception, chandelier bokeh, string lights" className="w-full h-full object-cover" style={{ objectPosition: "50% 42%" }} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-[#070707]/78 to-[#070707]/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black/40" />
        </div>
        <div className="absolute top-0 left-0 right-0 h-[1px] pink-cyan-gradient opacity-60" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 w-full pb-14 lg:pb-20">
          <div className="max-w-[720px]">
            <span className="px-3 py-1 rounded-full bg-[#FF5CDA] text-black text-[10px] tracking-[0.22em] uppercase font-semibold">Weddings • Soundtrack, Not Just Songs</span>
            <h1 className="serif mt-6 text-[38px] sm:text-[60px] lg:text-[72px] leading-[0.88] tracking-tight">
              Rocky Mountains
              <br />
              <span className="italic font-light">Weddings That</span>
              <br />
              <span className="text-pink-cyan-gradient">Feel Effortless</span>
              <br />
              <span className="text-[18px] sm:text-[22px] tracking-[0.2em] uppercase text-white/50 block mt-3">Zero Awkward Moments • Your Crowd, Amplified</span>
            </h1>
            <p className="mt-6 text-[16px] leading-relaxed text-white/60 max-w-[560px]">
              Soundtrack, Not Just Songs — ceremony audio that doesn't feedback, timelines that photographers love, and a dance floor that stays full From First Song to Last Call. Denver, Rocky Mountains, nationwide.
            </p>
          </div>
        </div>
      </section>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <p className="text-[11px] tracking-[0.32em] uppercase text-[#00E5FF] mb-4">What I Handle • Soundtrack, Not Just Songs</p>
            <h2 className="serif text-[32px] sm:text-[42px] leading-[0.95] tracking-tight">Ceremony to Afterparty Seamless — one timeline, Zero Awkward Moments.</h2>
            <div className="mt-8 space-y-5 prose-p">
              <p>
                {"Weddings are not parties — they're ceremonies with a party attached. "}
                <strong>Soundtrack, Not Just Songs</strong>
                {" means I handle ceremony audio (lav + handheld), processional cues, first dance edits, and a reception flow that keeps toasts heard — "}
                <strong>Zero Awkward Moments</strong>
                {", "}
                <strong>Your Crowd, Amplified</strong>
                . Officiant micing, lavalier for officiant, handheld for vows.
              </p>
              <p>
                {"From balcony first looks to outdoor mountain ceremonies in the Rocky Mountains, gear is hidden, sound is clear, and the timeline is minute-by-minute. "}
                <strong>Ceremony to Afterparty Seamless</strong>
                {" — Build The Moment from whispers to All Night Motion."}
              </p>
            </div>
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-5">
                <p className="text-[11px] uppercase tracking-widest text-white/40 mb-2">Ceremony to Afterparty Seamless</p>
                <p className="text-[13px] text-white/70">
                  Shure wireless, hidden QSC, backup laptop + power. Officiant heard without feedback, vows captured. Zero Awkward Moments.
                </p>
              </div>
              <div className="rounded-2xl bg-white/[0.03] border border-[#00E5FF]/15 p-5">
                <p className="text-[11px] uppercase tracking-widest text-[#00E5FF] mb-2">Your Crowd, Amplified</p>
                <p className="text-[13px] text-white/70">
                  Grand entrance, first dance, parent dances, toasts, bouquet — seamless handoffs, No Empty Floors, From First Song to Last Call.
                </p>
              </div>
            </div>
            <div className="mt-8 rounded-2xl border border-[#FF5CDA]/15 bg-[#121212] p-5 flex gap-4">
              <img loading="lazy" decoding="async" src={dappaProfile} alt="DJ Dappa" className="w-12 h-12 rounded-full object-cover border border-white/10" />
              <div>
                <p className="serif text-[16px]">DAPPA — Vibe Curator, Not A Playlist — 15+ years</p>
                <p className="text-[12px] text-white/50 mt-1">
                  We Don’t Play Music, We Produce The Night • New Orleans → Denver • Rocky Mountains specialist
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="rounded-[20px] overflow-hidden bg-gradient-to-br from-[#FF5CDA]/60 via-[#FF5CDA]/15 to-[#00E5FF]/50 p-[1.5px] shadow-[0_0_22px_rgba(255,92,218,0.32),0_0_42px_rgba(0,229,255,0.18)]">
              <div className="rounded-[18px] overflow-hidden bg-[#111] relative">
                <img loading="lazy" decoding="async" src={outdoorCeremony} alt="Outdoor wedding ceremony on grass, white chairs, mountains red rocks background, photographer in black foreground, Colorado vibe" className="w-full h-[380px] object-cover" style={{ objectPosition: "50% 50%" }} />
                <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-[#FF5CDA]/15" />
                <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-[#00E5FF]/15" />
              </div>
            </div>
            <div className="rounded-[20px] overflow-hidden bg-gradient-to-br from-[#00E5FF]/50 via-[#FF5CDA]/15 to-[#FF5CDA]/60 p-[1.5px] shadow-[0_0_22px_rgba(0,229,255,0.28),0_0_42px_rgba(255,92,218,0.18)]">
              <div className="rounded-[18px] overflow-hidden bg-[#0e0e0e] relative">
                <img loading="lazy" decoding="async" src={wirelessMics} alt="Sennheiser ew G4 wireless mic packs close-up, black bodypacks on dark surface" className="w-full h-[320px] object-cover" style={{ objectPosition: "50% 50%" }} />
                <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-[#FF5CDA]/20" />
                <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-[#00E5FF]/20" />
              </div>
            </div>
            <div className="rounded-[18px] overflow-hidden border border-[#FF5CDA]/10 bg-[#121212] p-5 flex flex-col justify-center">
              <p className="text-[11px] uppercase tracking-widest text-[#FF5CDA]">Hold The Energy • Control The Frequency</p>
              <p className="serif mt-2 text-[16px] leading-tight">Photographer synced, venue walked, pronunciation triple-checked — No Dead Air.</p>
              <p className="mt-3 text-[12px] text-white/40">Ceremony to afterparty — Main Stage Standard.</p>
            </div>
          </div>
        </div>
        <div className="mt-20 grid lg:grid-cols-[1.1fr_0.9fr] gap-8">
          <div className="rounded-[24px] overflow-hidden border border-[#FF5CDA]/25 bg-[#121212] shadow-[0_0_22px_rgba(255,92,218,0.22),0_0_40px_rgba(0,229,255,0.14)]">
            <div className="grid sm:grid-cols-2">
              <div className="relative overflow-hidden bg-[#0d0d0f]">
                <img loading="lazy" decoding="async" src={weddingFormal} alt="DJ Dappa in a tuxedo at a wedding reception" className="w-full h-[420px] sm:h-[460px] object-cover object-center" style={{ objectPosition: "50% 22%", filter: "contrast(1.08) saturate(1.08) brightness(1.02)" }} />
                <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-[#FF5CDA]/15" />
                <div className="absolute inset-0 pointer-events-none opacity-40 mix-blend-overlay bg-[radial-gradient(ellipse_at_75%_15%,rgba(255,92,218,0.18),transparent_60%),radial-gradient(ellipse_at_15%_85%,rgba(0,229,255,0.16),transparent_55%)]" />
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-[#FF5CDA] via-[#FF5CDA]/40 to-[#00E5FF] opacity-60" />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <p className="text-[11px] tracking-[0.28em] uppercase text-white/30">Gallery</p>
                <h3 className="serif mt-3 text-[28px] leading-[0.95]">Real weddings, real dance floors.</h3>
                <p className="mt-4 text-[13px] leading-relaxed text-white/55">
                  No stock, no staging — Rocky Mountains ceremonies, Denver receptions, nationwide celebrations.
                </p>
                <button onClick={() => navigate("contact")} className="mt-6 w-fit px-5 py-2.5 rounded-full bg-[#FF5CDA] text-black text-[11px] tracking-widest uppercase font-semibold">Check Availability</button>
              </div>
            </div>
          </div>
          <div className="rounded-[24px] bg-[#FF5CDA] text-black p-8 sm:p-10 relative overflow-hidden">
            <p className="text-[11px] tracking-[0.32em] uppercase text-black/60 font-semibold">Book</p>
            <h3 className="serif mt-3 text-[32px] leading-[0.9]">Let's make it feel effortless.</h3>
            <p className="mt-4 text-[14px] text-black/70">Tell me venue, guest count, vibe. Custom timeline + spec.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={MAILTO} className="px-6 py-3 rounded-full bg-black text-white text-[11px] tracking-widest uppercase font-semibold">Email DAPPA</a>
              <span className="px-5 py-3 rounded-full bg-black/10 border border-black/10 text-[11px] tracking-widest uppercase">Denver • Rocky Mountains</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
