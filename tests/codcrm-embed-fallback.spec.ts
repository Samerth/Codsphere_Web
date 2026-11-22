import { test, expect, type Page } from "@playwright/test";

/**
 * Guards fix 8 and Tester's follow-up on /contact:
 * - A live form's height postMessage must not reopen a collapsed booking
 *   or newsletter fallback.
 * - Once /api/codcrm-embed-status returns ok:false, that result is latched.
 * - The iframe stays mounted but hidden until the status check resolves,
 *   so "This booking link isn't available" / "Form not found" never flash.
 *
 * Run against a local production server:
 *   npm run build && npm run start
 *   npx playwright test --config=playwright.lead-engine.config.ts
 */

const BOOKING_IFRAME = "#book iframe[title='Book a 30-minute call']";
const NEWSLETTER_IFRAME = "footer iframe[title='Subscribe to CodSphere updates']";

async function installFlashProbe(page: Page) {
  await page.addInitScript(() => {
    const seen = { booking: false, newsletter: false };
    (window as unknown as { __embedFlash: typeof seen }).__embedFlash = seen;
    const isVisiblyShown = (selector: string) => {
      const node = document.querySelector(selector);
      if (!node) return false;
      let el: Element | null = node;
      while (el && el instanceof HTMLElement) {
        const style = window.getComputedStyle(el);
        if (style.display === "none" || style.visibility === "hidden" || style.opacity === "0") {
          return false;
        }
        el = el.parentElement;
      }
      const rect = node.getBoundingClientRect();
      return rect.width > 1 && rect.height > 50;
    };
    const tick = () => {
      if (isVisiblyShown("#book iframe[title='Book a 30-minute call']")) seen.booking = true;
      if (isVisiblyShown("footer iframe[title='Subscribe to CodSphere updates']")) seen.newsletter = true;
      window.requestAnimationFrame(tick);
    };
    window.requestAnimationFrame(tick);
  });
}

async function isVisiblyShown(page: Page, selector: string) {
  const locator = page.locator(selector);
  if ((await locator.count()) === 0) return { visible: false, height: 0 };
  return locator.first().evaluate((node) => {
    let el: Element | null = node;
    while (el && el instanceof HTMLElement) {
      const style = window.getComputedStyle(el);
      if (style.display === "none" || style.visibility === "hidden" || style.opacity === "0") {
        return { visible: false, height: node.getBoundingClientRect().height };
      }
      el = el.parentElement;
    }
    const rect = node.getBoundingClientRect();
    return { visible: rect.width > 1 && rect.height > 50, height: rect.height };
  });
}

async function assertContactBookingCollapsed(page: Page) {
  await installFlashProbe(page);
  await page.goto("/contact#book", { waitUntil: "domcontentloaded" });

  const fallback = page.locator("#book #booking-fallback");
  await expect(fallback).toBeVisible({ timeout: 10_000 });
  await expect(fallback.getByRole("heading", { name: /booking calendar is not available/i })).toBeVisible();
  await expect(fallback.getByRole("link", { name: /open the contact form/i })).toBeVisible();

  const footerFallback = page.locator("footer").getByText("The signup form is being connected");
  await expect(footerFallback).toBeVisible({ timeout: 10_000 });

  const contactForm = page.locator("#contact-form iframe[title='Contact form']");
  await expect(contactForm).toBeVisible({ timeout: 10_000 });

  // Stay long enough for a late height message (Designer waited 10+ seconds).
  await page.waitForTimeout(10_000);

  await expect(fallback).toBeVisible();
  await expect(footerFallback).toBeVisible();

  const bookingAfter = await isVisiblyShown(page, BOOKING_IFRAME);
  expect(bookingAfter.visible, "booking iframe must stay hidden after ok:false is latched").toBe(false);

  const newsletterAfter = await isVisiblyShown(page, NEWSLETTER_IFRAME);
  expect(newsletterAfter.visible, "newsletter iframe must stay hidden after ok:false is latched").toBe(false);

  const bookingBox = await fallback.boundingBox();
  expect(bookingBox, "collapsed fallback should be in the document").toBeTruthy();
  expect(bookingBox!.height).toBeLessThan(400);

  await expect(contactForm).toBeVisible();

  const flash = await page.evaluate(() => (window as unknown as { __embedFlash: { booking: boolean; newsletter: boolean } }).__embedFlash);
  expect(flash.booking, "booking iframe must not flash before the status check").toBe(false);
  expect(flash.newsletter, "newsletter iframe must not flash 'Form not found' before the status check").toBe(false);
}

test.describe("CodCRM embed fallback isolation on /contact", () => {
  test("collapses the dead booking iframe at 1440 while the live form stays", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await assertContactBookingCollapsed(page);
  });

  test("collapses the dead booking iframe at 390 while the live form stays", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await assertContactBookingCollapsed(page);
  });

  test("stays collapsed across three reloads at 1440", async ({ page }) => {
    test.setTimeout(120_000);
    await page.setViewportSize({ width: 1440, height: 900 });
    for (let i = 0; i < 3; i += 1) {
      await assertContactBookingCollapsed(page);
    }
  });

  test("reveals a live form on its own height message when status is unreachable", async ({ page }) => {
    test.setTimeout(30_000);
    await page.setViewportSize({ width: 1440, height: 900 });

    await page.route("**/api/codcrm-embed-status**", async (route) => {
      const url = route.request().url();
      const params = new URL(url).searchParams;
      if (params.get("kind") === "form" && params.get("slug") === "show-us-your-order-flow") {
        await route.fulfill({
          status: 200,
          contentType: "application/json",
          body: JSON.stringify({ ok: null, error: "unreachable" }),
        });
        return;
      }
      await route.continue();
    });

    await installFlashProbe(page);
    await page.goto("/contact#book", { waitUntil: "domcontentloaded" });

    const contactForm = page.locator("#contact-form iframe[title='Contact form']");
    await expect(contactForm).toBeVisible({ timeout: 10_000 });
    await expect(page.locator("#contact-form").getByText("The form could not load")).toHaveCount(0);

    // Booking still collapses from a real ok:false; the form intercept must not leak.
    const fallback = page.locator("#book #booking-fallback");
    await expect(fallback).toBeVisible({ timeout: 10_000 });

    // Stay past the 8s timeout so a regression would swap the live form for its fallback.
    await page.waitForTimeout(9_000);

    await expect(contactForm).toBeVisible();
    const formShown = await isVisiblyShown(page, "#contact-form iframe[title='Contact form']");
    expect(formShown.visible, "live form must stay revealed when status is ok:null").toBe(true);
    expect(formShown.height).toBeGreaterThan(200);
    await expect(page.locator("#contact-form").getByText("The form could not load")).toHaveCount(0);
    await expect(fallback).toBeVisible();
  });
});
