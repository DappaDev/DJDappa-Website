import { test, expect } from "@playwright/test";
import { PAGES } from "./helpers.js";

test.describe("mobile menu", () => {
  test.beforeEach(({ isMobile }) => test.skip(!isMobile, "phone-only behaviour"));

  test("opens, navigates and closes", async ({ page }) => {
    await page.goto("/");
    const toggle = page.getByRole("button", { name: "Menu" });
    await expect(toggle).toHaveAttribute("aria-expanded", "false");
    await expect(page.getByRole("navigation", { name: "Main" })).toBeHidden();

    for (const p of PAGES) {
      await page.getByRole("button", { name: /^(Menu|Close)$/ }).click();
      const menu = page.getByRole("navigation", { name: "Mobile" });
      await expect(menu).toBeVisible();
      await menu.getByRole("link", { name: p.nav, exact: true }).click();
      await expect(menu).toBeHidden();
      await expect(page.locator("main")).toHaveAttribute("data-page", p.id);
    }
  });

  test("Close button hides the menu", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: "Menu" }).click();
    await page.getByRole("button", { name: "Close" }).click();
    await expect(page.getByRole("navigation", { name: "Mobile" })).toBeHidden();
  });

  test("no sideways scrolling on any page", async ({ page }) => {
    for (const p of PAGES) {
      await page.goto(`/#${p.id}`);
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
      expect(overflow, `#${p.id} scrolls sideways`).toBeLessThanOrEqual(1);
    }
  });
});
