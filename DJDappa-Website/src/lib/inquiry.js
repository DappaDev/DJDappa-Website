import { EMAIL } from "../data/site.js";

export const EMPTY_INQUIRY = { name: "", email: "", date: "", guests: "", venue: "", vibe: "" };

export function formatDate(iso) {
  if (!iso) return "";
  const [y, m, d] = iso.split("-");
  return y && m && d ? `${m}/${d}/${y}` : iso;
}

export function buildInquiryText(f) {
  return [
    "Hi DAPPA,",
    "",
    "I'd like to check your availability:",
    "",
    `Name: ${f.name || "-"}`,
    `Email: ${f.email || "-"}`,
    `Event date: ${formatDate(f.date) || "-"}`,
    `Guest count: ${f.guests || "-"}`,
    `Venue: ${f.venue || "-"}`,
    `Vibe / event type: ${f.vibe || "-"}`,
    "",
    "Thanks!",
  ].join("\n");
}

export function buildInquirySubject(f) {
  const parts = ["Booking inquiry"];
  if (f.date) parts.push(formatDate(f.date));
  if (f.name) parts.push(f.name);
  return parts.join(" — ");
}

export function buildMailto(f) {
  const subject = encodeURIComponent(buildInquirySubject(f));
  const body = encodeURIComponent(buildInquiryText(f));
  return `mailto:${EMAIL}?subject=${subject}&body=${body}`;
}

export function validateInquiry(f) {
  const errors = {};
  if (!f.name.trim()) errors.name = "Please add your name.";
  if (!f.email.trim()) errors.email = "Please add your email so I can reply.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim())) errors.email = "That email doesn't look right.";
  if (!f.date) errors.date = "Pick your event date.";
  return errors;
}
