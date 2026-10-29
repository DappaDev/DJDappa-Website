import { defineConfig, devices } from "@playwright/test";

// Tests run against the production build (npm run build + vite preview).
// Set BASE_URL to point the tests at an already-running server instead.
const BASE_URL = process.env.BASE_URL || "http://localhost:4173";

export default defineConfig({
  testDir: "./tests",
  timeout: 30_000,
  fullyParallel: true,
  reporter: [["list"]],
  use: { baseURL: BASE_URL, trace: "retain-on-failure" },
  projects: [
    { name: "desktop", use: { ...devices["Desktop Chrome"], viewport: { width: 1366, height: 900 } } },
    { name: "mobile", use: { ...devices["Pixel 7"] } },
  ],
  webServer: process.env.BASE_URL
    ? undefined
    : { command: "npm run build && npm run preview -- --strictPort", url: BASE_URL, reuseExistingServer: true, timeout: 120_000 },
});
