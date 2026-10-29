import { useState } from "react";
import discoBalls from "../assets/images/disco-balls.webp";
import { EMAIL, INSTAGRAM_HANDLE, INSTAGRAM_URL, LOCATION, MAILTO, TIKTOK_HANDLE, TIKTOK_URL } from "../data/site";
import { EMPTY_INQUIRY, buildInquiryText, buildMailto, validateInquiry } from "../lib/inquiry";

function Field({ id, label, error, children }) {
  return (
    <label
      htmlFor={id}
      className={`block rounded-xl bg-white/[0.04] border px-4 py-3 focus-within:border-[#FF5CDA]/60 transition ${
        error ? "border-[#FF5CDA]" : "border-white/[0.06]"
      }`}
    >
      <span className="block text-[10px] uppercase tracking-widest text-white/40">{label}</span>
      {children}
      {error && (
        <span id={`${id}-error`} role="alert" className="block mt-1 text-[11px] text-[#FF8DE9]">
          {error}
        </span>
      )}
    </label>
  );
}

const inputClass =
  "mt-1 w-full bg-transparent text-[14px] text-white placeholder:text-white/35 outline-none [color-scheme:dark]";

export default function Contact({ notify }) {
  const [form, setForm] = useState(EMPTY_INQUIRY);
  const [errors, setErrors] = useState({});
  const [sentMailto, setSentMailto] = useState(null);

  const update = (key) => (e) => {
    const value = e.target.value;
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((errs) => ({ ...errs, [key]: undefined }));
  };

  const errProps = (key) =>
    errors[key] ? { "aria-invalid": true, "aria-describedby": `${key}-error` } : {};

  const onSubmit = (e) => {
    e.preventDefault();
    const found = validateInquiry(form);
    setErrors(found);
    if (Object.keys(found).length) {
      notify("Add your name, email and date so I can check availability.");
      return;
    }
    const mailto = buildMailto(form);
    setSentMailto(mailto);
    window.location.href = mailto;
    notify(`Opening your email app — sending to ${EMAIL}`);
  };

  const onCopy = async () => {
    const text = buildInquiryText(form);
    try {
      await navigator.clipboard.writeText(text);
      notify(`Inquiry copied — paste it into an email to ${EMAIL}`);
    } catch {
      notify(`Couldn't copy automatically — email ${EMAIL}`);
    }
  };

  return (
    <>
      <section className="relative min-h-[86vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            fetchPriority="high"
            src={discoBalls}
            alt="Disco balls hanging with glittering lights"
            className="w-full h-full object-cover"
            style={{ objectPosition: "50% 35%" }}
          />
          <div className="absolute inset-0 bg-black/58" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-[#070707]/70 to-[#070707]/20" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/50" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/20" />
          <div className="absolute inset-0 opacity-60 mix-blend-overlay bg-[radial-gradient(ellipse_at_50%_20%,rgba(255,92,218,0.26),transparent_62%),radial-gradient(ellipse_at_80%_60%,rgba(0,229,255,0.22),transparent_60%)]" />
          <div className="absolute inset-0 opacity-20 mix-blend-color bg-[#FF5CDA]" />
          <div className="absolute inset-0 opacity-15 mix-blend-color bg-[#00E5FF]" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 w-full py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="px-3 py-1 rounded-full bg-[#FF5CDA] text-black text-[10px] tracking-[0.22em] uppercase font-semibold">Contact</span>
            <h1 className="serif mt-6 text-[44px] sm:text-[66px] lg:text-[80px] leading-[0.85] tracking-tight">
              Let's Talk
              <br />
              <span className="italic font-light text-white/80">Rocky Mountains</span>
              <br />
              <span className="text-pink-cyan-gradient">To Nationwide</span>
            </h1>
            <p className="mt-6 text-[16px] leading-relaxed text-white/60 max-w-[520px]">
              Tell me date, venue, guest count, vibe. I respond within 24 hours with timeline + rig spec. No packages — custom every time.
            </p>
            <div className="mt-10 space-y-4">
              <a href={MAILTO} className="flex items-center gap-4 group">
                <span aria-hidden="true" className="w-12 h-12 rounded-full bg-white text-black grid place-items-center group-hover:bg-[#FF5CDA] transition">✦</span>
                <div>
                  <p className="text-[11px] tracking-widest uppercase text-white/40">Email</p>
                  <p className="text-[16px] text-white">{EMAIL}</p>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <span aria-hidden="true" className="w-12 h-12 rounded-full bg-white/[0.06] border border-white/10 grid place-items-center">◎</span>
                <div>
                  <p className="text-[11px] tracking-widest uppercase text-white/40">Social</p>
                  <p className="text-[16px] text-white">
                    <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white underline-offset-2 hover:underline">
                      Instagram {INSTAGRAM_HANDLE}
                    </a>
                    {" • "}
                    <a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white underline-offset-2 hover:underline">
                      TikTok {TIKTOK_HANDLE}
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span aria-hidden="true" className="w-12 h-12 rounded-full bg-white/[0.06] border border-white/10 grid place-items-center">◐</span>
                <div>
                  <p className="text-[11px] tracking-widest uppercase text-white/40">Location</p>
                  <p className="text-[16px] text-white">{LOCATION}</p>
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            noValidate
            aria-labelledby="inquiry-heading"
            className="rounded-[28px] bg-[#121212]/90 border border-white/[0.08] backdrop-blur-xl p-8 lg:p-10"
          >
            <p className="text-[11px] tracking-[0.28em] uppercase text-white/30">Quick Inquiry</p>
            <h2 id="inquiry-heading" className="serif mt-3 text-[28px] leading-tight">
              Check availability — I'll build your timeline.
            </h2>
            <div className="mt-8 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Field id="name" label="Your Name" error={errors.name}>
                  <input id="name" name="name" autoComplete="name" value={form.name} onChange={update("name")} placeholder="First & last" className={inputClass} {...errProps("name")} />
                </Field>
                <Field id="email" label="Email" error={errors.email}>
                  <input id="email" name="email" type="email" autoComplete="email" value={form.email} onChange={update("email")} placeholder="you@email.com" className={inputClass} {...errProps("email")} />
                </Field>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field id="date" label="Date" error={errors.date}>
                  <input id="date" name="date" type="date" value={form.date} onChange={update("date")} className={inputClass} {...errProps("date")} />
                </Field>
                <Field id="guests" label="Guest Count">
                  <input id="guests" name="guests" type="number" min="1" inputMode="numeric" value={form.guests} onChange={update("guests")} placeholder="e.g. 120" className={inputClass} />
                </Field>
              </div>
              <Field id="venue" label="Venue">
                <input id="venue" name="venue" value={form.venue} onChange={update("venue")} placeholder="e.g. Denver Botanic Gardens, Rocky Mountains" className={inputClass} />
              </Field>
              <Field id="vibe" label="Vibe">
                <textarea id="vibe" name="vibe" rows={3} value={form.vibe} onChange={update("vibe")} placeholder="Wedding / Mitzvah / Corporate — tell me the story" className={`${inputClass} resize-none`} />
              </Field>
              <button type="submit" className="w-full py-3 rounded-full bg-[#FF5CDA] text-black text-[12px] tracking-widest uppercase font-semibold hover:bg-white transition">
                Send Inquiry
              </button>
              <button type="button" onClick={onCopy} className="w-full py-3 rounded-full bg-white/[0.06] border border-white/10 text-white text-[11px] tracking-widest uppercase hover:bg-white hover:text-black transition">
                Copy Inquiry Text
              </button>
              {sentMailto && (
                <p className="text-[12px] text-white/60 text-center">
                  Email app didn't open?{" "}
                  <a href={sentMailto} className="text-[#FF5CDA] underline underline-offset-2">
                    Send it to {EMAIL}
                  </a>{" "}
                  or use Copy Inquiry Text.
                </p>
              )}
              <p className="text-[11px] text-white/30 text-center">Response within 24 hours • No spam • Custom spec, no package push</p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
