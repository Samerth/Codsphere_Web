import { test, expect, type Page } from "@playwright/test";

/**
 * Guards fix 8: a live CodCRM form's height postMessage must not reopen
 * a collapsed booking (or newsletter) fallback on /contact.
 *
 * Run against a local production server:
 *   npm run build && npm run start
 *   npx playwright test tests/codcrm-embed-fallback.spec.ts --project=chromium
 */

async function assertContactBookingCollapsed(page: Page) {
  await page.goto("/contact#book", { waitUntil: "domcontentloaded" });

  const fallback = page.locator("#book #booking-fallback");
  await expect(fallback).toBeVisible({ timeout: 10_000 });
  await expect(fallback.getByRole("heading", { name: /booking calendar is not available/i })).toBeVisible();
  await expect(fallback.getByRole("link", { name: /open the contact form/i })).toBeVisible();

  // The live contact form must still be on the page (this is the embed that
  // used to post a height and undo the booking fallback).
  const contactForm = page.locator("#contact-form iframe[title='Contact form']");
  await expect(contactForm).toBeVisible({ timeout: 10_000 });

  // Stay long enough for a late height message (Designer waited 10+ seconds).
  await page.waitForTimeout(10_000);

  await expect(fallback).toBeVisible();
  await expect(page.locator("#book iframe[title='Book a 30-minute call']")).toHaveCount(0);

  const bookingBox = await fallback.boundingBox();
  expect(bookingBox, "collapsed fallback should be in the document").toBeTruthy();
  expect(bookingBox!.height).toBeLessThan(400);

  await expect(contactForm).toBeVisible();
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
});
