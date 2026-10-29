import { test, expect } from "@playwright/test";
import { PAGES, trackErrors, scrollThrough } from "./helpers.js";

for (const p of PAGES) {
  test.describe(`#${p.id} page quality`, () => {
    test("no errors, every image loads and has alt text", async ({ page }) => {
      const errors = trackErrors(page);
      const failed = [];
      page.on("requestfailed", (r) => {
        if (!/fonts\.(googleapis|gstatic)\.com/.test(r.url())) failed.push(r.url());
      });
      await page.goto(`/#${p.id}`);
      await scrollThrough(page);
      await page.waitForLoadState("networkidle");

      // Check every image that is actually shown at this screen size (hidden ones never lazy-load).
      const images = await page.locator("img").evaluateAll((imgs) =>
        Promise.all(
          imgs
            .filter((img) => img.getClientRects().length > 0)
            .map(async (img) => {
              img.scrollIntoView();
              if (!img.complete) await new Promise((r) => { img.onload = img.onerror = r; setTimeout(r, 5000); });
              return { src: img.currentSrc || img.src, alt: img.getAttribute("alt"), ok: img.naturalWidth > 0 };
            })
        )
      );
      expect(images.length).toBeGreaterThan(1);
      for (const img of images) {
        expect(img.ok, `image failed to load: ${img.src}`).toBe(true);
        expect(img.alt?.trim(), `missing alt: ${img.src}`).toBeTruthy();
      }
      expect(failed).toEqual([]);
      expect(errors).toEqual([]);
    });

    test("links are safe and point to real destinations", async ({ page }) => {
      await page.goto(`/#${p.id}`);
      const links = await page.locator("a[href]").evaluateAll((as) =>
        as.map((a) => ({ href: a.getAttribute("href"), target: a.target, rel: a.rel, text: a.textContent.trim() }))
      );
      for (const l of links) {
        expect(l.href, `empty link "${l.text}"`).not.toBe("");
        expect(l.href, `placeholder link "${l.text}"`).not.toBe("#");
        if (/^https?:/.test(l.href)) {
          expect(l.target).toBe("_blank");
          expect(l.rel).toContain("noopener");
        }
        if (l.href.startsWith("mailto:")) expect(l.href).toMatch(/^mailto:book@djdappa\.com/);
      }
      // every button has a visible label
      const unlabeled = await page.locator("button").evaluateAll((bs) => bs.filter((b) => !b.textContent.trim() && !b.getAttribute("aria-label")).length);
      expect(unlabeled).toBe(0);
    });
  });
}

test("SEO basics are present", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator('meta[name="description"]')).toHaveAttribute("content", /DJ Dappa/);
  await expect(page.locator('link[rel="icon"]')).toHaveAttribute("href", "/favicon.svg");
  const ld = JSON.parse(await page.locator('script[type="application/ld+json"]').textContent());
  expect(ld["@type"]).toBe("LocalBusiness");
  expect(ld.email).toBe("book@djdappa.com");
  const fav = await page.request.get("/favicon.svg");
  expect(fav.ok()).toBe(true);
});

test("skip link jumps to main content", async ({ page, isMobile }) => {
  test.skip(isMobile, "keyboard test");
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(page.getByRole("link", { name: "Skip to content" })).toBeFocused();
});
