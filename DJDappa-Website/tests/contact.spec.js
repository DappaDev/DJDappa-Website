import { test, expect } from "@playwright/test";

test.describe("contact form", () => {
  test("shows errors when required fields are missing", async ({ page }) => {
    await page.goto("/#contact");
    await page.getByRole("button", { name: "Send Inquiry" }).click();
    await expect(page.getByText("Please add your name.")).toBeVisible();
    await expect(page.getByText("Please add your email so I can reply.")).toBeVisible();
    await expect(page.getByText("Pick your event date.")).toBeVisible();
    await expect(page.getByLabel("Your Name")).toHaveAttribute("aria-invalid", "true");
    await expect(page.getByRole("status")).toContainText("Add your name, email and date");

    await page.getByLabel("Your Name").fill("Jamie");
    await expect(page.getByText("Please add your name.")).toBeHidden();
  });

  test("rejects a bad email address", async ({ page }) => {
    await page.goto("/#contact");
    await page.getByLabel("Email").fill("not-an-email");
    await page.getByRole("button", { name: "Send Inquiry" }).click();
    await expect(page.getByText("That email doesn't look right.")).toBeVisible();
  });

  test("valid inquiry opens a pre-filled email to book@djdappa.com", async ({ page }) => {
    await page.goto("/#contact");
    await page.getByLabel("Your Name").fill("Jamie Rivera");
    await page.getByLabel("Email").fill("jamie@example.com");
    await page.getByLabel("Date").fill("2027-06-12");
    await page.getByLabel("Guest Count").fill("150");
    await page.getByLabel("Venue").fill("Denver Botanic Gardens");
    await page.getByLabel("Vibe").fill("Wedding, Top 40 + Motown");

    await page.getByRole("button", { name: "Send Inquiry" }).click();
    await expect(page.getByRole("status")).toContainText("Opening your email app");

    const url = await page.getByRole("link", { name: "Send it to book@djdappa.com" }).getAttribute("href");
    const decoded = decodeURIComponent(url);
    expect(url.startsWith("mailto:book@djdappa.com?subject=")).toBe(true);
    expect(decoded).toContain("Booking inquiry — 06/12/2027 — Jamie Rivera");
    expect(decoded).toContain("Guest count: 150");
    expect(decoded).toContain("Venue: Denver Botanic Gardens");
  });

  test("copy button puts the inquiry on the clipboard", async ({ page, context, browserName }) => {
    test.skip(browserName !== "chromium", "clipboard permissions are Chromium-only");
    await context.grantPermissions(["clipboard-read", "clipboard-write"]);
    await page.goto("/#contact");
    await page.getByLabel("Your Name").fill("Jamie Rivera");
    await page.getByLabel("Date").fill("2027-06-12");
    await page.getByRole("button", { name: "Copy Inquiry Text" }).click();
    await expect(page.getByRole("status")).toContainText("Inquiry copied");
    const text = await page.evaluate(() => navigator.clipboard.readText());
    expect(text).toContain("Name: Jamie Rivera");
    expect(text).toContain("Event date: 06/12/2027");
  });
});
