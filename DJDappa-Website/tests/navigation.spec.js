import { test, expect } from "@playwright/test";
import { PAGES, trackErrors } from "./helpers.js";

test.describe("navigation", () => {
  test("home loads with hero, logo and booking CTA", async ({ page }) => {
    const errors = trackErrors(page);
    await page.goto("/");
    await expect(page).toHaveTitle(/DJ Dappa/);
    await expect(page.getByRole("heading", { level: 1 })).toContainText("Control The Frequency");
    await expect(page.getByRole("banner").getByRole("link", { name: "Book DAPPA" })).toHaveAttribute("href", "mailto:book@djdappa.com");
    await expect(page.getByRole("img", { name: "MoonRae Productions" }).first()).toBeVisible();
    expect(errors).toEqual([]);
  });

  for (const p of PAGES) {
    test(`deep link #${p.id} opens the ${p.nav} page`, async ({ page }) => {
      await page.goto(`/#${p.id}`);
      await expect(page.locator("main")).toHaveAttribute("data-page", p.id);
      await expect(page.getByRole("heading", { level: 1 })).toContainText(p.heading);
      await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
    });
  }

  test("unknown hash falls back to home", async ({ page }) => {
    await page.goto("/#does-not-exist");
    await expect(page.locator("main")).toHaveAttribute("data-page", "home");
  });

  test("main nav switches pages, updates URL, title and active state", async ({ page, isMobile }) => {
    test.skip(isMobile, "desktop nav is hidden on phones (covered in mobile.spec)");
    await page.goto("/");
    const nav = page.getByRole("navigation", { name: "Main" });
    for (const p of PAGES) {
      await nav.getByRole("link", { name: p.nav, exact: true }).click();
      await expect(page).toHaveURL(new RegExp(`#${p.id}$`));
      await expect(page.locator("main")).toHaveAttribute("data-page", p.id);
      await expect(page.getByRole("heading", { level: 1 })).toContainText(p.heading);
      await expect(nav.getByRole("link", { name: p.nav, exact: true })).toHaveAttribute("aria-current", "page");
      await expect(page).not.toHaveTitle("");
    }
  });

  test("browser back and forward buttons move between pages", async ({ page }) => {
    await page.goto("/#home");
    await page.goto("/#weddings");
    await page.goto("/#contact");
    await page.goBack();
    await expect(page.locator("main")).toHaveAttribute("data-page", "weddings");
    await page.goBack();
    await expect(page.locator("main")).toHaveAttribute("data-page", "home");
    await page.goForward();
    await expect(page.locator("main")).toHaveAttribute("data-page", "weddings");
  });

  test("home cards open their pages", async ({ page }) => {
    for (const [title, id] of [["DJ Services", "services"], ["Weddings", "weddings"], ["Birthday Parties", "parties"]]) {
      await page.goto("/#home");
      await page.locator("main button", { hasText: title }).filter({ hasText: "Explore" }).click();
      await expect(page.locator("main")).toHaveAttribute("data-page", id);
    }
  });

  test("in-page CTAs route correctly", async ({ page }) => {
    await page.goto("/#home");
    await page.getByRole("button", { name: "Check Availability" }).click();
    await expect(page.locator("main")).toHaveAttribute("data-page", "contact");

    await page.goto("/#parties");
    await page.locator("main").getByRole("button", { name: "DJ Services" }).click();
    await expect(page.locator("main")).toHaveAttribute("data-page", "services");

    await page.getByRole("button", { name: "Weddings" }).first().click();
    await expect(page.locator("main")).toHaveAttribute("data-page", "weddings");
  });

  test("footer links navigate", async ({ page }) => {
    await page.goto("/#contact");
    const footer = page.getByRole("contentinfo");
    await footer.getByRole("link", { name: "Weddings" }).click();
    await expect(page.locator("main")).toHaveAttribute("data-page", "weddings");
    await expect(footer).toContainText(`© ${new Date().getFullYear()} MoonRae Productions`);
  });

  test("logo returns to home", async ({ page }) => {
    await page.goto("/#parties");
    await page.getByRole("link", { name: "DJ Dappa — home" }).click();
    await expect(page.locator("main")).toHaveAttribute("data-page", "home");
  });
});
