import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const localAssets = ["/hero-poster.jpg", "/overview-poster.jpg", "/problem-poster.jpg", "/social-preview.png", "/favicon.ico", "/sitemap.xml"];

test("homepage loads without runtime errors or horizontal overflow", async ({ page }, testInfo) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/");
  await expect(page).toHaveTitle(/Career Maps/);
  await expect(page.getByRole("main")).toBeVisible();
  await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
  await expect(page.locator("video")).toHaveCount(3);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  await page.screenshot({ path: testInfo.outputPath("homepage.png"), fullPage: true, animations: "disabled" });
  expect(errors).toEqual([]);
});

test("local posters and social assets have correct content types", async ({ request }) => {
  for (const asset of localAssets) {
    const response = await request.get(asset);
    expect(response.ok(), asset).toBe(true);
    expect(response.headers()["content-type"], asset).not.toContain("text/html");
  }
});

test("production headers and metadata are present", async ({ page, request }) => {
  const response = await request.get("/");
  expect(response.headers()["content-security-policy"]).toContain("frame-ancestors 'none'");
  expect(response.headers()["x-content-type-options"]).toBe("nosniff");
  expect(response.headers()["x-frame-options"]).toBe("DENY");
  await page.goto("/");
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", "https://careermaps.co.in/");
  await expect(page.locator('meta[property="og:image"]')).toHaveAttribute("content", "https://careermaps.co.in/social-preview.png");
  expect(await page.content()).not.toContain("lovable");
});

test("below-fold videos load on approach and respect reduced motion", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  const overview = page.getByRole("region", { name: "Career Maps platform overview" });
  const video = overview.locator("video");
  await expect(video).not.toHaveAttribute("src");
  await overview.scrollIntoViewIfNeeded();
  await expect(video).not.toHaveAttribute("src");
  await overview.getByRole("button", { name: "Play Career Maps platform overview", exact: true }).click();
  await expect(video).toHaveAttribute("src", "/overview-optimized.mp4");
  await expect(overview.getByRole("button", { name: "Pause Career Maps platform overview", exact: true })).toBeVisible();
});

test("offscreen videos are deferred and pause after scrolling away", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.goto("/");
  const heroVideo = page.getByRole("region", { name: /Career Maps: AI-powered/ }).locator("video");
  const overview = page.getByRole("region", { name: "Career Maps platform overview" });
  await expect(overview.locator("video")).not.toHaveAttribute("src");
  await overview.scrollIntoViewIfNeeded();
  await expect(overview.locator("video")).toHaveAttribute("src", "/overview-optimized.mp4");
  await expect.poll(() => heroVideo.evaluate((video: HTMLVideoElement) => video.paused)).toBe(true);
});

test("failed hero video retains a visible poster", async ({ page }) => {
  await page.route("**/hero-background.mp4", (route) => route.abort());
  await page.goto("/");
  const hero = page.getByRole("region", { name: /Career Maps: AI-powered/ });
  await expect(hero.getByRole("status")).toContainText("Video unavailable");
  await expect(hero.locator("img")).toBeVisible();
  await expect(hero.locator("video")).toHaveCSS("opacity", "0");
});

test("review sliding motion can be paused and resumed", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.goto("/");
  const pause = page.getByRole("button", { name: "Pause animation", exact: true });
  await pause.scrollIntoViewIfNeeded();
  await pause.click();
  const track = page.locator(".reviews-track").first();
  await expect(track).toHaveCSS("animation-play-state", "paused");
  await page.getByRole("button", { name: "Resume animation", exact: true }).click();
  await page.mouse.move(0, 0);
  await expect(track).toHaveCSS("animation-play-state", "running");
});

test("contact actions are consistent without sending messages", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("link", { name: "Talk to our team" })).toHaveAttribute("href", "https://wa.me/918971890397");
  await expect(page.getByRole("link", { name: "Request a demo" })).toHaveAttribute("href", /mailto:contact@careermaps.com/);
  const phoneLinks = page.locator('a[href^="tel:"]');
  await expect(phoneLinks).toHaveCount(2);
  for (const link of await phoneLinks.all()) await expect(link).toHaveAttribute("href", "tel:+918971890397");
  await expect(page.locator('a[href="#"]')).toHaveCount(0);
});

test("unknown routes offer a working return home link", async ({ page }) => {
  await page.goto("/not-a-real-page");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("This page isn’t here.");
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", "noindex");
  await page.getByRole("link", { name: "Return to home" }).click();
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(/Career Maps:/);
});

test("main page passes automated WCAG checks", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"]).analyze();
  expect(results.violations).toEqual([]);
});
