export const PAGES = [
  { id: "home", nav: "Home", heading: /Control The Frequency/ },
  { id: "services", nav: "DJ Services", heading: /Headliner Energy/ },
  { id: "weddings", nav: "Weddings", heading: /Weddings That/ },
  { id: "parties", nav: "Parties", heading: /PARTIES/ },
  { id: "contact", nav: "Contact", heading: /Let's Talk/ },
];

/** Collects console errors + uncaught exceptions. Google Fonts is ignored so tests pass offline. */
export function trackErrors(page) {
  const errors = [];
  page.on("pageerror", (e) => errors.push(`pageerror: ${e.message}`));
  page.on("console", (msg) => {
    if (msg.type() !== "error") return;
    const url = msg.location()?.url || "";
    if (/fonts\.(googleapis|gstatic)\.com/.test(url)) return;
    errors.push(`console: ${msg.text()} ${url}`);
  });
  return errors;
}

/** Scrolls through the page so lazy-loaded images load. */
export async function scrollThrough(page) {
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += 500) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 40));
    }
    window.scrollTo(0, 0);
  });
}
