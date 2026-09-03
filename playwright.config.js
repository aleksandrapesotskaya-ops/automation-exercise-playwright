import { defineConfig } from "@playwright/test";
export default defineConfig({
  testDir: "./tests",
  timeout: 30 * 1000,
  retries: 1,
  reporter: [["html", { open: "never" }]],
  use: {
    baseURL: "https://automationexercise.com/",
    headless: true,
    screenshot: "only-on-failure",
    trace: "on-first-retry",
  },
});
